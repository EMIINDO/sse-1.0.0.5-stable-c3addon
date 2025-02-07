"use strict";

{
	globalThis.C3.Plugins.sse_plugin.Cnds =
	{
		onmessage(tag)
		{ 
			return globalThis.C3.equalsNoCase(tag, this.curTag); 
		},
		onerror(tag)
		{ 
			return globalThis.C3.equalsNoCase(tag, this.curTag); 
		},
		onopen(tag)
		{ 
			return globalThis.C3.equalsNoCase(tag, this.curTag); 
		},
		onSupport()
		{ 
			return false; 
		},
		onnotSupport()
		{ 
			return false; 
		}
	};
}
