(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[478],{"/B/9":function(t,e,i){},ABpg:function(t,e,i){var n=i("/B/9");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("P8hj").default)("6cf46218",n,!0,{})},r2ru:function(t,e,i){"use strict";i.r(e);i("ABpg");var n=Shopware,a=n.Component,s=n.Mixin,r=Shopware.Data.Criteria;e.default=a.wrapComponentConfig({template:'\n{% block sw_settings_tax_provider %}\n<sw-page class="sw-settings-tax-tax-provider-detail">\n    <template #smart-bar-header>\n        <h2 v-if="label">\n            {{ label }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-settings-tax.taxProviderDetail.textHeadline\') }}\n        </h2>\n    </template>\n\n    <template #smart-bar-actions>\n        <sw-button\n            v-tooltip.bottom="{ message: \'ESC\', appearance: \'light\' }"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n\n        <sw-button-process\n            {% if VUE3 %}\n            v-model:processSuccess="isSaveSuccessful"\n            {% else %}\n            v-model="isSaveSuccessful"\n            {% endif %}\n            class="sw-settings-tax-tax-provider-detail__save-action"\n            variant="primary"\n            :is-loading="isLoading"\n            :disabled="isLoading || !allowSave"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n    </template>\n\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                <sw-alert\n                    class="sw-settings-tax-tax-provider-detail-info"\n                    :title="$tc(\'sw-settings-tax.taxProviderDetail.infoTitle\')"\n                    variant="info"\n                >\n                    {{ $tc(\'sw-settings-tax.taxProviderDetail.infoText\') }}\n                </sw-alert>\n\n                <sw-card\n                    position-identifier="sw-settings-tax-tax-provider-detail-settings"\n                    :title="$tc(\'sw-settings-tax.taxProviderDetail.cardTitleSettings\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-container\n                        columns="5fr 1fr"\n                        gap="0px 30px"\n                    >\n                        <sw-number-field\n                            {% if VUE3 %}\n                            v-model:value="taxProvider.priority"\n                            {% else %}\n                            v-model="taxProvider.priority"\n                            {% endif %}\n                            class="sw-settings-tax-tax-provider-detail__field-priority"\n                            :disabled="true"\n                            :label="$tc(\'sw-settings-tax.taxProviderDetail.labelPriority\')"\n                        />\n\n                        <sw-switch-field\n                            {% if VUE3 %}\n                            v-model:value="taxProvider.active"\n                            {% else %}\n                            v-model="taxProvider.active"\n                            {% endif %}\n                            class="sw-settings-tax-tax-provider-detail__field-active"\n                            :disabled="!acl.can(\'tax.editor\')"\n                            :label="$tc(\'sw-settings-tax.taxProviderDetail.labelActive\')"\n                        />\n                    </sw-container>\n                </sw-card>\n\n                <sw-card\n                    position-identifier="sw-settings-tax-tax-provider-detail-availability"\n                    :title="$tc(\'sw-settings-tax.taxProviderDetail.cardTitleAvailability\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-select-rule-create\n                        v-if="!isLoading"\n                        class="sw-settings-tax-tax-provider-detail__field-availability-rule"\n                        :disabled="!acl.can(\'tax.editor\')"\n                        :rule-id="taxProvider.availabilityRuleId"\n                        :rule-filter="ruleFilter"\n                        :placeholder="$tc(\'sw-settings-tax.taxProviderDetail.placeholderAvailabilityRule\')"\n                        rule-aware-group-key="taxProvider"\n                        @save-rule="onSaveRule"\n                        @dismiss-rule="onDismissRule"\n                    />\n                </sw-card>\n\n                <sw-extension-component-section\n                    v-if="hasIdentifier"\n                    :position-identifier="positionIdentifier"\n                />\n            </template>\n        </sw-card-view>\n    </template>\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[s.getByName("notification")],props:{taxProviderId:{type:String,required:!1,default:""}},data:function(){return{taxProvider:void 0,isLoading:!1,isSaveSuccessful:!1}},metaInfo:function(){return{title:this.$createTitle()}},computed:{label:function(){var t,e;return(null===(t=this.taxProvider)||void 0===t||null===(e=t.translated)||void 0===e?void 0:e.name)||""},taxProviderRepository:function(){return this.repositoryFactory.create("tax_provider")},allowSave:function(){return this.acl.can("tax.editor")},ruleFilter:function(){var t=new r(1,25);return t.addFilter(r.multi("OR",[r.contains("rule.moduleTypes.types","tax_provider"),r.equals("rule.moduleTypes",null)])),t.addSorting(r.sort("name","ASC",!1)),t},hasIdentifier:function(){var t;return!(null===(t=this.taxProvider)||void 0===t||!t.identifier)},positionIdentifier:function(){var t;if(!this.hasIdentifier)return"";var e=(null===(t=this.taxProvider)||void 0===t?void 0:t.identifier)||"";return"sw-settings-tax-tax-provider-detail-custom-".concat(e)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadTaxProvider()},loadTaxProvider:function(){var t=this;return this.isLoading=!0,this.taxProviderId?this.taxProviderRepository.get(this.taxProviderId).then((function(e){t.taxProvider=e,t.isLoading=!1})):(this.isLoading=!1,Promise.resolve())},onSave:function(){var t=this;return this.isSaveSuccessful=!1,this.isLoading=!0,this.taxProvider?this.taxProviderRepository.save(this.taxProvider).then((function(){return t.isSaveSuccessful=!0,t.loadTaxProvider()})).catch((function(){t.createNotificationError({message:t.$tc("sw-settings-tax.detail.messageSaveError")}),t.isLoading=!1})):Promise.resolve()},onCancel:function(){this.$router.push({name:"sw.settings.tax.index"})},onSaveRule:function(t){this.taxProvider&&(this.taxProvider.availabilityRuleId=t)},onDismissRule:function(){this.taxProvider&&(this.taxProvider.availabilityRuleId=void 0)}}})}}]);
//# sourceMappingURL=e82e8c0b4cbc6764c848.js.map