(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[146],{ftwe:function(e,t,n){"use strict";n.r(t);n("oEVo"),t.default={template:'\n{% block sw_cms_section_actions %}\n<div\n    class="sw-cms-section__actions"\n    :class="componentClasses"\n>\n\n    \n    {% block sw_cms_section_action_select %}\n    <div\n        class="sw-cms-section__action sw-cms-section-select"\n        role="button"\n        tabindex="0"\n        @click="selectSection"\n        @keydown.enter="selectSection"\n    >\n        <sw-icon\n            name="regular-layout"\n            size="20"\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{section:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},inject:["feature"],data:function(){return{cmsPageState:Shopware.State.get("cmsPageState")}},computed:{componentClasses:function(){return{"is--disabled":this.disabled}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.cmsPageState.selectedSection&&this.$store.dispatch("cmsPageState/setSection",this.section)},selectSection:function(){this.disabled||(this.$store.dispatch("cmsPageState/setSection",this.section),this.feature.isActive("VUE3")?this.$parent.$parent.$emit("page-config-open","itemConfig"):this.$parent.$emit("page-config-open","itemConfig"))}}}},gTp3:function(e,t,n){},oEVo:function(e,t,n){var s=n("gTp3");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n("P8hj").default)("0b085578",s,!0,{})}}]);
//# sourceMappingURL=94f338b88d9b1d8466de.js.map