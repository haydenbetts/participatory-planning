(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/TileLayerView2D":1424,"esri/views/layers/LayerView":1461,"esri/views/layers/RefreshableLayerView":1468,"esri/views/2d/tiling/TileSpan":1469,"esri/core/pbf":1471,"esri/views/2d/layers/LayerView2D":1475,"esri/views/2d/tiling/LODInfo":1476,"esri/views/2d/tiling/TileCoverage":1477,"esri/views/2d/tiling/TileInfoView":1480,"esri/renderers/support/clickToleranceUtils":1489,"esri/views/2d/layers/support/popupUtils2D":1602,"esri/views/layers/TileLayerView":1716})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1424:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(2),i(1),i(10),i(12),i(15),i(11),i(14),i(8),i(0),i(1462),i(1475),i(1602),i(1480),i(346),i(1582),i(1583),i(1716)],void 0===(o=function(e,t,i,r,o,n,s,a,l,u,p,h,c,f,d,y,v,g,_){var m=a.getLogger("esri.views.2d.layers.TileLayerView2D"),w=[0,0];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._tileStrategy=null,t._tileInfoView=null,t._fetchQueue=null,t.container=new h.BitmapContainer,t.layer=null,t}return i(t,e),t.prototype.initialize=function(){var e,t=this,i=this.layer.tileInfo,r=i&&i.spatialReference;r||(e=new s("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),r.equals(this.view.spatialReference)||(e=new s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",function(e){t.refresh()}),e&&this.addResolvingPromise(u.reject(e))},Object.defineProperty(t.prototype,"resampling",{get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new d(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new v({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,i){return e.fetchTile(t,i)}}),this._tileStrategy=new g({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView})},t.prototype.detach=function(){this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return f.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(e){return n(this,void 0,void 0,function(){var e=this;return o(this,function(t){return this.updateRequested||this.suspended?[2]:(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(function(t){return e._enqueueTileFetch(t)}),this.notifyChange("updating"),[2])})})},t.prototype.isUpdating=function(){return this._fetchQueue.length>0},t.prototype.getTileBounds=function(e,t){return this._tileInfoView.getTileBounds(e,t)},t.prototype.getTileCoords=function(e,t){return this._tileInfoView.getTileCoords(e,t)},t.prototype.getTileResolution=function(e){return this._tileInfoView.getTileResolution(e)},t.prototype.acquireTile=function(e){var t,i,r=h.BitmapTile.pool.acquire();return r.key.set(e),t=this._tileInfoView.getTileCoords(w,r.key),r.x=t[0],r.y=t[1],r.resolution=this._tileInfoView.getTileResolution(r.key),i=this._tileInfoView.tileInfo.size,r.width=i[0],r.height=i[1],this._enqueueTileFetch(r),this.requestUpdate(),r},t.prototype.releaseTile=function(e){var t=this;this._fetchQueue.abort(e.key.id),this.container.removeChild(e),e.once("detach",function(){h.BitmapTile.pool.release(e),t.requestUpdate()}),this.requestUpdate()},t.prototype.fetchTile=function(e,t){return n(this,void 0,void 0,function(){var i,r,n,s,a,p;return o(this,function(o){switch(o.label){case 0:if(i="tilemapCache"in this.layer?this.layer.tilemapCache:null,r=!l.isNone(t)&&t.signal,i)return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._fetchImage(e,r)];case 2:return[2,o.sent()];case 3:if(n=o.sent(),!u.isAbortError(n)&&!this.resampling)return[2,this._createBlankImage()];throw n;case 4:s=y.pool.acquire(),o.label=5;case 5:return o.trys.push([5,8,,10]),[4,i.fetchAvailabilityUpsample(e.level,e.row,e.col,s)];case 6:return o.sent(),s.level===e.level||this.resampling?[4,this._fetchImage(s,r)]:[2,this._createBlankImage()];case 7:return a=o.sent(),[3,10];case 8:if(p=o.sent(),u.isAbortError(p))throw p;return[4,this._fetchImage(e,r)];case 9:return a=o.sent(),[3,10];case 10:return this.resampling&&s.level!==e.level?[2,this._resampleImage(a,s.level,s.row,s.col,e.level,e.row,e.col)]:[2,a]}})})},t.prototype._enqueueTileFetch=function(e){return n(this,void 0,void 0,function(){var t,i,r=this;return o(this,function(o){switch(o.label){case 0:if(this._fetchQueue.has(e.key.id))return[2];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._fetchQueue.push(e.key)];case 2:return t=o.sent(),e.source=t,e.width=this._tileInfoView.tileInfo.size[0],e.height=this._tileInfoView.tileInfo.size[1],e.once("attach",function(){return r.requestUpdate()}),this.container.addChild(e),[3,4];case 3:return i=o.sent(),u.isAbortError(i)||m.error(i),[3,4];case 4:return this.requestUpdate(),[2]}})})},t.prototype._fetchImage=function(e,t){return n(this,void 0,void 0,function(){return o(this,function(i){return[2,this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})]})})},t.prototype._resampleImage=function(e,t,i,r,o,n,s){var a=this._tileInfoView.tileInfo.size,l=this._tileInfoView.getTileResolution(t),u=this._tileInfoView.getTileResolution(o),p=this._tileInfoView.getLODInfoAt(o),h=p.getXForColumn(s),c=p.getYForRow(n),f=(p=this._tileInfoView.getLODInfoAt(t)).getXForColumn(r),d=p.getYForRow(i),y=Math.round((h-f)/l),v=Math.round(-(c-d)/l),g=Math.round(a[0]*(u/l)),_=Math.round(a[1]*(u/l)),m=this._createBlankImage();return m.getContext("2d").drawImage(e,y,v,g,_,0,0,a[0],a[1]),m},t.prototype._createBlankImage=function(){var e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return t.width=e[0],t.height=e[1],t},r([p.property({dependsOn:["layer.resampling?"]})],t.prototype,"resampling",null),r([p.subclass("esri.views.2d.layers.TileLayerView2D")],t)}(p.declared(c,_))}.apply(null,r))||(e.exports=o)},1461:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(2),i(1),i(37),i(345),i(255),i(11),i(201),i(8),i(0)],void 0===(o=function(e,t,i,r,o,n,s,a,l,u,p){return function(e){function t(t){var i=e.call(this)||this;return i.layer=null,i.parent=null,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",t),u.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r([p.property()],t.prototype,"layer",void 0),r([p.property()],t.prototype,"parent",void 0),r([p.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),r([p.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),r([p.property()],t.prototype,"view",void 0),r([p.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r([p.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r([p.subclass("esri.views.layers.LayerView")],t)}(p.declared(n,o,s.Identifiable,l))}.apply(null,r))||(e.exports=o)},1468:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(2),i(1),i(10),i(12),i(6),i(8),i(0)],void 0===(o=function(e,t,i,r,o,n,s,a,l){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t.refreshDebounced=a.debounce(function(e,i){return n(t,void 0,void 0,function(){var t;return o(this,function(r){switch(r.label){case 0:return"number"==typeof e?t=e:(t=Date.now(),i=e),this._set("refreshTimestamp",t),this.doRefresh?[4,this.doRefresh(i)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})},2e3),t}return i(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},r([l.property()],t.prototype,"layer",void 0),r([l.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),r([l.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),r([l.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(l.declared(s))}.apply(null,r))||(e.exports=o)},1469:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(85)],void 0===(o=function(e,t,i){return function(){function e(e,t,i){this.row=e,this.colFrom=t,this.colTo=i}return e.pool=new i(e,!0),e}()}.apply(null,r))||(e.exports=o)},1471:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(22)],void 0===(o=function(e,t,i){var r=i("esri-text-decoder")?TextDecoder:null;return function(){function e(e,t,i,o){this._tag=0,this._dataType=99,this._data=e,this._dataView=t,this._pos=i||0,this._end=o||e.byteLength,this._textDecoder=r?new r("utf-8"):null}return e.prototype.clone=function(){return new e(this._data,this._dataView,this._pos,this._end)},e.prototype.pos=function(){return this._pos},e.prototype.next=function(e){for(;;){if(this._pos===this._end)return!1;var t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0},e.prototype.empty=function(){return this._pos>=this._end},e.prototype.tag=function(){return this._tag},e.prototype.getInt32=function(){return this._decodeVarint()},e.prototype.getInt64=function(){return this._decodeVarint()},e.prototype.getUInt32=function(){var e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))},e.prototype.getUInt64=function(){return this._decodeVarint()},e.prototype.getSInt32=function(){var e=this.getUInt32();return e>>>1^-(1&e)|0},e.prototype.getSInt64=function(){return this._decodeSVarint()},e.prototype.getBool=function(){var e=0!==this._data[this._pos];return this._skip(1),e},e.prototype.getEnum=function(){return this._decodeVarint()},e.prototype.getFixed64=function(){var e=this._dataView,t=this._pos,i=e.getUint32(t,!0)+4294967296*e.getUint32(t+4,!0);return this._skip(8),i},e.prototype.getSFixed64=function(){var e=this._dataView,t=this._pos,i=e.getUint32(t,!0)+4294967296*e.getInt32(t+4,!0);return this._skip(8),i},e.prototype.getDouble=function(){var e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e},e.prototype.getFixed32=function(){var e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e},e.prototype.getSFixed32=function(){var e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e},e.prototype.getFloat=function(){var e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e},e.prototype.getString=function(){var e=this._getLength(),t=this._pos,i=this._toString(this._data,t,t+e);return this._skip(e),i},e.prototype.getBytes=function(){var e=this._getLength(),t=this._pos,i=this._toBytes(this._data,t,t+e);return this._skip(e),i},e.prototype.getMessage=function(){var t=this._getLength(),i=this._pos,r=new e(this._data,this._dataView,i,i+t);return this._skip(t),r},e.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}},e.prototype._skip=function(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e},e.prototype._decodeVarint=function(){var e,t=this._data,i=this._pos,r=0;if(this._end-i>=10)do{if(r|=127&(e=t[i++]),0==(128&e))break;if(r|=(127&(e=t[i++]))<<7,0==(128&e))break;if(r|=(127&(e=t[i++]))<<14,0==(128&e))break;if(r|=(127&(e=t[i++]))<<21,0==(128&e))break;if(r+=268435456*(127&(e=t[i++])),0==(128&e))break;if(r+=34359738368*(127&(e=t[i++])),0==(128&e))break;if(r+=4398046511104*(127&(e=t[i++])),0==(128&e))break;if(r+=562949953421312*(127&(e=t[i++])),0==(128&e))break;if(r+=72057594037927940*(127&(e=t[i++])),0==(128&e))break;if(r+=0x8000000000000000*(127&(e=t[i++])),0==(128&e))break;throw new Error("Varint too long!")}while(0);else{for(var o=1;i!==this._end&&0!=(128&(e=t[i]));)++i,r+=(127&e)*o,o*=128;if(i===this._end)throw new Error("Varint overrun!");++i,r+=e*o}return this._pos=i,r},e.prototype._decodeSVarint=function(){var e=this._decodeVarint();return e%2?-(e+1)/2:e/2},e.prototype._getLength=function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()},e.prototype._toString=function(e,t,i){if(i=Math.min(this._end,i),this._textDecoder){var r=e.subarray(t,i);return this._textDecoder.decode(r)}for(var o="",n="",s=t;s<i;++s){var a=e[s];128&a?n+="%"+a.toString(16):(o+=decodeURIComponent(n)+String.fromCharCode(a),n="")}return n.length&&(o+=decodeURIComponent(n)),o},e.prototype._toBytes=function(e,t,i){return i=Math.min(this._end,i),new Uint8Array(e.buffer,t,i-t)},e}()}.apply(null,r))||(e.exports=o)},1475:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(2),i(1),i(28),i(0),i(1461)],void 0===(o=function(e,t,i,r,o,n,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.lastUpdateId=-1,t.moving=!1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()});var t=function(){return e.notifyChange("rendering")};this.handles.add([o.init(this,"suspended",function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),o.init(this,"fullOpacity",function(t){e.container&&(e.container.opacity=t)},!0),o.on(this,"container","post-render",t),o.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,o=i.maxScale;if(null!=r&&null!=o){var n=!r,s=!o;!n&&e<=r&&(n=!0),!s&&e>=o&&(s=!0),t=n&&s}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},r([n.property()],t.prototype,"attached",void 0),r([n.property()],t.prototype,"container",void 0),r([n.property()],t.prototype,"moving",void 0),r([n.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),r([n.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([n.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([n.property()],t.prototype,"updateRequested",void 0),r([n.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",null),r([n.property()],t.prototype,"view",void 0),r([n.subclass("esri.views.2d.layers.LayerView2D")],t)}(n.declared(s))}.apply(null,r))||(e.exports=o)},1476:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(94),i(346)],void 0===(o=function(e,t,i,r){function o(e,t){return[e,t]}function n(e,t,i){return e[0]=t,e[1]=i,e}var s=new r("0/0/0/0");return function(){function e(e,t,i,r,o,n,s,a,l,u,p,h){this.level=e,this.resolution=t,this.scale=i,this.origin=r,this.first=o,this.last=n,this.size=s,this.norm=a,this.worldStart=l,this.worldEnd=u,this.worldSize=p,this.wrap=h}return e.create=function(t,r,s){var a,l,u,p,h=i.getInfo(t.spatialReference),c=o(t.origin.x,t.origin.y),f=o(t.size[0]*r.resolution,t.size[1]*r.resolution),d=o(-1/0,-1/0),y=o(1/0,1/0),v=o(1/0,1/0);return s&&(n(d,Math.max(0,Math.floor((s.xmin-c[0])/f[0])),Math.max(0,Math.floor((c[1]-s.ymax)/f[1]))),n(y,Math.max(0,Math.floor((s.xmax-c[0])/f[0])),Math.max(0,Math.floor((c[1]-s.ymin)/f[1]))),n(v,y[0]-d[0]+1,y[1]-d[1]+1)),t.isWrappable?(a=o(Math.ceil(Math.round(2*h.origin[1]/r.resolution)/t.size[0]),v[1]),l=o(Math.floor((h.origin[0]-c[0])/f[0]),d[1]),u=o(a[0]+l[0]-1,y[1]),p=!0):(l=d,u=y,a=v,p=!1),new e(r.level,r.resolution,r.scale,c,d,y,v,f,l,u,a,p)},e.prototype.normalizeCol=function(e){if(!this.wrap)return e;var t=this.worldSize[0];return e<0?t-1-Math.abs((e+1)%t):e%t},e.prototype.denormalizeCol=function(e,t){return this.wrap?this.worldSize[0]*t+e:e},e.prototype.getWorldForColumn=function(e){return this.wrap?Math.floor(e/this.worldSize[0]):0},e.prototype.getFirstColumnForWorld=function(e){return e*this.worldSize[0]+this.first[0]},e.prototype.getLastColumnForWorld=function(e){return e*this.worldSize[0]+this.first[0]+this.size[0]-1},e.prototype.getColumnForX=function(e){return(e-this.origin[0])/this.norm[0]},e.prototype.getXForColumn=function(e){return this.origin[0]+e*this.norm[0]},e.prototype.getRowForY=function(e){return(this.origin[1]-e)/this.norm[1]},e.prototype.getYForRow=function(e){return this.origin[1]-e*this.norm[1]},e.prototype.getTileBounds=function(e,t,i){void 0===i&&(i=!1),s.set(t);var r=i?s.col:this.denormalizeCol(s.col,s.world),o=s.row;return function(e,t,i,r,o){e[0]=t,e[1]=i,e[2]=r,e[3]=o}(e,this.getXForColumn(r),this.getYForRow(o+1),this.getXForColumn(r+1),this.getYForRow(o)),e},e.prototype.getTileCoords=function(e,t,i){void 0===i&&(i=!1),s.set(t);var r=i?s.col:this.denormalizeCol(s.col,s.world);return Array.isArray(e)?n(e,this.getXForColumn(r),this.getYForRow(s.row)):(e.x=this.getXForColumn(r),e.y=this.getYForRow(s.row)),e},e}()}.apply(null,r))||(e.exports=o)},1477:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(204),i(85),i(1469)],void 0===(o=function(e,t,i,r,o){return function(){function e(e){this.lodInfo=e,this.spans=i.acquire()}return e.prototype.release=function(){for(var e=0,t=this.spans;e<t.length;e++){var r=t[e];o.pool.release(r)}i.release(this.spans)},e.prototype.forEach=function(e,t){var i=this.spans,r=this.lodInfo,o=r.level;if(0!==i.length)for(var n=0,s=i;n<s.length;n++)for(var a=s[n],l=a.row,u=a.colFrom,p=a.colTo,h=u;h<=p;h++)e.call(t,o,l,r.normalizeCol(h),r.getWorldForColumn(h))},e.pool=new r(e,!0),e}()}.apply(null,r))||(e.exports=o)},1480:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(94),i(1476),i(1477),i(346),i(1469)],void 0===(o=function(e,t,i,r,o,n,s){var a=new n("0/0/0/0"),l=function(){function e(e,t,i,r,o,n,s,a){this.x=e,this.ymin=t,this.ymax=i,this.invM=r,this.leftAdjust=o,this.rightAdjust=n,this.leftBound=s,this.rightBound=a}return e.create=function(t,i){var r;t[1]>i[1]&&(t=(r=[i,t])[0],i=r[1]);var o=t[0],n=t[1],s=i[0],a=i[1],l=s-o,u=a-n,p=0!==u?l/u:0,h=(Math.ceil(n)-n)*p,c=(Math.floor(n)-n)*p;return new e(o,Math.floor(n),Math.ceil(a),p,l<0?h:c,l<0?c:h,l<0?s:o,l<0?o:s)},e.prototype.incrRow=function(){this.x+=this.invM},e.prototype.getLeftCol=function(){return Math.max(this.x+this.leftAdjust,this.leftBound)},e.prototype.getRightCol=function(){return Math.min(this.x+this.rightAdjust,this.rightBound)},e}(),u=[[0,0],[0,0],[0,0],[0,0]];return function(){function e(e,t){var i=this;this.tileInfo=e,this.fullExtent=t,this.scales=[],this._lodInfos=null,this._infoByScale={},this._infoByLevel={};var o=e.lods.slice();o.sort(function(e,t){return t.scale-e.scale});var n=this._lodInfos=o.map(function(i){return r.create(e,i,t)});o.forEach(function(e,t){i._infoByLevel[e.level]=n[t],i._infoByScale[e.scale]=n[t],i.scales[t]=e.scale},this),this._wrap=e.isWrappable}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this.tileInfo.spatialReference},enumerable:!0,configurable:!0}),e.prototype.getLODInfoAt=function(e){return this._infoByLevel["number"==typeof e?e:e.level]},e.prototype.getTileBounds=function(e,t,i){void 0===i&&(i=!1),a.set(t);var r=this._infoByLevel[a.level];return r?r.getTileBounds(e,a,i):e},e.prototype.getTileCoords=function(e,t,i){void 0===i&&(i=!1),a.set(t);var r=this._infoByLevel[a.level];return r?r.getTileCoords(e,a,i):e},e.prototype.getTileCoverage=function(e,t,i){void 0===t&&(t=192),void 0===i&&(i="closest");var r,n,a,p="closest"===i?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),h=o.pool.acquire(p),c=this._wrap,f=1/0,d=-1/0,y=h.spans;u[0][0]=u[0][1]=u[1][1]=u[3][0]=-t,u[1][0]=u[2][0]=e.size[0]+t,u[2][1]=u[3][1]=e.size[1]+t;for(var v=0,g=u;v<g.length;v++){var _=g[v];e.toMap(_,_),_[0]=p.getColumnForX(_[0]),_[1]=p.getRowForY(_[1])}for(var m=[],w=3,b=0;b<4;b++)if(u[b][1]!==u[w][1]){var I=l.create(u[b],u[w]);f=Math.min(I.ymin,f),d=Math.max(I.ymax,d),void 0===m[I.ymin]&&(m[I.ymin]=[]),m[I.ymin].push(I),w=b}else w=b;if(null==f||null==d||d-f>100)return null;var x=[];for(r=f;r<d;){null!=m[r]&&(x=x.concat(m[r])),n=1/0,a=-1/0;for(b=x.length-1;b>=0;b--){I=x[b];n=Math.min(n,I.getLeftCol()),a=Math.max(a,I.getRightCol())}if(n=Math.floor(n),a=Math.floor(a),r>=p.first[1]&&r<=p.last[1])if(c)if(p.size[0]<p.worldSize[0]){var T=Math.floor(a/p.worldSize[0]);for(b=Math.floor(n/p.worldSize[0]);b<=T;b++)y.push(new s(r,Math.max(p.getFirstColumnForWorld(b),n),Math.min(p.getLastColumnForWorld(b),a)))}else y.push(new s(r,n,a));else n>p.last[0]||a<p.first[0]||(n=Math.max(n,p.first[0]),a=Math.min(a,p.last[0]),y.push(new s(r,n,a)));r+=1;for(b=x.length-1;b>=0;b--){(I=x[b]).ymax>=r?I.incrRow():x.splice(b,1)}}return h},e.prototype.getTileParentId=function(e){a.set(e);var t=this._infoByLevel[a.level],i=this._lodInfos.indexOf(t)-1;return i<0?null:(this._getTileIdAtLOD(a,this._lodInfos[i],a),a.id)},e.prototype.getTileResolution=function(e){var t=this._infoByLevel["object"==typeof e?e.level:e];return t?t.resolution:-1},e.prototype.getTileScale=function(e){var t=this._infoByLevel[e.level];return t?t.scale:-1},e.prototype.intersects=function(e,t){a.set(t);var i=this._infoByLevel[a.level],r=e.lodInfo;if(r.resolution>i.resolution){this._getTileIdAtLOD(a,r,a);for(var o=r.denormalizeCol(a.col,a.world),n=0,s=e.spans;n<s.length;n++){var l=s[n];if(l.row===a.row&&l.colFrom<=o&&l.colTo>=o)return!0}}if(r.resolution<i.resolution){var u=e.spans.reduce(function(e,t){return e[0]=Math.min(e[0],t.row),e[1]=Math.max(e[1],t.row),e[2]=Math.min(e[2],t.colFrom),e[3]=Math.max(e[3],t.colTo),e},[1/0,-1/0,1/0,-1/0]),p=u[0],h=u[1],c=u[2],f=u[3],d=i.denormalizeCol(a.col,a.world),y=r.getColumnForX(i.getXForColumn(d)),v=r.getRowForY(i.getYForRow(a.row)),g=r.getColumnForX(i.getXForColumn(d+1))-1,_=r.getRowForY(i.getYForRow(a.row+1))-1;return!(y>f||g<c||v>h||_<p)}var m=r.denormalizeCol(a.col,a.world);return e.spans.some(function(e){return e.row===a.row&&e.colFrom<=m&&e.colTo>=m})},e.prototype.normalizeBounds=function(e,t,r){if(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],this._wrap){var o=i.getInfo(this.tileInfo.spatialReference),n=-r*(o.valid[1]-o.valid[0]);e[0]+=n,e[2]+=n}return e},e.prototype.getSmallestInfoForScale=function(e){var t=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>t[0])return this._infoByScale[t[0]];for(var i=1;i<t.length-1;i++)if(e>t[i]+1e-6)return this._infoByScale[t[i-1]];return this._infoByScale[t[t.length-1]]},e.prototype.getClosestInfoForScale=function(e){var t=this.scales;return this._infoByScale[e]?this._infoByScale[e]:(e=t.reduce(function(t,i,r,o){return Math.abs(i-e)<Math.abs(t-e)?i:t},t[0]),this._infoByScale[e])},e.prototype.scaleToLevel=function(e){var t=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(var i=t.length-1;i>=0;i--)if(e<t[i]){return i===t.length-1?this._infoByScale[t[t.length-1]].level:this._infoByScale[t[i]].level+(t[i]-e)/(t[i]-t[i+1])}return this._infoByScale[t[0]].level},e.prototype.scaleToZoom=function(e){return this.tileInfo.scaleToZoom(e)},e.prototype._getTileIdAtLOD=function(e,t,i){var r=this._infoByLevel[i.level];return e.set(i),t.resolution<r.resolution?null:t.resolution===r.resolution?e:(e.level=t.level,e.col=Math.floor(i.col*r.resolution/t.resolution+.01),e.row=Math.floor(i.row*r.resolution/t.resolution+.01),e)},e}()}.apply(null,r))||(e.exports=o)},1489:function(e,t,i){var r,o;r=[i.dj.c(e.i),t],void 0===(o=function(e,t){function i(e,t){return t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):t&&t.yoffset?Math.max(e,Math.abs(t.yoffset)):e}function r(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,i=0,r=0;r<e.length;r++){var o=e[r].size;"number"==typeof o&&(t+=o,i++)}return t/i}(e.stops):t}function o(e,t){if(!t)return e;for(var i=t.filter(function(e){return"size"===e.type}).map(function(t){var i=t.maxSize,o=t.minSize;return(r(i,e)+r(o,e))/2}),o=0,n=i.length,s=0;s<n;s++)o+=i[s];var a=Math.floor(o/n);return Math.max(a,e)}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=function(e){if(!e)return 6;var t="visualVariables"in e?o(6,e.visualVariables):6;if("simple"===e.type)return i(t,e.symbol);if("unique-value"===e.type){var r=t;return e.uniqueValueInfos.forEach(function(e){r=i(r,e.symbol)}),r}if("class-breaks"===e.type){var n=t;return e.classBreakInfos.forEach(function(e){n=i(n,e.symbol)}),n}return e.type,t}}.apply(null,r))||(e.exports=o)},1602:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(5),i(1),i(36)],void 0===(o=function(e,t,i,r,o){Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=function(e,t,i){var r=i.get("state.resolution"),n=t*("number"==typeof r?r:1),s=e.clone().offset(-n,-n),a=e.clone().offset(n,n),l=i.spatialReference;return new o({xmin:Math.min(s.x,a.x),ymin:Math.min(s.y,a.y),xmax:Math.max(s.x,a.x),ymax:Math.max(s.y,a.y),spatialReference:l})}}.apply(null,r))||(e.exports=o)},1716:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i(2),i(1),i(10),i(12),i(15),i(8),i(0),i(1489),i(1468)],void 0===(o=function(e,t,i,r,o,n,s,a,l,u,p){return function(e){function t(t){return e.call(this,t)||this}return i(t,e),t.prototype.fetchPopupFeatures=function(e){return n(this,void 0,void 0,function(){var t,i,r,l=this;return o(this,function(p){return t=this.layer,e?"tile"!==t.type?[2,a.reject(new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:t.type}))]:(i=this.get("view.scale"),r=t.allSublayers.toArray().filter(function(e){var t=0===e.minScale||i<=e.minScale,r=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r}),[2,a.eachAlways(r.map(function(t){return n(l,void 0,void 0,function(){var i,r,n;return o(this,function(o){switch(o.label){case 0:return i=t.createQuery(),r=u.calculateTolerance(t.renderer),i.geometry=this.createFetchPopupFeaturesQueryGeometry(e,r),n=i,[4,t.popupTemplate.getRequiredFields()];case 1:return n.outFields=o.sent(),[4,t.queryFeatures(i)];case 2:return[2,o.sent().features]}})})})).then(function(e){return[].concat.apply([],e.map(function(e){return e.value}).filter(Boolean))})]):[2,a.reject(new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))]})})},r([l.property()],t.prototype,"layer",void 0),r([l.subclass("esri.views.layers.TileLayerView")],t)}(l.declared(p))}.apply(null,r))||(e.exports=o)}}]);