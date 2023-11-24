(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[548],{sgT6:function(o,e,t){"use strict";t.r(e);var r=t("CsSd"),n=t.n(r);function s(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.push.apply(t,r)}return t}function c(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){n()(o,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))}))}return o}var l=Shopware.Component,u=Shopware.Data.Criteria,a=l.getComponentHelper().mapState,i=Shopware.Classes.ShopwareError;e.default={template:'\n{% block sw_flow_change_customer_group_modal %}\n<sw-modal\n    class="sw-flow-change-customer-group-modal"\n    :title="$tc(\'sw-flow.modals.customerGroup.titleChangeCustomerGroup\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_change_customer_group_modal_select %}\n    <sw-entity-single-select\n        {% if VUE3 %}\n        v-model:value="customerGroupId"\n        {% else %}\n        v-model="customerGroupId"\n        {% endif %}\n        required\n        class="sw-flow-change-customer-group-modal__type-select"\n        entity="customer_group"\n        label-property="translated.name"\n        value-property="id"\n        :criteria="customerGroupCriteria"\n        :label="$tc(\'sw-flow.modals.customerGroup.labelCustomerGroup\')"\n        :placeholder="$tc(\'sw-flow.modals.customerGroup.placeholderCustomerGroup\')"\n        :error="fieldError"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_change_customer_group_modal_content_custom %}\n    {% endblock %}\n\n    \n    {% block sw_flow_change_customer_group_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_flow_change_customer_group_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-change-customer-group-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_change_customer_group_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-change-customer-group-modal__save-button"\n            variant="primary"\n            size="small"\n            @click="onAddAction"\n        >\n            {{ sequence.id ? $tc(\'sw-flow.modals.buttonSaveAction\') : $tc(\'sw-flow.modals.buttonAddAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory"],props:{sequence:{type:Object,required:!0}},data:function(){return{customerGroupId:"",fieldError:null}},computed:c({customerGroupRepository:function(){return this.repositoryFactory.create("customer_group")},customerGroupCriteria:function(){var o=new u(1,100);return o.addSorting(u.sort("name","ASC")),o}},a("swFlowState",["customerGroups"])),watch:{customerGroupId:function(o){o&&this.fieldError&&(this.fieldError=null)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var o,e;this.customerGroupId=(null===(o=this.sequence)||void 0===o||null===(e=o.config)||void 0===e?void 0:e.customerGroupId)||"",this.customerGroups.length||this.customerGroupRepository.search(this.customerGroupCriteria).then((function(o){Shopware.State.commit("swFlowState/setCustomerGroups",o)}))},onClose:function(){this.$emit("modal-close")},onAddAction:function(){if(this.customerGroupId){var o=c(c({},this.sequence),{},{config:{customerGroupId:this.customerGroupId}});this.$emit("process-finish",o)}else this.fieldError=new i({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})}}}}}]);
//# sourceMappingURL=53d23214a8691d279107.js.map