"use strict";
{
    globalThis.C3.Plugins.sse_plugin.Instance = class sse_Instance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();
            this.curTag = "";
            this.response = {};
            this.error = {};
            if (typeof (EventSource) !== "undefined") {
                var self = this;
                self._trigger(globalThis.C3.Plugins.sse_plugin.Cnds.onSupport);
            } else {
                //self.error = "your browser not supported server-sent events(SSE)";
                var self = this;
                self._trigger(globalThis.C3.Plugins.sse_plugin.Cnds.onnotSupport);
            }
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }


    };
}

