(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[361],{"/lXW":function(n,t,s){var o=s("M8gX");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,s("P8hj").default)("0e43e2f5",o,!0,{})},"9d7U":function(n,t,s){"use strict";s.r(t);s("/lXW"),t.default={template:'\n{% block sw_product_layout_assignment %}\n<div class="sw-product-layout-assignment">\n    \n    {% block sw_product_layout_assignment_firgure %}\n    <div\n        class="sw-product-layout-assignment__figure"\n        role="button"\n        tabindex="0"\n        @click="openLayoutModal"\n        @keydown.enter="openLayoutModal"\n    >\n        \n        {% block sw_product_layout_assignment_firgure_content %}\n        <sw-cms-list-item\n            active\n            :disabled="!acl.can(\'product.editor\')"\n            :page="cmsPage"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_layout_assignment_description %}\n    <div>\n        \n        {% block sw_product_layout_assignment_heading %}\n        <div\n            class="sw-product-layout-assignment__heading"\n            :class="{ \'is--disabled\': !cmsPage }"\n        >\n            \n            {% block sw_product_layout_assignment_heading_title %}\n            <p class="sw-product-layout-assignment__title">\n                {{ cmsPage ? cmsPage.name : $tc(\'sw-product.layoutAssignment.title\') }}\n            </p>\n            {% endblock %}\n\n            \n            {% block sw_product_layout_assignment_heading_subtitle %}\n            <span class="sw-product-layout-assignment__subtitle">\n                {{ $tc(\'sw-product.layoutAssignment.subtitle\') }}\n            </span>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_product_layout_assignment_buttons %}\n        <div class="sw-product-layout-assignment__buttons">\n            \n            {% block sw_product_layout_assignment_button_add %}\n            <sw-button\n                class="sw-product-layout-assignment__button"\n                size="small"\n                :disabled="!acl.can(\'product.editor\')"\n                @click="openLayoutModal"\n            >\n                {{ cmsPage ? $tc(\'sw-product.layoutAssignment.textChangeLayout\') : $tc(\'sw-product.layoutAssignment.textAssignLayout\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_product_layout_assignment_button_edit %}\n            <sw-button\n                class="sw-product-layout-assignment__button"\n                size="small"\n                :disabled="!acl.can(\'product.editor\')"\n                @click="openInPageBuilder"\n            >\n                {{ cmsPage ? $tc(\'sw-product.layoutAssignment.textEditInDesigner\') : $tc(\'sw-product.layoutAssignment.textCreateNewLayout\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_product_layout_assignment_button_delete %}\n            <sw-button\n                v-if="cmsPage"\n                class="sw-product-layout-assignment__button"\n                square\n                size="small"\n                :disabled="!acl.can(\'product.editor\')"\n                @click="onLayoutReset"\n            >\n                <sw-icon\n                    name="regular-trash"\n                    small\n                />\n            </sw-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl"],props:{cmsPage:{type:Object,required:!1,default:null}},methods:{openLayoutModal:function(){this.$emit("modal-layout-open")},openInPageBuilder:function(){this.$emit("button-edit-click")},onLayoutReset:function(){this.$emit("button-delete-click")}}}},M8gX:function(n,t,s){}}]);
//# sourceMappingURL=8f1208e7f96b6ac4bf68.js.map