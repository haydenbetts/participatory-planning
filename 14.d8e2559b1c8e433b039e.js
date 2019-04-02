(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/HandleOwner":1509,"esri/views/layers/LayerView":1510,"esri/views/2d/engine/webgl/enums":1511,"esri/views/layers/RefreshableLayerView":1514,"esri/views/2d/engine/Container":1516,"esri/views/2d/layers/LayerView2D":1518,"esri/views/2d/tiling/TileSpan":1520,"esri/views/2d/tiling/TileInfoView":1527,"esri/views/2d/tiling/LODInfo":1545,"esri/views/2d/tiling/TileCoverage":1546,"esri/views/2d/engine/BitmapContainer":1561,"esri/views/2d/engine/Bitmap":1601,"esri/views/2d/layers/support/ExportStrategy":1711,"esri/views/2d/viewStateUtils":2242})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1509:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(6),i(17),i(0)],void 0===(n=function(e,t,i,r,n,o,s){return function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=e.call(this)||this;return r.handles=new o,r}return i(t,e),t.prototype.destroy=function(){this.handles.destroy()},r([s.property({readOnly:!0})],t.prototype,"handles",void 0),r([s.subclass("esri.core.HandleOwner")],t)}(s.declared(n))}.apply(null,r))||(e.exports=n)},1510:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(48),i(1509),i(213),i(10),i(212),i(8),i(0)],void 0===(n=function(e,t,i,r,n,o,s,a,l,h,u){return function(e){function t(t){var i=e.call(this)||this;return i.layer=null,i.parent=null,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",t),h.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r([u.property()],t.prototype,"layer",void 0),r([u.property()],t.prototype,"parent",void 0),r([u.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),r([u.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),r([u.property()],t.prototype,"view",void 0),r([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r([u.subclass("esri.views.layers.LayerView")],t)}(u.declared(o,n,s.Identifiable,l))}.apply(null,r))||(e.exports=n)},1511:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){var i,r,n,o,s,a,l,h,u,p;Object.defineProperty(t,"__esModule",{value:!0}),(i=t.WGLGeometryType||(t.WGLGeometryType={}))[i.FILL=0]="FILL",i[i.LINE=1]="LINE",i[i.MARKER=2]="MARKER",i[i.TEXT=3]="TEXT",i[i.LABEL=4]="LABEL",(r=t.WGLGeometryTransactionStatus||(t.WGLGeometryTransactionStatus={}))[r.SUCCEEDED=0]="SUCCEEDED",r[r.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",(n=t.WGLDrawPhase||(t.WGLDrawPhase={}))[n.NONE=0]="NONE",n[n.MAP=1]="MAP",n[n.LABEL=2]="LABEL",n[n.LABEL_ALPHA=4]="LABEL_ALPHA",n[n.HITTEST=8]="HITTEST",n[n.HIGHLIGHT=16]="HIGHLIGHT",n[n.CLIP=32]="CLIP",n[n.DEBUG=64]="DEBUG",n[n.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",(o=t.VVType||(t.VVType={}))[o.SIZE=0]="SIZE",o[o.COLOR=1]="COLOR",o[o.OPACITY=2]="OPACITY",o[o.ROTATION=3]="ROTATION",(s=t.WGLVVFlag||(t.WGLVVFlag={}))[s.NONE=0]="NONE",s[s.OPACITY=1]="OPACITY",s[s.COLOR=2]="COLOR",s[s.ROTATION=4]="ROTATION",s[s.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",s[s.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",s[s.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",s[s.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",(a=t.WGLVVTarget||(t.WGLVVTarget={}))[a.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",a[a.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",a[a.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",a[a.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",(l=t.CapType||(t.CapType={}))[l.UNKNOWN=0]="UNKNOWN",l[l.BUTT=1]="BUTT",l[l.ROUND=2]="ROUND",l[l.SQUARE=3]="SQUARE",(h=t.JoinType||(t.JoinType={}))[h.UNKNOWN=0]="UNKNOWN",h[h.MITER=1]="MITER",h[h.BEVEL=2]="BEVEL",h[h.ROUND=3]="ROUND",(u=t.Alignment||(t.Alignment={}))[u.SCREEN=0]="SCREEN",u[u.MAP=1]="MAP",(p=t.MosaicType||(t.MosaicType={}))[p.SPRITE=0]="SPRITE",p[p.GLYPH=1]="GLYPH"}.apply(null,r))||(e.exports=n)},1514:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(6),i(0)],void 0===(n=function(e,t,i,r,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t}return i(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},r([o.property()],t.prototype,"layer",void 0),r([o.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),r([o.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),r([o.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(o.declared(n))}.apply(null,r))||(e.exports=n)},1516:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(549)],void 0===(n=function(e,t,i,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childrenSet=new Set,t._childrenToAttach=[],t._childrenToDetach=[],t._renderPhase=3,t.children=[],t}return i(t,e),Object.defineProperty(t.prototype,"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t.prototype.detach=function(){for(var e=0,t=this.children.concat(this._childrenToDetach);e<t.length;e++){var i=t[e];i.attached&&(this.detachChild(i),i.attached=!1,i.parent=null)}},t.prototype.doRender=function(e){var t=e.globalOpacity;e.globalOpacity*=this.opacity,this._renderPhase=0,this.attachChildren(),this._renderPhase=1;for(var i=this._childrenToDetach;i.length>0;){var r=i.shift();this.detachChild(r),r.attached=!1,r.parent=null,r.stage=null}this._renderPhase=2,this.renderChildren(e),this._renderPhase=3,e.globalOpacity=t},t.prototype.addChild=function(e){return this.addChildAt(e,this.children.length)},t.prototype.addChildAt=function(e,t){if(void 0===t&&(t=this.numChildren),!e)return e;if(this.contains(e))return e;var i=e.parent;i&&i!==this&&i.removeChild(e),t>=this.numChildren?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e);var r=this._childrenToDetach.indexOf(e);return r>-1&&this._childrenToDetach.splice(r,1),this._childrenToAttach.push(e),this._renderPhase>=2&&this.requestRender(),e},t.prototype.contains=function(e){return this._childrenSet.has(e)},t.prototype.getChildIndex=function(e){return this.children.indexOf(e)},t.prototype.getChildAt=function(e){return e<0||e>this.children.length?null:this.children[e]},t.prototype.removeAllChildren=function(){for(var e=this.numChildren;e--;)this.removeChildAt(0)},t.prototype.removeChild=function(e){return this.contains(e)?this.removeChildAt(this.getChildIndex(e)):e},t.prototype.removeChildAt=function(e){var t;if(e<0||e>=this.children.length)return null;if(t=this.children.splice(e,1)[0],function(e,t){e.delete(t)}(this._childrenSet,t),t.attached)this._childrenToDetach.push(t),this._renderPhase>=2&&this.requestRender();else{var i=this._childrenToAttach.indexOf(t);i>-1&&this._childrenToAttach.splice(i,1)}return t},t.prototype.requestChildRender=function(e){e&&e.parent===this&&this._renderPhase>=2&&this.requestRender()},t.prototype.setChildIndex=function(e,t){var i=this.getChildIndex(e);i>-1&&(this.children.splice(i,1),this.children.splice(t,0,e),this._renderPhase>=2&&this.requestRender())},t.prototype.sortChildren=function(e){return this._renderPhase>2&&this.requestRender(),this.children.sort(e)},t.prototype.attachChildren=function(){var e=this._childrenToAttach;if(0!==e.length)for(var t=0,i=!1;!i;){var r=e[t];r.parent=this,r.stage=this.stage,this.attachChild(r)?(r.attached=!0,e.splice(t,1)):++t,i=e.length===t}},t.prototype.renderChildren=function(e){for(var t=this.children,i=t.length,r=0;r<i;r++)t[r].processRender(e)},t.prototype.attachChild=function(e){return e.attach()},t.prototype.detachChild=function(e){e.detach()},t}(r.DisplayObject);t.Container=n}.apply(null,r))||(e.exports=n)},1518:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(21),i(0),i(1510)],void 0===(n=function(e,t,i,r,n,o,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.lastUpdateId=-1,t.moving=!1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()});var t=function(){return e.notifyChange("rendering")};this.handles.add([n.init(this,"suspended",function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),n.init(this,"fullOpacity",function(t){e.container&&(e.container.opacity=t)},!0),n.on(this,"container","post-render",t),n.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,n=i.maxScale;if(null!=r&&null!=n){var o=!r,s=!n;!o&&e<=r&&(o=!0),!s&&e>=n&&(s=!0),t=o&&s}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},r([o.property()],t.prototype,"attached",void 0),r([o.property()],t.prototype,"container",void 0),r([o.property()],t.prototype,"moving",void 0),r([o.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),r([o.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([o.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([o.property()],t.prototype,"updateRequested",void 0),r([o.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",null),r([o.property()],t.prototype,"view",void 0),r([o.subclass("esri.views.2d.layers.LayerView2D")],t)}(o.declared(s))}.apply(null,r))||(e.exports=n)},1520:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(80)],void 0===(n=function(e,t,i){return function(){function e(e,t,i){this.row=e,this.colFrom=t,this.colTo=i}return e.pool=new i(e,!0),e}()}.apply(null,r))||(e.exports=n)},1527:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(97),i(1545),i(1546),i(355),i(1520)],void 0===(n=function(e,t,i,r,n,o,s){var a=new o("0/0/0/0"),l=function(){function e(e,t,i,r,n,o,s,a){this.x=e,this.ymin=t,this.ymax=i,this.invM=r,this.leftAdjust=n,this.rightAdjust=o,this.leftBound=s,this.rightBound=a}return e.create=function(t,i){var r;t[1]>i[1]&&(t=(r=[i,t])[0],i=r[1]);var n=t[0],o=t[1],s=i[0],a=i[1],l=s-n,h=a-o,u=0!==h?l/h:0,p=(Math.ceil(o)-o)*u,c=(Math.floor(o)-o)*u;return new e(n,Math.floor(o),Math.ceil(a),u,l<0?p:c,l<0?c:p,l<0?s:n,l<0?n:s)},e.prototype.incrRow=function(){this.x+=this.invM},e.prototype.getLeftCol=function(){return Math.max(this.x+this.leftAdjust,this.leftBound)},e.prototype.getRightCol=function(){return Math.min(this.x+this.rightAdjust,this.rightBound)},e}(),h=[[0,0],[0,0],[0,0],[0,0]];return function(){function e(e,t){var i=this;this.tileInfo=e,this.fullExtent=t,this.scales=[],this._lodInfos=null,this._infoByScale={},this._infoByLevel={};var n=e.lods.slice();n.sort(function(e,t){return t.scale-e.scale});var o=this._lodInfos=n.map(function(i){return r.create(e,i,t)});n.forEach(function(e,t){i._infoByLevel[e.level]=o[t],i._infoByScale[e.scale]=o[t],i.scales[t]=e.scale},this),this._wrap=e.isWrappable}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this.tileInfo.spatialReference},enumerable:!0,configurable:!0}),e.prototype.getLODInfoAt=function(e){return this._infoByLevel["number"==typeof e?e:e.level]},e.prototype.getTileBounds=function(e,t,i){void 0===i&&(i=!1),a.set(t);var r=this._infoByLevel[a.level];return r?r.getTileBounds(e,a,i):e},e.prototype.getTileCoords=function(e,t,i){void 0===i&&(i=!1),a.set(t);var r=this._infoByLevel[a.level];return r?r.getTileCoords(e,a,i):e},e.prototype.getTileCoverage=function(e,t,i){void 0===t&&(t=192),void 0===i&&(i="closest");var r,o,a,u="closest"===i?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),p=n.pool.acquire(u),c=this._wrap,d=1/0,f=-1/0,y=p.spans;h[0][0]=h[0][1]=h[1][1]=h[3][0]=-t,h[1][0]=h[2][0]=e.size[0]+t,h[2][1]=h[3][1]=e.size[1]+t;for(var v=0,g=h;v<g.length;v++){var m=g[v];e.toMap(m,m),m[0]=u.getColumnForX(m[0]),m[1]=u.getRowForY(m[1])}for(var _=[],w=3,T=0;T<4;T++)if(h[T][1]!==h[w][1]){var S=l.create(h[T],h[w]);d=Math.min(S.ymin,d),f=Math.max(S.ymax,f),void 0===_[S.ymin]&&(_[S.ymin]=[]),_[S.ymin].push(S),w=T}else w=T;if(null==d||null==f||f-d>100)return null;var x=[];for(r=d;r<f;){null!=_[r]&&(x=x.concat(_[r])),o=1/0,a=-1/0;for(T=x.length-1;T>=0;T--){S=x[T];o=Math.min(o,S.getLeftCol()),a=Math.max(a,S.getRightCol())}if(o=Math.floor(o),a=Math.floor(a),r>=u.first[1]&&r<=u.last[1])if(c)if(u.size[0]<u.worldSize[0]){var R=Math.floor(a/u.worldSize[0]);for(T=Math.floor(o/u.worldSize[0]);T<=R;T++)y.push(new s(r,Math.max(u.getFirstColumnForWorld(T),o),Math.min(u.getLastColumnForWorld(T),a)))}else y.push(new s(r,o,a));else o>u.last[0]||a<u.first[0]||(o=Math.max(o,u.first[0]),a=Math.min(a,u.last[0]),y.push(new s(r,o,a)));r+=1;for(T=x.length-1;T>=0;T--){(S=x[T]).ymax>=r?S.incrRow():x.splice(T,1)}}return p},e.prototype.getTileParentId=function(e){a.set(e);var t=this._infoByLevel[a.level],i=this._lodInfos.indexOf(t)-1;return i<0?null:(this._getTileIdAtLOD(a,this._lodInfos[i],a),a.id)},e.prototype.getTileResolution=function(e){var t=this._infoByLevel["object"==typeof e?e.level:e];return t?t.resolution:-1},e.prototype.getTileScale=function(e){var t=this._infoByLevel[e.level];return t?t.scale:-1},e.prototype.intersects=function(e,t){a.set(t);var i=this._infoByLevel[a.level],r=e.lodInfo;if(r.resolution>i.resolution){this._getTileIdAtLOD(a,r,a);for(var n=r.denormalizeCol(a.col,a.world),o=0,s=e.spans;o<s.length;o++){var l=s[o];if(l.row===a.row&&l.colFrom<=n&&l.colTo>=n)return!0}}if(r.resolution<i.resolution){var h=e.spans.reduce(function(e,t){return e[0]=Math.min(e[0],t.row),e[1]=Math.max(e[1],t.row),e[2]=Math.min(e[2],t.colFrom),e[3]=Math.max(e[3],t.colTo),e},[1/0,-1/0,1/0,-1/0]),u=h[0],p=h[1],c=h[2],d=h[3],f=i.denormalizeCol(a.col,a.world),y=r.getColumnForX(i.getXForColumn(f)),v=r.getRowForY(i.getYForRow(a.row)),g=r.getColumnForX(i.getXForColumn(f+1))-1,m=r.getRowForY(i.getYForRow(a.row+1))-1;return!(y>d||g<c||v>p||m<u)}var _=r.denormalizeCol(a.col,a.world);return e.spans.some(function(e){return e.row===a.row&&e.colFrom<=_&&e.colTo>=_})},e.prototype.normalizeBounds=function(e,t,r){if(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],this._wrap){var n=i.getInfo(this.tileInfo.spatialReference),o=-r*(n.valid[1]-n.valid[0]);e[0]+=o,e[2]+=o}return e},e.prototype.getSmallestInfoForScale=function(e){var t=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>t[0])return this._infoByScale[t[0]];for(var i=1;i<t.length-1;i++)if(e>t[i])return this._infoByScale[t[i-1]];return this._infoByScale[t[t.length-1]]},e.prototype.getClosestInfoForScale=function(e){var t=this.scales;return this._infoByScale[e]?this._infoByScale[e]:(e=t.reduce(function(t,i,r,n){return Math.abs(i-e)<Math.abs(t-e)?i:t},t[0]),this._infoByScale[e])},e.prototype.scaleToLevel=function(e){var t=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(var i=t.length-1;i>=0;i--)if(e<t[i]){return i===t.length-1?this._infoByScale[t[t.length-1]].level:this._infoByScale[t[i]].level+(t[i]-e)/(t[i]-t[i+1])}return this._infoByScale[t[0]].level},e.prototype.scaleToZoom=function(e){return this.tileInfo.scaleToZoom(e)},e.prototype._getTileIdAtLOD=function(e,t,i){var r=this._infoByLevel[i.level];return e.set(i),t.resolution<r.resolution?null:t.resolution===r.resolution?e:(e.level=t.level,e.col=Math.floor(i.col*r.resolution/t.resolution+.01),e.row=Math.floor(i.row*r.resolution/t.resolution+.01),e)},e}()}.apply(null,r))||(e.exports=n)},1545:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(97),i(355)],void 0===(n=function(e,t,i,r){function n(e,t){return[e,t]}function o(e,t,i){return e[0]=t,e[1]=i,e}var s=new r("0/0/0/0");return function(){function e(e,t,i,r,n,o,s,a,l,h,u,p){this.level=e,this.resolution=t,this.scale=i,this.origin=r,this.first=n,this.last=o,this.size=s,this.norm=a,this.worldStart=l,this.worldEnd=h,this.worldSize=u,this.wrap=p}return e.create=function(t,r,s){var a,l,h,u,p=i.getInfo(t.spatialReference),c=n(t.origin.x,t.origin.y),d=n(t.size[0]*r.resolution,t.size[1]*r.resolution),f=n(-1/0,-1/0),y=n(1/0,1/0),v=n(1/0,1/0);return s&&(o(f,Math.max(0,Math.floor((s.xmin-c[0])/d[0])),Math.max(0,Math.floor((c[1]-s.ymax)/d[1]))),o(y,Math.max(0,Math.floor((s.xmax-c[0])/d[0])),Math.max(0,Math.floor((c[1]-s.ymin)/d[1]))),o(v,y[0]-f[0]+1,y[1]-f[1]+1)),t.isWrappable?(a=n(Math.ceil(Math.round(2*p.origin[1]/r.resolution)/t.size[0]),v[1]),l=n(Math.floor((p.origin[0]-c[0])/d[0]),f[1]),h=n(a[0]+l[0]-1,y[1]),u=!0):(l=f,h=y,a=v,u=!1),new e(r.level,r.resolution,r.scale,c,f,y,v,d,l,h,a,u)},e.prototype.normalizeCol=function(e){if(!this.wrap)return e;var t=this.worldSize[0];return e<0?t-1-Math.abs((e+1)%t):e%t},e.prototype.denormalizeCol=function(e,t){return this.wrap?this.worldSize[0]*t+e:e},e.prototype.getWorldForColumn=function(e){return this.wrap?Math.floor(e/this.worldSize[0]):0},e.prototype.getFirstColumnForWorld=function(e){return e*this.worldSize[0]+this.first[0]},e.prototype.getLastColumnForWorld=function(e){return e*this.worldSize[0]+this.first[0]+this.size[0]-1},e.prototype.getColumnForX=function(e){return(e-this.origin[0])/this.norm[0]},e.prototype.getXForColumn=function(e){return this.origin[0]+e*this.norm[0]},e.prototype.getRowForY=function(e){return(this.origin[1]-e)/this.norm[1]},e.prototype.getYForRow=function(e){return this.origin[1]-e*this.norm[1]},e.prototype.getTileBounds=function(e,t,i){void 0===i&&(i=!1),s.set(t);var r=i?s.col:this.denormalizeCol(s.col,s.world),n=s.row;return function(e,t,i,r,n){e[0]=t,e[1]=i,e[2]=r,e[3]=n}(e,this.getXForColumn(r),this.getYForRow(n+1),this.getXForColumn(r+1),this.getYForRow(n)),e},e.prototype.getTileCoords=function(e,t,i){void 0===i&&(i=!1),s.set(t);var r=i?s.col:this.denormalizeCol(s.col,s.world);return Array.isArray(e)?o(e,this.getXForColumn(r),this.getYForRow(s.row)):(e.x=this.getXForColumn(r),e.y=this.getYForRow(s.row)),e},e}()}.apply(null,r))||(e.exports=n)},1546:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(216),i(80),i(1520)],void 0===(n=function(e,t,i,r,n){return function(){function e(e){this.lodInfo=e,this.spans=i.acquire()}return e.prototype.release=function(){for(var e=0,t=this.spans;e<t.length;e++){var r=t[e];n.pool.release(r)}i.release(this.spans)},e.prototype.forEach=function(e,t){var i=this.spans,r=this.lodInfo,n=r.level;if(0!==i.length)for(var o=0,s=i;o<s.length;o++)for(var a=s[o],l=a.row,h=a.colFrom,u=a.colTo,p=h;p<=u;p++)e.call(t,n,l,r.normalizeCol(p),r.getWorldForColumn(p))},e.pool=new r(e,!0),e}()}.apply(null,r))||(e.exports=n)},1561:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(1),i(1516),i(1511)],void 0===(n=function(e,t,i,r,n,o){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.doRender=function(t){this.visible&&t.drawPhase===o.WGLDrawPhase.MAP&&e.prototype.doRender.call(this,t)},t.prototype.renderChildren=function(e){var t=this.stage.painter,i=this.children,r=e.drawPhase;this.sortChildren(function(e,t){return t.resolution-e.resolution}),e.drawPhase=o.WGLDrawPhase.CLIP,t.startStencilBurn();for(var n=0,s=i.length;n<s;n++){(a=i[n]).attached&&a.visible&&(t.stencilRef=n,a.processRender(e))}e.drawPhase=r,t.startStencilDraw();for(n=0,s=i.length;n<s;n++){var a;(a=i[n]).attached&&a.visible&&(t.stencilRef=n,a.processRender(e))}t.endStencilDraw()},t}(n.Container);t.BitmapContainer=s}.apply(null,r))||(e.exports=n)},1601:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(173),i(549),i(53)],void 0===(n=function(e,t,i,r,n,o){function s(e,t,i){var r={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,flipped:!0};return t&&i&&(r.width=t,r.height=i),new o(e,r)}function a(e){return e.updateTexture()}function l(e){u.has(e)&&(h.splice(h.indexOf(e),1),u.delete(e))}Object.defineProperty(t,"__esModule",{value:!0});var h=[],u=new r.default,p=function(e){function t(t){void 0===t&&(t=null);var i=e.call(this)||this;return i._height=void 0,i.pixelRatio=1,i.resolution=0,i.rotation=0,i._source=null,i._width=void 0,i.x=0,i.y=0,i.source=t,i.requestRender=i.requestRender.bind(i),i}return i(t,e),Object.defineProperty(t.prototype,"height",{get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"source",{get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sourceHeight",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sourceWidth",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e},enumerable:!0,configurable:!0}),t.prototype.attach=function(){return a(this),e.prototype.attach.call(this),!0},t.prototype.detach=function(){this._texture.dispose(),this._texture=null,l(this)},t.prototype.invalidateTexture=function(){this.attached?a(this):l(this)},t.prototype.updateTexture=function(){this._texture||(this.source?this._texture=s(this.stage.context,this.sourceWidth,this.sourceHeight):this._texture=s(this.stage.context));var e=this.source;e?(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(e)?this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(e)):function(e){return e&&!("render"in e)}(e)&&this._texture.setData(e),this.sourceWidth===this.width&&this.sourceHeight===this.height||this._texture.generateMipmap(),this.ready(),this.requestRender()):this._texture.setData(null)},t.prototype.setSamplingMode=function(e){if(this._texture){if(!this._texture.descriptor.hasMipmap)return void this._texture.setSamplingMode(e);var t;t=9728===e?9985:9729===e?9987:e,this._texture.setSamplingMode(t)}},t.prototype.bind=function(e){this._texture&&this.stage.context.bindTexture(this._texture,e)},t.prototype.doRender=function(e){if(this.source&&this.width>0&&this.isReady){var t=this.stage.painter,i=e.state.resolution,r=this.resolution/this.pixelRatio/i;r<.05||t.drawBitmap(e,this,r)}},t}(n.DisplayObject);t.Bitmap=p}.apply(null,r))||(e.exports=n)},1711:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(11),i(8),i(35),i(37),i(97),i(219),i(2242),i(1601),i(1527),i(355)],void 0===(n=function(e,t,i,r,n,o,s,a,l,h,u,p){var c=o.create(),d=[0,0],f=new p(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};return function(){function e(e){this._imagePromise=null,this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported;var t=i({},y,e);this.container=t.container,this.disposeSource=t.disposeSource,this.fetchSource=t.fetchSource,this.requestUpdate=t.requestUpdate,this.imageMaxWidth=t.imageMaxWidth,this.imageMaxHeight=t.imageMaxHeight,this.imageRotationSupported=t.imageRotationSupported,this.imageNormalizationSupported=t.imageNormalizationSupported,this.hidpi=t.hidpi,this.requestUpdate()}return e.prototype.destroy=function(){},Object.defineProperty(e.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),e.prototype.update=function(e){var t=this,i=e.state,r=s.getInfo(i.spatialReference),n=this.hidpi?e.pixelRatio:1;if(this._imagePromise&&(this._imagePromise.cancel(),this._imagePromise=null),e.stationary){this.imageRotationSupported?(d[0]=i.size[0],d[1]=i.size[1]):l.getOuterSize(d,i);var o=Math.floor(d[0]*n)>this.imageMaxWidth||Math.floor(d[1]*n)>this.imageMaxHeight,a=r&&(i.extent.xmin<r.valid[0]||i.extent.xmax>r.valid[1]),h=!this.imageNormalizationSupported&&a,u=!o&&!h,p=this.imageRotationSupported?i.rotation:0;if(u)this._imagePromise=this._singleExport(i,d,p,n);else{var c=Math.min(this.imageMaxWidth,this.imageMaxHeight);h&&(c=Math.min(i.worldScreenWidth,c)),this._imagePromise=this._tiledExport(i,c,p,n)}this._imagePromise.then(function(e){t._imagePromise=null;var i=t.container.children.slice();t.container.removeAllChildren(),e.forEach(t.container.addChild,t.container),t.disposeSource&&i.forEach(function(e){t.disposeSource(e.source)},t)}).catch(function(e){if(t._imagePromise=null,"cancel"!==e.dojoType)throw e})}},e.prototype.updateExports=function(e,t){for(var i=0,r=this.container.children;i<r.length;i++){var n=r[i];if(!n.visible||!n.attached)return;e(n,t)?console.error("ExportStrategy.updateExports doesn't support promise yet"):n.requestRender()}},e.prototype._export=function(e,t,i,n,o){var s=this;return r.resolve().then(function(){return s.fetchSource(e,Math.floor(t*o),Math.floor(i*o),{rotation:n,pixelRatio:o})}).then(function(i){var r=new h.Bitmap(i);return r.x=e.xmin,r.y=e.ymax,r.resolution=e.width/t,r.rotation=n,r.pixelRatio=o,r})},e.prototype._singleExport=function(e,t,i,r){l.getBBox(c,e.center,e.resolution,t);var o=new n(c[0],c[1],c[2],c[3],e.spatialReference);return this._export(o,t[0],t[1],i,r).then(function(e){return[e]})},e.prototype._tiledExport=function(e,t,i,o){var s=this,l=a.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),h=new u(l),p=h.getTileCoverage(e);if(!p)return null;var d=[];return p.forEach(function(r,a,l,u){f.set(r,a,l,u),h.getTileBounds(c,f);var p=new n(c[0],c[1],c[2],c[3],e.spatialReference);d.push(s._export(p,t,t,i,o))}),r.all(d)},e}()}.apply(null,r))||(e.exports=n)},2242:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){function i(e){return e*r}Object.defineProperty(t,"__esModule",{value:!0});var r=Math.PI/180;t.snapToPixel=function(e,t,i){var r=i.resolution,n=i.size;return e[0]=r*(Math.round(t[0]/r)+n[0]%2*.5),e[1]=r*(Math.round(t[1]/r)+n[1]%2*.5),e},t.getOuterSize=function(e,t){var r=i(t.rotation),n=Math.abs(Math.cos(r)),o=Math.abs(Math.sin(r)),s=t.size,a=s[0],l=s[1];return e[0]=Math.round(l*o+a*n),e[1]=Math.round(l*n+a*o),e},t.getBBox=function(e,t,i,r){var n=t[0],o=t[1],s=r[0],a=r[1],l=.5*i;return e[0]=n-l*s,e[1]=o-l*a,e[2]=n+l*s,e[3]=o+l*a,e},t.bboxIntersects=function(e,t){var i=e[0],r=e[1],n=e[2],o=e[3],s=t[0],a=t[1],l=t[2],h=t[3];return!(i>l||n<s||r>h||o<a)}}.apply(null,r))||(e.exports=n)}}]);