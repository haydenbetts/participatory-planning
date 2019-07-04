(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/3d/layers/GraphicsView3D":1443,"esri/layers/graphics/centroid":1484,"esri/views/layers/GraphicsView":1678,"esri/symbols/support/defaults3D":1679,"esri/views/3d/layers/graphics/Graphics3DGraphicLikeLayerView":1680})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1443:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(10),i(12),i(14),i(8),i(0),i(1679),i(1680),i(1678)],void 0===(n=function(e,t,i,r,n,s,o,p,a,l,h,c){return function(e){function t(t){var i=e.call(this)||this;return i.graphics3d=null,i.slicePlaneEnabled=!1,i.supportsDraping=!0,i.overlayUpdating=!1,i.mockLayerId="__sceneView.graphics-"+Date.now().toString(16),i}return i(t,e),t.prototype.initialize=function(){var e={id:this.mockLayerId,uid:this.mockLayerId};this._set("graphics3d",new h({owner:this,layer:e})),this.graphics3d.setup()},t.prototype.destroy=function(){this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null))},Object.defineProperty(t.prototype,"updating",{get:function(){return!(this.graphics3d&&!this.graphics3d.updating&&!this.overlayUpdating)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"drawingOrder",{set:function(e){this.graphics3d.graphicsCore.setDrawingOrder(e),this._set("drawingOrder",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"graphics3DGraphics",{get:function(){return this.graphics3d.graphicsCore.graphics3DGraphics},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"graphics3DGraphicsByObjectID",{get:function(){return this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"symbolUpdateType",{get:function(){return this.graphics3d.graphicsCore.symbolUpdateType},enumerable:!0,configurable:!0}),t.prototype.getRenderingInfo=function(e){return{symbol:e.symbol||l.getDefaultSymbol3D(e.geometry)}},t.prototype.getGraphicFromGraphicUid=function(e){return this.graphics3d.getGraphicFromGraphicUid(e)},t.prototype.whenGraphicBounds=function(e,t){return this.graphics3d.whenGraphicBounds(e,t)},t.prototype.graphicChanged=function(e){this.graphics3d.graphicsCore.graphicUpdateHandler(e)},t.prototype.queryGraphics=function(){return p.resolve(this.loadedGraphics)},t.prototype.fetchPopupFeatures=function(e,t){return s(this,void 0,void 0,function(){return n(this,function(e){return[2,o.isSome(t)?t.clientGraphics:null]})})},r([a.property({readOnly:!0,aliasOf:"view.graphics"})],t.prototype,"graphics",void 0),r([a.property({aliasOf:"graphics"})],t.prototype,"loadedGraphics",void 0),r([a.property({readOnly:!0,dependsOn:["graphics3d.updating","overlayUpdating"]})],t.prototype,"updating",null),r([a.property({constructOnly:!0})],t.prototype,"view",void 0),r([a.property()],t.prototype,"graphics3d",void 0),r([a.property({type:Boolean})],t.prototype,"slicePlaneEnabled",void 0),r([a.property({aliasOf:"graphics3d.graphicsCore.hasDraped"})],t.prototype,"hasDraped",void 0),r([a.property({type:Boolean})],t.prototype,"supportsDraping",void 0),r([a.property({type:Boolean})],t.prototype,"overlayUpdating",void 0),r([a.property()],t.prototype,"drawingOrder",null),r([a.subclass("esri.views.3d.layers.GraphicsView3D")],t)}(a.declared(c))}.apply(null,r))||(e.exports=n)},1484:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){function i(e,t){return e?t?4:3:t?3:2}function r(e,t,r,n,s,o){for(var p=i(s,o),a=r,l=r+p,h=0,c=0,u=0,d=0,y=0,g=0,f=n-1;g<f;g++,a+=p,l+=p){var v=t[a],b=t[a+1],m=t[a+2],w=t[l],I=t[l+1],O=t[l+2],C=v*I-w*b;d+=C,h+=(v+w)*C,c+=(b+I)*C,s&&(u+=(m+O)*(C=v*O-w*m),y+=C),v<e[0]&&(e[0]=v),v>e[1]&&(e[1]=v),b<e[2]&&(e[2]=b),b>e[3]&&(e[3]=b),s&&(m<e[4]&&(e[4]=m),m>e[5]&&(e[5]=m))}if(d>0&&(d*=-1),y>0&&(y*=-1),!d)return null;var E=[h,c,.5*d];return s&&(E[3]=u,E[4]=.5*y),E}function n(e,t,r,n,l){for(var h=i(n,l),c=t,u=t+h,d=0,y=0,g=0,f=0,v=0,b=r-1;v<b;v++,c+=h,u+=h){var m=e[c],w=e[c+1],I=e[c+2],O=e[u],C=e[u+1],E=e[u+2],G=n?o(m,w,I,O,C,E):s(m,w,O,C);if(G)if(d+=G,n){y+=G*(N=a(m,w,I,O,C,E))[0],g+=G*N[1],f+=G*N[2]}else{var N;y+=G*(N=p(m,w,O,C))[0],g+=G*N[1]}}return d>0?n?[y/d,g/d,f/d]:[y/d,g/d]:r>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function s(e,t,i,r){var n=i-e,s=r-t;return Math.sqrt(n*n+s*s)}function o(e,t,i,r,n,s){var o=r-e,p=n-t,a=s-i;return Math.sqrt(o*o+p*p+a*a)}function p(e,t,i,r){return[e+.5*(i-e),t+.5*(r-t)]}function a(e,t,i,r,n,s){return[e+.5*(r-e),t+.5*(n-t),i+.5*(s-i)]}Object.defineProperty(t,"__esModule",{value:!0}),t.getCentroidOptimizedGeometry=function(e,t,s,o){if(!t||!t.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);for(var p=e.coords,a=[],l=s?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],h=t.lengths,c=t.coords,u=i(s,o),d=0,y=0,g=h;y<g.length;y++){var f=g[y],v=r(l,c,d,f,s,o);v&&a.push(v),d+=f*u}if(a.sort(function(e,t){var i=e[2]-t[2];return 0===i&&s&&(i=e[4]-t[4]),i}),a.length){var b=6*a[0][2];p[0]=a[0][0]/b,p[1]=a[0][1]/b,s&&(b=6*a[0][4],p[2]=0!==b?a[0][3]/b:0),(p[0]<l[0]||p[0]>l[1]||p[1]<l[2]||p[1]>l[3]||s&&(p[2]<l[4]||p[2]>l[5]))&&(p.length=0)}if(!p.length){var m=t.lengths[0]?n(c,0,h[0],s,o):null;if(!m)return null;p[0]=m[0],p[1]=m[1],s&&m.length>2&&(p[2]=m[2])}return e},t.lineCentroid=n}.apply(null,r))||(e.exports=n)},1678:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(6),i(0)],void 0===(n=function(e,t,i,r,n,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.graphics=null,t.renderer=null,t.view=null,t}return i(t,e),r([s.property()],t.prototype,"graphics",void 0),r([s.property()],t.prototype,"renderer",void 0),r([s.property()],t.prototype,"updating",void 0),r([s.property()],t.prototype,"view",void 0),r([s.subclass("esri.views.layers.GraphicsView")],t)}(s.declared(n))}.apply(null,r))||(e.exports=n)},1679:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(25),i(14),i(174),i(383),i(384),i(210),i(211),i(571),i(577)],void 0===(n=function(e,t,i,r,n,s,o,p,a,l,h){Object.defineProperty(t,"__esModule",{value:!0});var c=p.fromSimpleMarkerSymbol(l.defaultPointSymbol2D),u=s.fromSimpleLineSymbol(l.defaultPolylineSymbol2D),d=a.fromSimpleFillSymbol(l.defaultPolygonSymbol2D),y=new o({symbolLayers:[new n({material:{color:h.defaultColor},edges:{type:"solid",size:"1px",color:h.defaultOutlineColor}})]});t.getDefaultSymbol3D=function(e){if(r.isNone(e))return null;switch(e.type){case"mesh":return y;case"point":case"multipoint":return c;case"polyline":return u;case"polygon":case"extent":return d;default:i.neverReached(e)}return null}}.apply(null,r))||(e.exports=n)},1680:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(7),i(84),i(6),i(52),i(29),i(20),i(8),i(28),i(0),i(118),i(95),i(344),i(365),i(1566),i(1567),i(1568),i(1569),i(78)],void 0===(n=function(e,t,i,r,n,s,o,p,a,l,h,c,u,d,y,g,f,v,b,m,w,I){var O=function(e){function t(t){var i=e.call(this)||this;return i.graphicsCore=null,i.elevationAlignment=new b,i.highlights=new m,i.handles=new l,i.suspendResumeExtent=null,i}return i(t,e),t.prototype.normalizeCtorArgs=function(e){var t=null;e.scaleVisibilityEnabled&&(delete(e=n({},e)).scaleVisibilityEnabled,t=new w);var i=new v({owner:e.owner,layer:e.layer,asyncUpdates:!1,graphicSymbolSupported:!0});return n({},e,{graphicsCore:i,scaleVisibility:t})},t.prototype.initialize=function(){var e=this;this.scaleVisibility&&"minScale"in this.layer&&this.handles.add(this.layer.watch(["minScale","maxScale"],function(){return e.scaleVisibility.layerMinMaxScaleChangeHandler()}))},t.prototype.setup=function(){var e=this,t=function(t,i,r){return e.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(t,i,r)};if(this.elevationAlignment.setup(this.owner,t,this.graphicsCore,this.view.elevationProvider),this.scaleVisibility&&"minScale"in this.layer){var i=this.owner.view.basemapTerrain;this.scaleVisibility.setup(this.owner,this.layer,t,this.graphicsCore,i)}this.highlights&&this.highlights.setup(this.graphicsCore),this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,highlights:this.highlights}),this.handles.add(this.view.watch("clippingArea",function(){return e.updateClippingExtent()})),this.updateClippingExtent(),this.setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics()},t.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null),this.elevationAlignment&&(this.elevationAlignment.destroy(),this._set("elevationAlignment",null)),this.scaleVisibility&&(this.scaleVisibility.destroy(),this._set("scaleVisibility",null)),this.graphicsCore&&(this.graphicsCore.destroy(),this._set("graphicsCore",null)),this.highlights&&(this.highlights.destroy(),this._set("highlights",null))},Object.defineProperty(t.prototype,"suspended",{get:function(){return!(!this.scaleVisibility||!this.scaleVisibility.suspended)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.graphicsCore&&this.graphicsCore.updating||this.scaleVisibility&&this.scaleVisibility.updating)},enumerable:!0,configurable:!0}),t.prototype.getGraphicFromGraphicUid=function(e){if(this.owner.loadedGraphics){var t=this.owner.loadedGraphics.find(function(t){return t.uid===e});if(t){var i=this.layer instanceof d?this.layer:null;return y.hydrateGraphic(t,i)}}},t.prototype.whenGraphicBounds=function(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):h.reject()},t.prototype.whenSymbolLayerSize=function(e,t){return this.graphicsCore?p.safeCast(this.graphicsCore.whenSymbolLayerSize(e,t)):h.reject()},t.prototype.highlight=function(e,t){if(void 0===t&&(t={}),e instanceof g)return C;if("number"==typeof e)return this.highlight([e],t);if(e instanceof s)return this.highlight([e],t);if(e instanceof a&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof s){var i=e.map(function(e){return e.uid}),r=this.highlights.acquireSet(t,null),n=r.set,o=r.handle;return this.highlights.setUids(n,i),o}if("number"==typeof e[0]){var p=e,l=this.highlights.acquireSet(t,null);n=l.set,o=l.handle;return this.highlights.setObjectIds(n,p),o}}return C},t.prototype.updateClippingExtent=function(){var e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()},t.prototype.setupSuspendResumeExtent=function(){var e=this;this.scaleVisibility&&c.init(this.graphicsCore,"computedExtent",function(t){e.suspendResumeExtent=I.enlargeExtent(t,e.suspendResumeExtent,f.SUSPEND_RESUME_EXTENT_OPTIMISM),e.scaleVisibility.setExtent(e.suspendResumeExtent)},!0)},r([u.property({constructOnly:!0})],t.prototype,"owner",void 0),r([u.property({constructOnly:!0})],t.prototype,"layer",void 0),r([u.property({readOnly:!0,aliasOf:"owner.view"})],t.prototype,"view",void 0),r([u.property({constructOnly:!0})],t.prototype,"graphicsCore",void 0),r([u.property({constructOnly:!0})],t.prototype,"scaleVisibility",void 0),r([u.property({readOnly:!0})],t.prototype,"elevationAlignment",void 0),r([u.property({readOnly:!0})],t.prototype,"highlights",void 0),r([u.property({readOnly:!0,dependsOn:["scaleVisibility.suspended"]})],t.prototype,"suspended",null),r([u.property({readOnly:!0,dependsOn:["graphicsCore.updating","scaleVisibility.updating"]})],t.prototype,"updating",null),r([u.subclass("esri.views.3d.layers.graphics.Graphics3DGraphicLikeLayerView")],t)}(u.declared(o)),C={remove:function(){},pause:function(){},resume:function(){}};return O}.apply(null,r))||(e.exports=n)}}]);