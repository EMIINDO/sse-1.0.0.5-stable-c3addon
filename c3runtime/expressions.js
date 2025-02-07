"use strict";

{
	globalThis.C3.Plugins.sse_plugin.Exps =
	{
		data(tag)
		{ 
			if (this.response.hasOwnProperty(tag)) {
				return this.response[tag];
			} else {
				return "";
			}
		},
		error(tag)
		{
			if (this.error.hasOwnProperty(tag)) {
				return this.error[tag];
			} else {
				return "";
			}
		}
	};
	
}
