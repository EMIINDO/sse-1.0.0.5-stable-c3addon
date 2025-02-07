"use strict";

{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.sse_plugin;

    PLUGIN_CLASS.Instance = class sse_Instance extends SDK.IInstanceBase {
        constructor(sdkType, inst) {
            super(sdkType, inst);
        }
        Release() {
        }
        OnCreate() {
        }
        OnPropertyChanged(id, value) {
        }
        LoadC2Property(name, valueString) {
            return false;       // not handled
        }
    };
}
