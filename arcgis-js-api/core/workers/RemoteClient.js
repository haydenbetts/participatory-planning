define(["require","exports","@dojo/framework/shim/AbortController","../Error","../promiseUtils","./utils"],function(e,t,_,h,d,f){function b(e,t){e.delete(t)}function p(e){var t=new h("AbortError",e);return t.dojoType="cancel",t}var o=f.MessageType.CLOSE,u=f.MessageType.ABORT,c=f.MessageType.INVOKE,v=f.MessageType.RESPONSE,i=f.MessageType.OPEN_PORT,n=function(){function e(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e){e.type===f.MessageType.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))},e.prototype.clear=function(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null},e.prototype._process=function(){this._timer=null;for(var e=0,t=this._invokeMessages;e<t.length;e++){var o=t[e];this._cancelledJobIds.has(o.jobId)||this._invoke(o)}this._cancelledJobIds.clear(),this._invokeMessages.length=0},e}();return function(){function s(e,t,o){var s=this;this._port=e,this._client=t,this._outJobs=new Map,this._inJobs=new Map,this._queue=new n(function(e){return s._onInvoke(e)}),this._responseQueue=[],this._onMessage=this._onMessage.bind(this),this._port.addEventListener("message",this._onMessage),this._port.start(),this._channel=o.channel,o.scheduler&&(this._frameTask=o.scheduler.registerTask(1,function(e){return s._update(e)},function(){return 0<s._responseQueue.length}))}return s.connect=function(e){var t,o=new MessageChannel;return(t="function"==typeof e?new e:"default"in e&&"function"==typeof e.default?new e.default:e).remoteClient=new s(o.port1,t,{channel:o}),o.port2},s.prototype.close=function(){this._post({type:o}),this._close()},s.prototype.isBusy=function(){return 0<this._outJobs.size},s.prototype.invoke=function(s,n,e){var r=this,t=e&&e.signal,i=e&&e.transferList;if(!this._port)return d.reject(new h("remote-client:port-closed","Can't invoke(), port is closed"));if(t&&t.aborted)return d.reject(p("Job already aborted"));var a=f.newJobId(),o=function(){t&&t.removeEventListener("abort",o);var e=r._outJobs.get(a);e&&(b(r._outJobs,a),r._post({type:u,jobId:a}),e.reject(p("Job aborted")))};return t&&t.addEventListener("abort",o),d.create(function(e,t){var o={resolve:e,reject:t};r._outJobs.set(a,o),r._post({type:c,jobId:a,methodName:s,abortable:!0},n,i)},o)},s.prototype.openPort=function(){var s=this,n=f.newJobId(),r=function(){b(s._outJobs,n),s._post({type:u,jobId:n})};return d.create(function(e,t){var o={resolve:e,reject:t,signal:r};s._outJobs.set(n,o),s._post({type:i,jobId:n})},r)},s.prototype._close=function(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(function(e){return e.reject(p("Abort job: worker closing"))}),this._inJobs.clear(),this._outJobs.clear(),this._queue.clear(),this._port=this._client=null,this._frameTask&&this._frameTask.remove(),this._frameTask=null,this._responseQueue=null},s.prototype._onMessage=function(e){var t=f.receiveMessage(e);if(t)switch(t.type){case v:this._onResponse(t);break;case c:this._queue.push(t);break;case u:this._onAbort(t);break;case o:this._onClose();break;case i:this._onOpenPort(t)}},s.prototype._onAbort=function(e){var t=this._inJobs,o=e.jobId,s=t.get(o);this._queue.push(e),s&&(s.controller&&s.controller.abort(),b(t,o))},s.prototype._onClose=function(){var e=this._client;this._close(),e&&e.remoteClient===this&&"destroy"in e&&e.destroy(),e.remoteClient=null},s.prototype._onInvoke=function(e){var t,o=this,s=e.methodName,n=e.jobId,r=e.data,i=e.abortable?new _.default:null,a=this._inJobs,h=this._client,p=h[s];try{if(!p&&s&&-1!==s.indexOf("."))for(var u=s.split("."),c=0;c<u.length-1;c++)p=(h=h[u[c]])[u[c+1]];if("function"!=typeof p)throw new TypeError(s+" is not a function");t=p.call(h,r,{client:this,signal:i?i.signal:null})}catch(e){return void this._post({type:v,jobId:n,error:f.toInvokeError(e)})}if(d.isThenable(t)){a.set(n,{controller:i,promise:t});var l=function(){a.has(n)&&(i.signal.removeEventListener("abort",l),t.cancel(),b(a,n))};i.signal.addEventListener("abort",l),t.then(function(e){a.has(n)&&(b(a,n),o._post({type:v,jobId:n},e))}).catch(function(e){a.has(n)&&(i.signal.removeEventListener("abort",l),b(a,n),e&&"AbortError"===e.name||o._post({type:v,jobId:n,error:f.toInvokeError(e||{message:"Error encountered at method "+s})}))})}else this._post({type:v,jobId:n},t)},s.prototype._onOpenPort=function(e){var t=new MessageChannel;new s(t.port1,this._client,{}),this._post({type:v,jobId:e.jobId},t.port2,[t.port2])},s.prototype._onResponse=function(e){this._frameTask?this._responseQueue.push(e):this._handleResponse(e)},s.prototype._update=function(e){for(;!e.done&&0<this._responseQueue.length;)this._handleResponse(this._responseQueue.shift()),e.madeProgress()},s.prototype._handleResponse=function(e){var t=e.jobId,o=e.error,s=e.data,n=this._outJobs;if(n.has(t)){var r=n.get(t);b(n,t),o?r.reject(h.fromJSON(JSON.parse(o))):r.resolve(s)}},s.prototype._post=function(e,t,o){return f.postMessage(this._port,e,t,o)},s}()});