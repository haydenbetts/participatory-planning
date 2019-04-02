(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/3d/layers/GraphicsLayerView3D":1485,"esri/core/HandleOwner":1509,"esri/views/layers/LayerView":1510,"esri/views/3d/layers/LayerView3D":1513,"esri/views/3d/layers/support/projectExtentUtils":1540,"esri/views/3d/layers/graphics/Graphics3DFrustumVisibility":1580})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1485:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(22),i(25),i(32),i(8),i(21),i(0),i(1513),i(1580),i(1754),i(385),i(72),i(1540)],void 0===(n=function(e,t,i,r,n,s,o,a,p,u,l,d,c,y,h,f){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.frustumVisibility=new d,t.slicePlaneEnabled=!1,t.supportsDraping=!0,t.overlayUpdating=!1,t.suspendResumeExtent=null,t.fullExtentInLocalViewSpatialReference=null,t}return i(t,e),t.prototype.initialize=function(){var e=this;this._set("graphics3d",new c({owner:this,layer:this.layer,scaleVisibilityEnabled:!0})),this.graphics3d.setup(),this.frustumVisibility.setup(this),this.setupSuspendResumeExtent(),this.handles.add(this.watch("fullOpacity",function(){return e.graphics3d.graphicsCore.opacityChange()})),this.handles.add(this.layer.on("graphic-update",function(t){return e.graphics3d.graphicsCore.graphicUpdateHandler(t)}));var t=f.toViewIfLocal(this).then(function(t){e.fullExtentInLocalViewSpatialReference=t});t&&this.addResolvingPromise(t),this.drawingOrder=this.view.getDrawingOrder(this.layer.uid),this.handles.add(p.whenTrueOnce(this.view,"basemapTerrain.ready",function(){return e.notifyChange("updating")}))},t.prototype.destroy=function(){this.frustumVisibility&&(this.frustumVisibility.destroy(),this._set("frustumVisibility",null)),this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null))},Object.defineProperty(t.prototype,"drawingOrder",{set:function(e){this.graphics3d.graphicsCore.setDrawingOrder(e),this._set("drawingOrder",e)},enumerable:!0,configurable:!0}),t.prototype.fetchPopupFeatures=function(e,t){return s(this,void 0,void 0,function(){return n(this,function(e){return[2,o.isSome(t)?t.clientGraphics:null]})})},Object.defineProperty(t.prototype,"graphics3DGraphics",{get:function(){return this.graphics3d.graphicsCore.graphics3DGraphics},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"graphics3DGraphicsByObjectID",{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"symbolUpdateType",{get:function(){return this.graphics3d.graphicsCore.symbolUpdateType},enumerable:!0,configurable:!0}),t.prototype.getRenderingInfo=function(e){return{symbol:e.symbol||y.getDefaultSymbol(e)}},t.prototype.getGraphicFromGraphicUid=function(e){return this.graphics3d.getGraphicFromGraphicUid(e)},t.prototype.whenGraphicBounds=function(e,t){return this.graphics3d.whenGraphicBounds(e,t)},t.prototype.whenSymbolLayerSize=function(e,t){return this.graphics3d.whenSymbolLayerSize(e,t)},t.prototype.queryGraphics=function(){return a.resolve(this.loadedGraphics)},t.prototype.highlight=function(e,t){return void 0===t&&(t={}),this.graphics3d.highlight(e,t)},t.prototype.getStats=function(){return{features:this.loadedGraphics.length,updating:this.updating,elevationUpdating:this.graphics3d.elevationAlignment.updating,visibilityFrustum:!this.frustumVisibility.suspended}},t.prototype.canResume=function(){return!(!this.inherited(arguments)||this.frustumVisibility&&this.frustumVisibility.suspended||this.graphics3d&&this.graphics3d.suspended)},t.prototype.isUpdating=function(){return!(!(this.overlayUpdating||this.graphics3d&&this.graphics3d.updating||this.frustumVisibility&&this.frustumVisibility.updating)&&this.view.basemapTerrain&&this.view.basemapTerrain.ready)},t.prototype.setupSuspendResumeExtent=function(){var e=this;p.init(this.graphics3d.graphicsCore,"computedExtent",function(t){e.suspendResumeExtent=h.enlargeExtent(t,e.suspendResumeExtent,1.2),e.frustumVisibility.setExtent(e.suspendResumeExtent)},!0)},r([u.property({aliasOf:"layer.graphics"})],t.prototype,"loadedGraphics",void 0),r([u.property({dependsOn:["frustumVisibility.suspended","graphics3d.suspended"]})],t.prototype,"suspended",void 0),r([u.property({dependsOn:["frustumVisibility.updating","graphics3d.updating","overlayUpdating"]})],t.prototype,"updating",void 0),r([u.property()],t.prototype,"layer",void 0),r([u.property({readOnly:!0})],t.prototype,"frustumVisibility",void 0),r([u.property({readOnly:!0})],t.prototype,"graphics3d",void 0),r([u.property({type:Boolean})],t.prototype,"slicePlaneEnabled",void 0),r([u.property({aliasOf:"graphics3d.graphicsCore.hasDraped"})],t.prototype,"hasDraped",void 0),r([u.property({type:Boolean})],t.prototype,"supportsDraping",void 0),r([u.property({type:Boolean})],t.prototype,"overlayUpdating",void 0),r([u.property()],t.prototype,"drawingOrder",null),r([u.subclass("esri.views.3d.layers.GraphicsLayerView3D")],t)}(u.declared(l))}.apply(null,r))||(e.exports=n)},1509:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(6),i(17),i(0)],void 0===(n=function(e,t,i,r,n,s,o){return function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=e.call(this)||this;return r.handles=new s,r}return i(t,e),t.prototype.destroy=function(){this.handles.destroy()},r([o.property({readOnly:!0})],t.prototype,"handles",void 0),r([o.subclass("esri.core.HandleOwner")],t)}(o.declared(n))}.apply(null,r))||(e.exports=n)},1510:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(48),i(1509),i(213),i(10),i(212),i(8),i(0)],void 0===(n=function(e,t,i,r,n,s,o,a,p,u,l){return function(e){function t(t){var i=e.call(this)||this;return i.layer=null,i.parent=null,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",t),u.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r([l.property()],t.prototype,"layer",void 0),r([l.property()],t.prototype,"parent",void 0),r([l.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),r([l.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),r([l.property()],t.prototype,"view",void 0),r([l.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r([l.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r([l.subclass("esri.views.layers.LayerView")],t)}(l.declared(s,n,o.Identifiable,p))}.apply(null,r))||(e.exports=n)},1513:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(8),i(21),i(0),i(360),i(1510)],void 0===(n=function(e,t,i,r,n,s,o,a,p){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicePlaneEnabled=!1,t.supportsHeightUnitConversion=!1,t}return i(t,e),t.prototype.postscript=function(e){this.inherited(arguments),a.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},t.prototype._validateHeightModelInfo=function(){var e=this;return n.create(function(t,i){s.whenFalseOnce(e.view.defaultsFromMap,"isHeightModelInfoSearching",function(){var r=a.rejectLayerError(e.layer,e.view.heightModelInfo,e.supportsHeightUnitConversion);r?i(r):t()})})},r([o.property()],t.prototype,"view",void 0),r([o.property()],t.prototype,"slicePlaneEnabled",void 0),r([o.subclass("esri.views.3d.layers.LayerView3D")],t)}(o.declared(p))}.apply(null,r))||(e.exports=n)},1540:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(8),i(44),i(367)],void 0===(n=function(e,t,i,r,n){Object.defineProperty(t,"__esModule",{value:!0}),t.toViewIfLocal=function(e){var t=e.view.spatialReference,s=e.layer.fullExtent,o=s&&s.spatialReference;return o?o.equals(t)?i.resolve(s.clone()):r.canProject(o,t)?i.resolve(r.project(s,t)):e.view.state.isLocal?n.projectGeometry(s,t,e.layer.portalItem).then(function(t){if(!e.destroyed&&t)return t}).catch(function(){return null}):i.resolve(null):i.resolve(null)}}.apply(null,r))||(e.exports=n)},1580:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(6),i(17),i(21),i(0),i(49),i(574)],void 0===(n=function(e,t,i,r,n,s,o,a,p,u){var l=-.3*p.earthRadius;return function(e){function t(){var t=e.call(this)||this;return t.suspended=!0,t._frustumVisibilityDirty=!0,t.extent=null,t.extentIntersectionDirty=!0,t._isVisibleBelowSurface=!1,t.handles=new s,t.layerView=null,t}return i(t,e),Object.defineProperty(t.prototype,"frustumVisibilityDirty",{get:function(){return this._frustumVisibilityDirty},set:function(e){e!==this._frustumVisibilityDirty&&(this._frustumVisibilityDirty=e,this.notifyChange("updating"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this.frustumVisibilityDirty},enumerable:!0,configurable:!0}),t.prototype.setup=function(e){var t=this;this.layerView=e,this.extentIntersection=new u.FrustumExtentIntersection({renderCoordsHelper:e.view.renderCoordsHelper});var i=e.view,r=i.basemapTerrain,n=i.resourceController.scheduler;this.handles.add([i.on("resize",function(){return t.viewChange()}),i.state.watch("camera",function(){return t.viewChange()},!0),n.registerTask(6,function(){return t.update()},function(){return t.needsUpdate()}),r.on("elevation-bounds-change",function(){return t.elevationBoundsChange()})]),"local"===i.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add(o.init(r,["opacity","wireframe"],function(){return t.isVisibleBelowSurface=!r.isOpaque()}))},t.prototype.destroy=function(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)},t.prototype.setExtent=function(e){this.extent=e,this.extentIntersectionDirty=!0,this.frustumVisibilityDirty=!0},t.prototype.viewChange=function(){this.frustumVisibilityDirty=!0},t.prototype.elevationBoundsChange=function(){this.frustumVisibilityDirty=!0,this.extentIntersectionDirty=!0},Object.defineProperty(t.prototype,"isVisibleBelowSurface",{set:function(e){this._isVisibleBelowSurface=e,this.frustumVisibilityDirty=!0,this.extentIntersectionDirty=!0},enumerable:!0,configurable:!0}),t.prototype.needsUpdate=function(){return this.frustumVisibilityDirty},t.prototype.update=function(){this.updateSuspendFrustumVisible(),this.frustumVisibilityDirty=!1},t.prototype.updateExtentIntersection=function(){if(this.extentIntersectionDirty){this.extentIntersectionDirty=!1;var e,t=this.layerView.view;if(this._isVisibleBelowSurface)e=l;else{var i=t.basemapTerrain.getElevationBounds(),r=i[0],n=i[1];e=r-Math.max(1,(n-r)*(1.2-1))}this.extentIntersection.update(this.extent,t.spatialReference,e)}},t.prototype.updateSuspendFrustumVisible=function(){if(this.extent){this.updateExtentIntersection();var e=this.layerView.view.frustum;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e))}else this._set("suspended",!1)},r([a.property({readOnly:!0})],t.prototype,"suspended",void 0),r([a.property({readOnly:!0})],t.prototype,"updating",null),r([a.subclass("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],t)}(a.declared(n))}.apply(null,r))||(e.exports=n)}}]);