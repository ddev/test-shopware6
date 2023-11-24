(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[593],{"11Ug":function(e,n,t){"use strict";t.r(n);var r=t("CsSd"),l=t.n(r);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var p=Shopware,i=p.Component,a=p.Mixin,s=i.getComponentHelper().mapPropertyErrors;n.default={template:'\n{% block sw_property_detail_base %}\n<sw-card\n    v-if="propertyGroup"\n    position-identifier="sw-property-detail-base"\n    :title="$tc(\'sw-property.detail.cardTitleGroupInfo\')"\n    :is-loading="isLoading"\n>\n\n    \n    {% block sw_property_detail_base_name %}\n    <sw-text-field\n        {% if VUE3 %}\n        v-model:value="propertyGroup.name"\n        {% else %}\n        v-model="propertyGroup.name"\n        {% endif %}\n        required\n        :error="propertyGroupNameError"\n        :label="$tc(\'sw-property.detail.labelName\')"\n        :placeholder="placeholder(propertyGroup, \'name\', $tc(\'sw-property.detail.placeholderName\'))"\n        :disabled="!allowEdit"\n    />\n    {% endblock %}\n\n    \n    {% block sw_property_detail_base_description %}\n    <sw-textarea-field\n        {% if VUE3 %}\n        v-model:value="propertyGroup.description"\n        {% else %}\n        v-model="propertyGroup.description"\n        {% endif %}\n        :label="$tc(\'sw-property.detail.labelDescription\')"\n        :placeholder="placeholder(propertyGroup, \'description\', $tc(\'sw-property.detail.placeholderDescription\'))"\n        :disabled="!allowEdit"\n    />\n    {% endblock %}\n\n    \n    {% block sw_property_detail_filter_visible_container %}\n    <sw-container\n        columns="repeat(2, 1fr)"\n        gap="0px 30px"\n    >\n        \n        {% block sw_property_detail_base_filterable %}\n        <sw-switch-field\n            {% if VUE3 %}\n            v-model:value="propertyGroup.filterable"\n            {% else %}\n            v-model="propertyGroup.filterable"\n            {% endif %}\n            name="propertyGroupFilterable"\n            class="sw-property-detail__filterable"\n            :label="$tc(\'sw-property.detail.labelFilterable\')"\n            :disabled="!allowEdit"\n        />\n        {% endblock %}\n\n        \n        {% block sw_property_detail_base_visible_on_detail %}\n        <sw-switch-field\n            {% if VUE3 %}\n            v-model:value="propertyGroup.visibleOnProductDetailPage"\n            {% else %}\n            v-model="propertyGroup.visibleOnProductDetailPage"\n            {% endif %}\n            name="propertyGroupvisibleOnProductDetailPage"\n            class="sw-property-detail__visible-on-detail"\n            :label="$tc(\'sw-property.detail.labelvisibleOnProductDetailPage\')"\n            :disabled="!allowEdit"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_property_detail_sorting_display_container %}\n    <sw-container\n        columns="repeat(3, 1fr)"\n        gap="0px 30px"\n    >\n        \n        {% block sw_property_detail_display_type %}\n        <sw-select-field\n            {% if VUE3 %}\n            v-model:value="propertyGroup.displayType"\n            {% else %}\n            v-model="propertyGroup.displayType"\n            {% endif %}\n            validation="required"\n            required\n            :label="$tc(\'sw-property.detail.labelDisplayType\')"\n            :disabled="!allowEdit"\n        >\n            <option\n                v-for="option in displayTypes"\n                :key="option.value"\n                :value="option.value"\n            >\n                {{ option.label }}\n            </option>\n        </sw-select-field>\n        {% endblock %}\n\n        \n        {% block sw_property_detail_sorting_type %}\n        <sw-select-field\n            {% if VUE3 %}\n            v-model:value="propertyGroup.sortingType"\n            {% else %}\n            v-model="propertyGroup.sortingType"\n            {% endif %}\n            validation="required"\n            :disabled="!allowEdit"\n            required\n            :label="$tc(\'sw-property.detail.labelSortingType\')"\n        >\n            <option\n                v-for="option in sortingTypes"\n                :key="option.value"\n                :value="option.value"\n            >\n                {{ option.label }}\n            </option>\n        </sw-select-field>\n        {% endblock %}\n\n        \n        {% block sw_property_detail_position %}\n        <sw-number-field\n            {% if VUE3 %}\n            v-model:value="propertyGroup.position"\n            {% else %}\n            v-model="propertyGroup.position"\n            {% endif %}\n            pattern="[0-9]"\n            :step="1"\n            :label="$tc(\'sw-property.detail.labelPosition\')"\n            :disabled="!allowEdit"\n            :placeholder="$tc(\'sw-property.detail.placeholderPosition\')"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',mixins:[a.getByName("placeholder")],props:{propertyGroup:{type:Object,required:!0,default:function(){return{}}},isLoading:{type:Boolean,default:!1},allowEdit:{type:Boolean,required:!1,default:!0}},data:function(){return{sortingTypes:[{value:"alphanumeric",label:this.$tc("sw-property.detail.alphanumericSortingType")},{value:"position",label:this.$tc("sw-property.detail.positionSortingType")}],displayTypes:[{value:"media",label:this.$tc("sw-property.detail.mediaDisplayType")},{value:"text",label:this.$tc("sw-property.detail.textDisplayType")},{value:"select",label:this.$tc("sw-property.detail.selectDisplayType")},{value:"color",label:this.$tc("sw-property.detail.colorDisplayType")}]}},computed:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},s("propertyGroup",["name","displayType","sortingType"]))}}}]);
//# sourceMappingURL=5fa33c8987f015585b1c.js.map