(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/PointCloudLayer":630,"esri/renderers/PointCloudRenderer":1558,"esri/renderers/support/pointCloud/PointSizeAlgorithm":1597,"esri/renderers/PointCloudClassBreaksRenderer":1631,"esri/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm":1632,"esri/renderers/support/pointCloud/PointSizeSplatAlgorithm":1633,"esri/renderers/PointCloudStretchRenderer":1634,"esri/renderers/PointCloudUniqueValueRenderer":1635,"esri/layers/pointCloudFilters/PointCloudFilter":1654,"esri/renderers/support/pointCloud/ColorModulation":1683,"esri/renderers/support/pointCloud/pointSizeAlgorithmJSONUtils":1684,"esri/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils":1685,"esri/renderers/support/pointCloud/ColorClassBreakInfo":1686,"esri/renderers/support/pointCloud/StopInfo":1687,"esri/renderers/support/pointCloud/ColorUniqueValueInfo":1688,"esri/layers/pointCloudFilters/PointCloudBitfieldFilter":1766,"esri/layers/pointCloudFilters/PointCloudReturnFilter":1767,"esri/layers/pointCloudFilters/PointCloudValueFilter":1768,"esri/renderers/PointCloudRGBRenderer":1769,"esri/layers/pointCloudFilters/jsonUtils":2083,"esri/layers/pointCloudFilters/typeUtils":2084,"esri/renderers/support/pointCloud/jsonUtils":2085,"esri/renderers/support/pointCloud/typeUtils":2086})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1558:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(9),t(24),t(7),t(0),t(1683),t(1684),t(1685)],void 0===(n=function(e,r,t,o,n,i,l,p,s,u,a){var d=i.strict()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),c=function(e){function r(r){var t=e.call(this)||this;return t.type=void 0,t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return t(r,e),r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},r.prototype.cloneProperties=function(){return{pointSizeAlgorithm:l.clone(this.pointSizeAlgorithm),colorModulation:l.clone(this.colorModulation),pointsPerInch:l.clone(this.pointsPerInch)}},o([p.property({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],r.prototype,"type",void 0),o([p.property({types:a.pointSizeAlgorithmTypes,json:{read:u.read,write:!0}})],r.prototype,"pointSizeAlgorithm",void 0),o([p.property({type:s.default,json:{write:!0}})],r.prototype,"colorModulation",void 0),o([p.property({json:{write:!0},nonNullable:!0,type:Number})],r.prototype,"pointsPerInch",void 0),o([p.subclass("esri.renderers.PointCloudRenderer")],r)}(p.declared(n));return(c||(c={})).fieldTransformTypeKebabDict=new i.KebabDictionary({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"}),c}.apply(null,o))||(e.exports=n)},1597:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(9),t(24),t(0)],void 0===(n=function(e,r,t,o,n,i,l){Object.defineProperty(r,"__esModule",{value:!0}),r.typeKebabDictionary=new i.default({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});var p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),o([l.property({type:r.typeKebabDictionary.apiValues,readOnly:!0,nonNullable:!0,json:{type:r.typeKebabDictionary.jsonValues,read:!1,write:r.typeKebabDictionary.write}})],n.prototype,"type",void 0),o([l.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],n)}(l.declared(n));r.PointSizeAlgorithm=p,r.default=p}.apply(null,o))||(e.exports=n)},1631:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(1),t(7),t(0),t(1558),t(268),t(1686)],void 0===(n=function(e,r,t,o,n,i,l,p,s,u){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-class-breaks",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.colorClassBreakInfos=null,t}var a;return o(r,e),a=r,r.prototype.clone=function(){return new a(t({},this.cloneProperties(),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:i.clone(this.colorClassBreakInfos),legendOptions:i.clone(this.legendOptions)}))},n([l.enumeration.serializable()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),n([l.property({type:p.fieldTransformTypeKebabDict.apiValues,json:{type:p.fieldTransformTypeKebabDict.jsonValues,read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write}})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[u.default],json:{write:!0}})],r.prototype,"colorClassBreakInfos",void 0),a=n([l.subclass("esri.renderers.PointCloudClassBreaksRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},1632:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(0),t(1597)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="fixed-size",r.size=0,r.useRealWorldSymbolSizes=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})},o([n.enumeration.serializable()({pointCloudFixedSizeAlgorithm:"fixed-size"})],r.prototype,"type",void 0),o([n.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"size",void 0),o([n.property({type:Boolean,json:{write:!0}})],r.prototype,"useRealWorldSymbolSizes",void 0),i=o([n.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],r)}(n.declared(i.default));r.PointSizeFixedSizeAlgorithm=l,r.default=l}.apply(null,o))||(e.exports=n)},1633:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(0),t(1597)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="splat",r.scaleFactor=1,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({scaleFactor:this.scaleFactor})},o([n.enumeration.serializable()({pointCloudSplatAlgorithm:"splat"})],r.prototype,"type",void 0),o([n.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],r.prototype,"scaleFactor",void 0),i=o([n.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],r)}(n.declared(i.default));r.PointSizeSplatAlgorithm=l,r.default=l}.apply(null,o))||(e.exports=n)},1634:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(1),t(7),t(0),t(1558),t(268),t(1687)],void 0===(n=function(e,r,t,o,n,i,l,p,s,u){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-stretch",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.stops=null,t}var a;return o(r,e),a=r,r.prototype.clone=function(){return new a(t({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),stops:i.clone(this.stops),legendOptions:i.clone(this.legendOptions)}))},n([l.enumeration.serializable()({pointCloudStretchRenderer:"point-cloud-stretch"})],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),n([l.property({type:p.fieldTransformTypeKebabDict.apiValues,json:{type:p.fieldTransformTypeKebabDict.jsonValues,read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write}})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[u.default],json:{write:!0}})],r.prototype,"stops",void 0),a=n([l.subclass("esri.renderers.PointCloudStretchRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},1635:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(1),t(7),t(0),t(1558),t(268),t(1688)],void 0===(n=function(e,r,t,o,n,i,l,p,s,u){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-unique-value",t.field=null,t.fieldTransformType=null,t.colorUniqueValueInfos=null,t.legendOptions=null,t}var a;return o(r,e),a=r,r.prototype.clone=function(){return new a(t({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),colorUniqueValueInfos:i.clone(this.colorUniqueValueInfos),legendOptions:i.clone(this.legendOptions)}))},n([l.enumeration.serializable()({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({type:p.fieldTransformTypeKebabDict.apiValues,json:{type:p.fieldTransformTypeKebabDict.jsonValues,read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write}})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[u.default],json:{write:!0}})],r.prototype,"colorUniqueValueInfos",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),a=n([l.subclass("esri.renderers.PointCloudUniqueValueRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},1654:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(9),t(24),t(0)],void 0===(n=function(e,r,t,o,n,i,l){var p=i.strict()({pointCloudValueFilter:"value",pointCloudBitfieldFilter:"bitfield",pointCloudReturnFilter:"return"});return function(e){function r(r){var t=e.call(this)||this;return t.field=null,t.type=null,t}return t(r,e),r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},o([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"field",void 0),o([l.property({readOnly:!0,type:p.apiValues,nonNullable:!0,json:{read:!1,write:p.write}})],r.prototype,"type",void 0),o([l.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],r)}(l.declared(n))}.apply(null,o))||(e.exports=n)},1683:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(9),t(0)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.field=null,r.minValue=0,r.maxValue=255,r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({field:this.field,minValue:this.minValue,maxValue:this.maxValue})},o([i.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),o([i.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"minValue",void 0),o([i.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"maxValue",void 0),n=o([i.subclass("esri.renderers.support.pointCloud.ColorModulation")],r)}(i.declared(n));r.ColorModulation=l,r.default=l}.apply(null,o))||(e.exports=n)},1684:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(132),t(1632),t(1633)],void 0===(n=function(e,r,t,o,n){function i(e){return e&&l[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var l={pointCloudFixedSizeAlgorithm:o.default,pointCloudSplatAlgorithm:n.default};r.read=function(e,r,o){var n=i(e);if(n){var l=new n;return l.read(e,o),l}return o&&o.messages&&e&&o.messages.push(new t("pointsizealgorithm:unsupported","Point size algorithms of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null},r.fromJSON=function(e){var r=i(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},1685:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1597),t(1632),t(1633)],void 0===(n=function(e,r,t,o,n){Object.defineProperty(r,"__esModule",{value:!0}),r.pointSizeAlgorithmTypes={key:"type",base:t.default,typeMap:{"fixed-size":o.default,splat:n.default}}}.apply(null,o))||(e.exports=n)},1686:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(20),t(9),t(7),t(0),t(28)],void 0===(n=function(e,r,t,o,n,i,l,p,s){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.minValue=0,r.maxValue=0,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],r.prototype,"minValue",void 0),o([p.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],r.prototype,"maxValue",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([p.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],r)}(p.declared(i));r.ColorClassBreakInfo=u,r.default=u}.apply(null,o))||(e.exports=n)},1687:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(20),t(9),t(7),t(0),t(28)],void 0===(n=function(e,r,t,o,n,i,l,p,s){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.label=null,r.value=0,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({label:this.label,value:this.value,color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"value",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([p.subclass("esri.renderers.support.pointCloud.StopInfo")],r)}(p.declared(i));r.StopInfo=u,r.default=u}.apply(null,o))||(e.exports=n)},1688:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(20),t(9),t(7),t(0),t(28)],void 0===(n=function(e,r,t,o,n,i,l,p,s){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.values=null,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,label:this.label,values:l.clone(this.values),color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({type:[String],json:{write:!0}})],r.prototype,"values",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([p.subclass("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],r)}(p.declared(i));r.ColorUniqueValueInfo=u,r.default=u}.apply(null,o))||(e.exports=n)},1766:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(7),t(0),t(1654)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.requiredClearBits=null,t.requiredSetBits=null,t.type="bitfield",t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,requiredClearBits:n.clone(this.requiredClearBits),requiredSetBits:n.clone(this.requiredSetBits)})},o([i.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],r.prototype,"requiredClearBits",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],r.prototype,"requiredSetBits",void 0),o([i.property({type:["bitfield"],json:{type:["pointCloudBitfieldFilter"]}})],r.prototype,"type",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1767:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(7),t(0),t(1654)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.includedReturns=[],t.type="return",t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,includedReturns:n.clone(this.includedReturns)})},o([i.property({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"includedReturns",void 0),o([i.property({type:["return"],json:{type:["pointCloudReturnFilter"]}})],r.prototype,"type",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1768:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(7),t(0),t(1654)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.mode="exclude",t.type="value",t.values=[],t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,mode:this.mode,values:n.clone(this.values)})},o([i.property({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"mode",void 0),o([i.property({type:["value"],json:{type:["pointCloudValueFilter"]}})],r.prototype,"type",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"values",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1769:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(1),t(7),t(0),t(1558)],void 0===(n=function(e,r,t,o,n,i,l,p){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-rgb",t.field=null,t}var p;return o(r,e),p=r,r.prototype.clone=function(){return new p(t({},this.cloneProperties(),{field:i.clone(this.field)}))},n([l.enumeration.serializable()({pointCloudRGBRenderer:"point-cloud-rgb"})],r.prototype,"type",void 0),n([l.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),p=n([l.subclass("esri.renderers.PointCloudRGBRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},2083:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(140),t(132),t(1766),t(1767),t(1768)],void 0===(n=function(e,r,t,o,n,i,l){function p(e){return e&&s[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var s={pointCloudValueFilter:l,pointCloudBitfieldFilter:n,pointCloudReturnFilter:i};r.read=function(e,r,t){if(e&&Array.isArray(e))return e.map(function(e){var r=p(e);if(r){var n=new r;return n.read(e,t),n}t&&t.messages&&e&&t.messages.push(new o("point-cloud-filter:unsupported","Point cloud filters of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t}))})},r.write=function(e,r,o,n){var i=e.map(function(e){return e.write({},n)});t.setDeepValue(o,i,r)},r.fromJSON=function(e){var r=p(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},2084:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1766),t(1654),t(1767),t(1768)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0}),r.types={key:"type",base:o,typeMap:{value:i,bitfield:t,return:n}}}.apply(null,o))||(e.exports=n)},2085:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(132),t(1631),t(1769),t(1634),t(1635)],void 0===(n=function(e,r,t,o,n,i,l){function p(e){return e&&s[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var s={pointCloudClassBreaksRenderer:o,pointCloudRGBRenderer:n,pointCloudStretchRenderer:i,pointCloudUniqueValueRenderer:l};r.read=function(e,r,o){var n=p(e);if(n){var i=new n;return i.read(e,o),i}return o&&o.messages&&e&&o.messages.push(new t("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null},r.fromJSON=function(e){var r=p(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},2086:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1631),t(1558),t(1769),t(1634),t(1635)],void 0===(n=function(e,r,t,o,n,i,l){Object.defineProperty(r,"__esModule",{value:!0}),r.types={key:"type",base:o,typeMap:{"point-cloud-class-breaks":t,"point-cloud-rgb":n,"point-cloud-stretch":i,"point-cloud-unique-value":l}}}.apply(null,o))||(e.exports=n)},630:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(1),t(50),t(13),t(7),t(10),t(8),t(33),t(0),t(105),t(578),t(2083),t(2084),t(155),t(357),t(2085),t(2086)],void 0===(n=function(e,r,o,n,i,l,p,s,u,a,d,c,y,f,v,h,b,m,w,C){function g(e,r,t){return e&&((e=w.read(e,r,t)||void 0)||j.error("Failed to create renderer",{rendererDefinition:e,layer:this,context:t})),e}var j=u.getLogger("esri.layers.PointCloudLayer");return function(e){function r(r,t){var o=e.call(this)||this;return o.operationalLayerType="PointCloudLayer",o.opacity=1,o.filters=[],o.fields=null,o.path=null,o.legendEnabled=!0,o.renderer=null,o.type="point-cloud",o}return n(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o({url:e},r):e},r.prototype.readServiceFields=function(e,r,t){return Array.isArray(e)?e.map(function(e){var r=new m;return"FieldTypeInteger"===e.type&&((e=s.clone(e)).type="esriFieldTypeInteger"),r.read(e,t),r}):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map(function(e){return new m({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})}):null},Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()});return this.addResolvingPromise(r),this.when()},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return a.reject(new p("point-cloud-layer:view-not-supported","PointCloudLayer is only supported in 3D"));case"3d":return a.create(function(e){return Promise.all([t.e(3),t.e(10),t.e(55)]).then(function(){var r=[t(2260)];e.apply(null,r)}.bind(this)).catch(t.oe)})}},r.prototype._validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new p("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})},r.prototype.hasCachedStatistics=function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(function(r){return r.name===e})},r.prototype.queryCachedStatistics=function(e){if(!this.hasCachedStatistics(e))return a.reject(new p("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available"));for(var r=0,t=this.attributeStorageInfo;r<t.length;r++){var o=t[r];if(o.name===e){var n=d.join(this.parsedUrl.path,"./statistics/"+o.key);return l(n,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data})}}},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&j.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&j.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))},i([c.property({type:["PointCloudLayer"]})],r.prototype,"operationalLayerType",void 0),i([c.property({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],r.prototype,"opacity",void 0),i([c.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i([c.property({types:[h.types],json:{origins:{service:{read:{source:"filters",reader:v.read}}},read:{source:"layerDefinition.filters",reader:v.read},write:{target:"layerDefinition.filters",writer:v.write}}})],r.prototype,"filters",void 0),i([c.property({type:[m]})],r.prototype,"fields",void 0),i([c.reader("service","fields",["fields","attributeStorageInfo"])],r.prototype,"readServiceFields",null),i([c.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),i([c.property(b.elevationInfo)],r.prototype,"elevationInfo",null),i([c.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),i([c.property(b.legendEnabled)],r.prototype,"legendEnabled",void 0),i([c.property({types:C.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:g}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:g},write:{target:"layerDefinition.drawingInfo.renderer"}}})],r.prototype,"renderer",void 0),i([c.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([c.subclass("esri.layers.PointCloudLayer")],r)}(c.declared(y,f))}.apply(null,o))||(e.exports=n)}}]);