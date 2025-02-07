"use strict";

{
	globalThis.C3.Plugins.sse_plugin.Acts =
	{
		connect(tag,url)
		{
			var self = this;
			var sse = new EventSource(url);
			sse.onmessage = function(event){
				self.curTag = tag;
				self.response[tag] = event.data;
				self._trigger(globalThis.C3.Plugins.sse_plugin.Cnds.onmessage);
			};
			sse.onopen= function(){
				self._trigger(globalThis.C3.Plugins.sse_plugin.Cnds.onopen);
			};
			sse.onerror = function(event){
				self.curTag = tag;
				self.error[tag] = event.error;
				self._trigger(globalThis.C3.Plugins.sse_plugin.Cnds.onerror);
			}
			return;
		}
	};
}
