(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[510],{FfUY:function(t,e,n){"use strict";n.r(e);e.default={template:'\n{% block sw_bulk_edit_save_modal_error %}\n<div class="sw-bulk-edit-save-modal-error">\n    \n    {% block sw_bulk_edit_save_modal_error_icon %}\n    <sw-label\n        class="sw-bulk-edit-save-modal__icon"\n        appearance="pill"\n        variant="danger"\n    >\n        <sw-icon\n            name="regular-times-hexagon"\n            size="30px"\n        />\n    </sw-label>\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_save_modal_error_content %}\n    <p class="sw-bulk-edit-save-modal__help-text">\n        {{ $tc(\'sw-bulk-edit.modal.error.description\') }}\n    </p>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',created:function(){this.createdComponent()},methods:{createdComponent:function(){this.updateButtons(),this.setTitle()},setTitle:function(){this.$emit("title-set",this.$tc("sw-bulk-edit.modal.error.title"))},updateButtons:function(){var t=[{key:"close",label:this.$tc("global.sw-modal.labelClose"),position:"right",variant:"primary",action:"",disabled:!1}];this.$emit("buttons-update",t)}}}}}]);
//# sourceMappingURL=c4915f7b12494efac1c4.js.map