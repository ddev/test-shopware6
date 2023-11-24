(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[442],{T0j1:function(e,n,t){"use strict";t.r(n);var a=t("7yzw"),r=t.n(a),s=t("CsSd"),i=t.n(s),l=t("92Mt"),o=t.n(l);t("m/dX");function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var c=Shopware,g=c.Component,d=c.Mixin,m=c.Data.Criteria,b=g.getComponentHelper().mapPropertyErrors;n.default={template:'\n{% block sw_settings_number_range_detail %}\n<sw-page class="sw-settings-number-range-detail">\n\n    \n    {% block sw_settings_number_range_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(numberRange, \'name\', $tc(\'sw-settings-number-range.detail.textHeadline\')) }}</h2>\n    </template>\n    {% endblock %}\n    \n    {% block sw_settings_number_range_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n    \n    {% block sw_settings_number_range_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_number_range_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-number-range.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_number_range_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-number-range-detail__save-action"\n            variant="primary"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!acl.can(\'number_ranges.editor\')"\n            {% if VUE3 %}\n            @update:process-success="saveFinish"\n            {% else %}\n            @process-finish="saveFinish"\n            {% endif %}\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-number-range.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_number_range_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_number_range_detail_language_info %}\n                <sw-language-info :entity-description="identifier" />\n                {% endblock %}\n\n                \n                {% block sw_settings_number_range_detail_content_card %}\n                <sw-card\n                    :title="$tc(\'sw-settings-number-range.detail.configCard\')"\n                    position-identifier="sw-settings-number-range-detail-content"\n                >\n                    \n                    {% block sw_settings_number_range_detail_content_global_warning %}\n                    <sw-alert\n                        v-if="numberRange && numberRange.type && numberRange.type.global"\n                        class="sw-number_range-quickinfo__alert-global-type"\n                        variant="warning"\n                        :title="$tc(\'sw-settings-number-range.general.infoGlobalTypeTitle\', 0, {typeName: numberRange.type.typeName})"\n                    >\n                        {{ $tc(\'sw-settings-number-range.general.infoGlobalType\', 0, {typeName: numberRange.type.typeName}) }}\n                    </sw-alert>\n                    {% endblock %}\n\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                        gap="0px 30px"\n                    >\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_name %}\n                        <sw-text-field\n                            {% if VUE3 %}\n                            v-model:value="numberRange.name"\n                            {% else %}\n                            v-model="numberRange.name"\n                            {% endif %}\n                            name="sw-field--numberRange-name"\n                            :label="$tc(\'sw-settings-number-range.detail.labelName\')"\n                            :placeholder="placeholder(numberRange,\'name\', $tc(\'sw-settings-number-range.detail.placeholderName\'))"\n                            validation="required"\n                            required\n                            :disabled="!acl.can(\'number_ranges.editor\')"\n                            :error="numberRangeNameError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_description %}\n                        <sw-text-field\n                            {% if VUE3 %}\n                            v-model:value="numberRange.description"\n                            {% else %}\n                            v-model="numberRange.description"\n                            {% endif %}\n                            name="sw-field--numberRange-description"\n                            :label="$tc(\'sw-settings-number-range.detail.labelDescription\')"\n                            :placeholder="placeholder(numberRange,\'description\', $tc(\'sw-settings-number-range.detail.placeholderDescription\'))"\n                            :disabled="!acl.can(\'number_ranges.editor\')"\n                        />\n                        {% endblock %}\n                    </sw-container>\n\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(200px, 1fr))"\n                        gap="0px 30px"\n                    >\n                        \n                        {% block sw_settings_number_range_detail_content_field_prefix %}\n                        <sw-text-field\n                            {% if VUE3 %}\n                            v-model:value="prefix"\n                            {% else %}\n                            v-model="prefix"\n                            {% endif %}\n                            name="sw-field--prefix"\n                            :disabled="advanced || !acl.can(\'number_ranges.editor\')"\n                            :label="$tc(\'sw-settings-number-range.detail.labelPrefix\')"\n                            :placeholder="advanced?$tc(\'sw-settings-number-range.detail.placeholderSimpleModeImpossible\'):$tc(\'sw-settings-number-range.detail.placeholderPrefix\')"\n                            {% if VUE3 %}\n                            @update:value="onChangePattern()"\n                            {% else %}\n                            @input="onChangePattern()"\n                            {% endif %}\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_start %}\n                        <sw-number-field\n                            {% if VUE3 %}\n                            v-model:value="numberRange.start"\n                            {% else %}\n                            v-model="numberRange.start"\n                            {% endif %}\n                            name="sw-field--numberRange-start"\n                            number-type="int"\n                            :disabled="!acl.can(\'number_ranges.editor\')"\n                            :label="$tc(\'sw-settings-number-range.detail.labelStart\')"\n                            :placeholder="$tc(\'sw-settings-number-range.detail.placeholderStart\')"\n                            required\n                            validation="required"\n                            {% if VUE3 %}\n                            @update:value="onChangePattern()"\n                            {% else %}\n                            @change="onChangePattern()"\n                            {% endif %}\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_suffix %}\n                        <sw-text-field\n                            {% if VUE3 %}\n                            v-model:value="suffix"\n                            {% else %}\n                            v-model="suffix"\n                            {% endif %}\n                            name="sw-field--suffix"\n                            :disabled="advanced || !acl.can(\'number_ranges.editor\')"\n                            :label="$tc(\'sw-settings-number-range.detail.labelSuffix\')"\n                            :placeholder="advanced?$tc(\'sw-settings-number-range.detail.placeholderSimpleModeImpossible\'):$tc(\'sw-settings-number-range.detail.placeholderSuffix\')"\n                            {% if VUE3 %}\n                            @update:value="onChangePattern()"\n                            {% else %}\n                            @input="onChangePattern()"\n                            {% endif %}\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_pattern %}\n                        <sw-text-field\n                            v-if="advanced"\n                            {% if VUE3 %}\n                            v-model:value="numberRange.pattern"\n                            {% else %}\n                            v-model="numberRange.pattern"\n                            {% endif %}\n                            name="sw-field--numberRange-pattern"\n                            :label="$tc(\'sw-settings-number-range.detail.labelPattern\')"\n                            :placeholder="$tc(\'sw-settings-number-range.detail.placeholderPattern\')"\n                            :disabled="!acl.can(\'number_ranges.editor\')"\n                            {% if VUE3 %}\n                            @update:value="onChangePattern()"\n                            {% else %}\n                            @input="onChangePattern()"\n                            {% endif %}\n                        />\n                        <div v-if="!advanced"></div>\n                        {% endblock %}\n                    </sw-container>\n\n                    <sw-container\n                        columns="1fr 1fr"\n                        gap="0px 30px"\n                    >\n                        \n                        {% block sw_settings_number_range_detail_content_field_default %}\n                        <div class="sw-settings-number-range-detail__field_default">\n                            <sw-switch-field\n                                {% if VUE3 %}\n                                v-model:value="advanced"\n                                {% else %}\n                                v-model="advanced"\n                                {% endif %}\n                                name="sw-field--advanced"\n                                bordered\n                                :disabled="!acl.can(\'number_ranges.editor\')"\n                                :label="$tc(\'sw-settings-number-range.detail.labelAdvanced\')"\n                            />\n                            <sw-help-text\n                                :width="380"\n                                :text="$t(\'sw-settings-number-range.detail.helpTextAdvancedField\')"\n                            />\n                        </div>\n                        {% endblock %}\n                    </sw-container>\n\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                        gap="0px 30px"\n                    >\n                        \n                        {% block sw_settings_number_range_detail_content_field_current_number %}\n                        <sw-text-field\n                            v-if="state"\n                            {% if VUE3 %}\n                            v-model:value="state"\n                            {% else %}\n                            v-model="state"\n                            {% endif %}\n                            name="sw-field--state"\n                            :disabled="true"\n                            :label="$tc(\'sw-settings-number-range.detail.labelCurrentNumber\')"\n                            :placeholder="numberRange.start?numberRange.start.toString():\'\'"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_preview %}\n                        <sw-text-field\n                            {% if VUE3 %}\n                            v-model:value="preview"\n                            {% else %}\n                            v-model="preview"\n                            {% endif %}\n                            name="sw-field--preview"\n                            :disabled="true"\n                            :label="$tc(\'sw-settings-number-range.detail.labelPreview\')"\n                        />\n                        {% endblock %}\n                    </sw-container>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_number_range_detail_assignment_card %}\n                <sw-card\n                    :title="$tc(\'sw-settings-number-range.detail.assignmentCard\')"\n                    position-identifier="sw-settings-number-range-detail-assignment"\n                    class="sw-settings-number-range-detail-assignment"\n                >\n                    \n                    {% block sw_settings_number_range_detail_assignment_card_global_warning %}\n                    <sw-alert\n                        v-if="numberRange !== null && numberRange.global"\n                        class="sw-number_range-quickinfo__alert-global-type"\n                        variant="info"\n                        :title="$tc(\'sw-settings-number-range.general.infoGlobalTitle\', 0, {name: numberRange.name})"\n                    >\n                        {{ $tc(\'sw-settings-number-range.general.infoGlobal\', 0, {name: numberRange.name}) }}\n                    </sw-alert>\n                    <sw-alert\n                        v-if="\n                            numberRange.type !== null &&\n                                numberRange.numberRangeSalesChannels &&\n                                numberRange.numberRangeSalesChannels.length > 0"\n                        class="sw-number_range-quickinfo__alert-global-type"\n                        variant="warning"\n                    >\n                        {{ $tc(\'sw-settings-number-range.general.infoSalesChannelBound\', 0, {name: numberRange.name}) }}\n                    </sw-alert>\n                    {% endblock %}\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(100%, 1fr))"\n                        gap="0px 30px"\n                    >\n                        \n                        {% block sw_sales_channel_detail_base_general_input_type %}\n                        <sw-entity-single-select\n                            v-if="numberRange.type"\n                            id="numberRangeTypes"\n                            {% if VUE3 %}\n                            v-model:value="numberRange.typeId"\n                            {% else %}\n                            v-model="numberRange.typeId"\n                            {% endif %}\n                            name="sw-field--numberRange-typeId"\n                            entity="number_range_type"\n                            class="sw-number-range-detail__select-type"\n                            :disabled="disableNumberRangeTypeSelect"\n                            required\n                            show-clearable-button\n                            label-property="typeName"\n                            :label="$tc(\'sw-settings-number-range.detail.labelType\')"\n                            :criteria="numberRange.type.global ? numberRangeTypeCriteriaGlobal : numberRangeTypeCriteria"\n                            :error="numberRangeTypeIdError"\n                            {% if VUE3 %}\n                            @update:value="onChangeType"\n                            {% else %}\n                            @change="onChangeType"\n                            {% endif %}\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_sales_channel_detail_base_general_input_sales_channel %}\n                        <sw-multi-select\n                            v-if="numberRange && (!numberRange.global || numberRange.global === false)"\n                            class="sw-number-range-detail__select-type"\n                            :label="$tc(\'sw-settings-number-range.detail.labelSalesChannel\')"\n                            :disabled="!numberRange.typeId || !acl.can(\'number_ranges.editor\')"\n                            :value="selectedNumberRangeSalesChannels"\n                            :options="salesChannels"\n                            name="sw-field--selectedNumberRangeSalesChannels"\n                            label-property="translated.name"\n                            value-property="id"\n                            @item-add="addSalesChannel"\n                            @item-remove="removeSalesChannel"\n                        />\n                        {% endblock %}\n                    </sw-container>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_number_range_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-settings-number-range-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="numberRange"\n                        :disabled="!acl.can(\'number_ranges.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["numberRangeService","repositoryFactory","acl","customFieldDataProviderService"],mixins:[d.getByName("notification"),d.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},data:function(){return{numberRangeId:void 0,numberRange:{},salesChannels:[],advanced:!1,simplePossible:!0,prefix:"",suffix:"",preview:"",state:1,isLoading:!1,isSaveSuccessful:!1,customFieldSets:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({identifier:function(){return this.placeholder(this.numberRange,"name")},disableNumberRangeTypeSelect:function(){return this.numberRange.type.global||this.numberRange.global||null!==this.numberRange.type&&this.numberRange.numberRangeSalesChannels&&this.numberRange.numberRangeSalesChannels.length>0||!this.acl.can("number_ranges.editor")},numberRangeRepository:function(){return this.repositoryFactory.create("number_range")},numberRangeCriteria:function(){var e=new m(1,25);return e.addAssociation("type"),e.addAssociation("numberRangeSalesChannels"),e},numberRangeTypeRepository:function(){return this.repositoryFactory.create("number_range_type")},numberRangeTypeCriteria:function(){var e=new m(1,25);return e.addFilter(m.equals("global",!1)),e.addSorting(m.sort("typeName","ASC")),e},numberRangeTypeCriteriaGlobal:function(){var e=new m(1,25);return e.addFilter(m.equals("global",!0)),e.addSorting(m.sort("typeName","ASC")),e},salesChannelCriteria:function(){var e=new m(1,25);return e.addFilter(m.multi("OR",[m.equals("numberRangeSalesChannels.numberRange.id",this.numberRange.id),m.not("OR",[m.equals("numberRangeSalesChannels.numberRangeTypeId",this.numberRange.typeId)])])),e.addAssociation("numberRangeSalesChannels"),e},salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")},numberRangeSalesChannelsRepository:function(){return this.repositoryFactory.create("number_range_sales_channel")},selectedNumberRangeSalesChannels:function(){return this.numberRange.numberRangeSalesChannels?this.numberRange.numberRangeSalesChannels.map((function(e){return e.salesChannelId})):[]},tooltipSave:function(){if(!this.acl.can("number_ranges.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("number_ranges.editor"),showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},showCustomFields:function(){return this.customFieldSets&&this.customFieldSets.length>0}},b("numberRange",["name","typeId"])),watch:{"numberRange.pattern":function(){this.getPreview()},"numberRange.start":function(){this.getPreview()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;return r()(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.isLoading=!0,!e.$route.params.id||!0===e.numberRange.isLoading){n.next=5;break}return e.numberRangeId=e.$route.params.id,n.next=5,Promise.all([e.loadEntityData(),e.loadCustomFieldSets()]);case 5:e.isLoading=!1;case 6:case"end":return n.stop()}}),n)})))()},loadEntityData:function(){var e=this;return r()(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.numberRangeRepository.get(e.numberRangeId,Shopware.Context.api,e.numberRangeCriteria);case 2:return e.numberRange=n.sent,e.getState(),e.splitPattern(),n.next=7,e.loadSalesChannels();case 7:case"end":return n.stop()}}),n)})))()},loadCustomFieldSets:function(){var e=this;this.customFieldDataProviderService.getCustomFieldSets("number_range").then((function(n){e.customFieldSets=n}))},splitPattern:function(){if(""!==this.numberRange.pattern){var e=/([^{}]*)({[^{}]*?})([^{}]*)/gi,n=e.exec(this.numberRange.pattern);n&&4===n.length&&"{n}"===n[2]&&1===this.numberRange.pattern.match(e).length?(this.prefix=n[1]?n[1]:"",this.suffix=n[3]?n[3]:"",this.simplePossible=!0):(this.advanced=!0,this.simplePossible=!1)}},getPreview:function(){var e=this;return this.numberRangeService.previewPattern(this.numberRange.type.technicalName,this.numberRange.pattern,this.numberRange.start).then((function(n){e.preview=n.number}))},getState:function(){var e=this;return this.numberRangeService.previewPattern(this.numberRange.type.technicalName,"{n}",0).then((function(n){return n.number>1?(e.state=n.number-1,Promise.resolve()):(e.state=e.numberRange.start,Promise.resolve())}))},loadSalesChannels:function(){var e=this;return this.salesChannelRepository.search(this.salesChannelCriteria).then((function(n){e.salesChannels=n}))},onSave:function(){var e=this;if(!this.acl.can("number_ranges.editor"))return!1;this.isSaveSuccessful=!1;var n=this.numberRange.name||this.placeholder(this.numberRange,"name");return this.onChangePattern(),this.numberRange.pattern?(this.state>1&&this.state>=this.numberRange.start&&this.createNotificationInfo({message:this.$tc("sw-settings-number-range.detail.infoStartDecrementMessage")}),this.isLoading=!0,this.numberRangeRepository.save(this.numberRange).then((function(){e.isSaveSuccessful=!0})).catch((function(t){throw e.isLoading=!1,e.createNotificationError({message:e.$tc("sw-settings-number-range.detail.messageSaveError",0,{name:n})}),t})).finally((function(){e.isLoading=!1,e.getState()}))):(this.createNotificationError({message:this.$tc("sw-settings-number-range.detail.errorPatternNeededMessage")}),!1)},saveFinish:function(){this.isSaveSuccessful=!1},onCancel:function(){this.$router.push({name:"sw.settings.number.range.index"})},onChangeLanguage:function(){this.createdComponent()},abortOnLanguageChange:function(){return this.numberRangeRepository.hasChanges(this.numberRange)},saveOnLanguageChange:function(){return this.onSave()},onChangePattern:function(){null===this.prefix&&(this.prefix=""),null===this.suffix&&(this.suffix=""),!0===this.advanced?this.splitPattern():this.numberRange.pattern="".concat(this.prefix,"{n}").concat(this.suffix)},onChangeType:function(){this.loadSalesChannels()},addSalesChannel:function(e){var n=this.numberRangeSalesChannelsRepository.create();n.numberRangeId=this.numberRange.id,n.numberRangeTypeId=this.numberRange.typeId,n.salesChannelId=e.id,this.numberRange.numberRangeSalesChannels.push(n),this.numberRange.numberRangeSalesChannels.length<=1&&this.$nextTick().then((function(){var e=document.querySelector(".sw-card-view__content");e&&(e.scrollTop+=78)}))},removeSalesChannel:function(e){var n=this.numberRange.numberRangeSalesChannels.find((function(n){return n.salesChannelId===e.id}));this.numberRange.numberRangeSalesChannels.remove(n.id)},noSalesChannelSelected:function(){return!(!1!==this.numberRange.global||!1!==this.numberRange.type.global&&null!==this.numberRange.type.global||this.numberRange.numberRangeSalesChannels&&0!==this.numberRange.numberRangeSalesChannels.length)}}}},"m/dX":function(e,n,t){var a=t("v0Xs");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t("P8hj").default)("d370d454",a,!0,{})},v0Xs:function(e,n,t){}}]);
//# sourceMappingURL=66b8093b13e6e76d6da6.js.map