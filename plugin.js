"use strict";
// Porting BY EMI INDO with c3addon-ide-plus

{
    const PLUGIN_ID = "sse_plugin";
    // callMap Deprecated const PLUGIN_VERSION = "1.0.0.5";
    const PLUGIN_CATEGORY = "web";

    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.sse_plugin = class sse_Plugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("MohammadHadi");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(true);
            this._info.SetIsDeprecated(false);
            this._info.SetSupportsEffects(false);
            this._info.SetMustPreDraw(false);
            this._info.SetCanBeBundled(false);

            this._info.SetSupportedRuntimes(["c3"]);	// c3 for stubs only!

            SDK.Lang.PushContext(".properties");
            this._info.SetProperties([
            ]);
            SDK.Lang.PopContext();		// .properties
            SDK.Lang.PopContext();
        }
    };
    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
