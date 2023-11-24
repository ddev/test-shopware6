(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[566],{"8H1J":function(e,n,t){"use strict";t.r(n);n.default={template:'\n{% block sw_order_document_settings_modal_form_first_row %}\n<sw-container\n    columns="1fr 1fr 1fr"\n    gap="0 14px"\n>\n    \n    {% block sw_order_document_settings_modal_form_document_number %}\n    <sw-text-field\n        {% if VUE3 %}\n        v-model:value="documentConfig.documentNumber"\n        {% else %}\n        v-model="documentConfig.documentNumber"\n        {% endif %}\n        :label="$tc(\'sw-order.documentModal.labelDeliveryNoteNumber\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_settings_modal_form_document_date %}\n    <sw-datepicker\n        {% if VUE3 %}\n        v-model:value="documentConfig.documentDate"\n        {% else %}\n        v-model="documentConfig.documentDate"\n        {% endif %}\n        date-type="date"\n        :label="$tc(\'sw-order.documentModal.labelDocumentDate\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_settings_modal_form_document_delivery_date %}\n    <sw-datepicker\n        {% if VUE3 %}\n        v-model:value="documentConfig.custom.deliveryDate"\n        {% else %}\n        v-model="documentConfig.custom.deliveryDate"\n        {% endif %}\n        date-type="date"\n        required\n        :label="$tc(\'sw-order.documentModal.labelDeliveryDate\')"\n    />\n    {% endblock %}\n</sw-container>\n{% endblock %}\n',inject:["feature"],data:function(){return{documentConfig:{custom:{deliveryDate:(new Date).toISOString(),deliveryNoteDate:(new Date).toISOString()},documentNumber:0,documentComment:"",documentDate:""}}},created:function(){this.createdComponent()},methods:{onCreateDocument:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("loading-document"),this.documentNumberPreview===this.documentConfig.documentNumber?this.numberRangeService.reserve("document_".concat(this.currentDocumentType.technicalName),this.order.salesChannelId,!1).then((function(t){e.documentConfig.custom.deliveryNoteNumber=t.number,t.number!==e.documentConfig.documentNumber&&e.createNotificationInfo({message:e.$tc("sw-order.documentCard.info.DOCUMENT__NUMBER_WAS_CHANGED")}),e.documentConfig.documentNumber=t.number,e.callDocumentCreate(n)})):(this.documentConfig.custom.deliveryNoteNumber=this.documentConfig.documentNumber,this.callDocumentCreate(n))},onPreview:function(){this.$emit("loading-preview"),this.documentConfig.custom.deliveryNoteNumber=this.documentConfig.documentNumber,this.$super("onPreview")}}}}}]);
//# sourceMappingURL=12cebd6009a1ba33d92f.js.map