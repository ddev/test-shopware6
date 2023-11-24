(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[237],{"+dtn":function(n,e,t){var i=t("wc3g");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,t("P8hj").default)("995c6234",i,!0,{})},F4En:function(n,e,t){"use strict";t.r(e);t("+dtn"),e.default={template:'\n{% block sw_extension_store_landing_page %}\n<div class="sw-extension-store-landing-page">\n    <div class="sw-extension-store-landing-page__wrapper">\n        <div\n            v-if="isLoading"\n            class="sw-extension-store-landing-page__wrapper-loading"\n        >\n            <sw-loader />\n\n            <p>\n                {{ $tc(\'sw-extension-store.landing-page.enablingShopwareStore\') }}\n                <br>\n                {{ $tc(\'sw-extension-store.landing-page.takeMinutes\') }}\n            </p>\n        </div>\n\n        <div\n            v-else-if="activationStatus !== null"\n            class="sw-extension-store-landing-page__wrapper-activated"\n        >\n            <template v-if="activationStatus === \'error\'">\n                <sw-label\n                    appearance="pill"\n                    variant="danger"\n                >\n                    <sw-icon\n                        name="regular-times-circle"\n                        size="30px"\n                    />\n                </sw-label>\n\n                <h2>\n                    {{ error && error.title || $tc(\'sw-extension-store.landing-page.activationErrorTitle\') }}\n                </h2>\n                <p>\n                    {{ error && error.detail || $tc(\'sw-extension-store.landing-page.activationErrorDescription\') }}\n                </p>\n\n                <sw-button\n                    variant="primary"\n                    @click="activateStore"\n                >\n                    {{ $tc(\'sw-extension-store.landing-page.retryButton\') }}\n                </sw-button>\n            </template>\n\n            <template v-else-if="activationStatus === \'success\'">\n                <sw-label\n                    appearance="pill"\n                    variant="success"\n                >\n                    <sw-icon\n                        name="regular-check-circle"\n                        size="30px"\n                    />\n                </sw-label>\n\n                <h2>\n                    {{ $tc(\'sw-extension-store.landing-page.activationSuccessTitle\') }}\n                </h2>\n                <p>\n                    {{ $tc(\'sw-extension-store.landing-page.activationSuccessDescription\') }}\n                </p>\n            </template>\n        </div>\n\n        <div\n            v-else\n            class="sw-extension-store-landing-page__wrapper-content"\n        >\n            <img\n                :src="assetFilter(\'/administration/static/img/extension-store/store_illustration.svg\')"\n                alt=""\n            >\n\n            <span class="sw-extension-store-landing-page__wrapper-label">\n                {{ $tc(\'sw-extension-store.landing-page.label\') }}\n            </span>\n\n            <h2>\n                {{ $tc(\'sw-extension-store.landing-page.activationDescriptionTitleFirst\') }}\n                <br>\n                {{ $tc(\'sw-extension-store.landing-page.activationDescriptionTitleSecond\') }}\n            </h2>\n\n            <p>\n                {{ $tc(\'sw-extension-store.landing-page.activationDescriptionTitleDescription\') }}\n            </p>\n\n            <sw-button\n                class="sw-extension-store-landing-page__activate_button"\n                variant="primary"\n                @click="activateStore"\n            >\n                {{ $tc(\'sw-extension-store.landing-page.activate\') }}\n            </sw-button>\n        </div>\n    </div>\n</div>\n{% endblock %}\n',inject:["extensionHelperService"],data:function(){return{isLoading:!1,activationStatus:null,error:null}},computed:{extensionName:function(){return"SwagExtensionStore"},assetFilter:function(){return Shopware.Filter.getByName("asset")}},methods:{activateStore:function(){var n=this;this.isLoading=!0,this.activationStatus=null,this.extensionHelperService.downloadAndActivateExtension(this.extensionName).then((function(){n.activationStatus="success",window.location.reload()})).catch((function(e){var t;n.activationStatus="error",null!=e&&null!==(t=e.response)&&void 0!==t&&t.data&&Array.isArray(e.response.data.errors)&&e.response.data.errors[0]&&(n.error=e.response.data.errors[0]),Shopware.Utils.debug.error(e)})).finally((function(){n.isLoading=!1}))}}}},wc3g:function(n,e,t){}}]);
//# sourceMappingURL=419f75ae7ac3b0d7569b.js.map