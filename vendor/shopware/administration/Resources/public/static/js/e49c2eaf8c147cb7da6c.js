(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[597],{efit:function(e,n,a){"use strict";a.r(n);var t=Shopware.Utils,s=function(e,n,a){e.name.includes("sw.sales.channel.create")&&!e.params.id&&(e.params.id=t.createId()),a()};n.default={template:"\n{% block sw_sales_channel_detail_content_tabs %}{% endblock %}\n\n\n{% block sw_sales_channel_detail_language_switch %}\n\n<template #language-switch>\n    <sw-language-switch disabled />\n</template>\n{% endblock %}\n\n\n{% block sw_sales_channel_detail_content_language_info %}\n<sw-language-info\n    :entity-description=\"placeholder(salesChannel, 'name', $tc('sw-sales-channel.detail.textHeadline'))\"\n    is-new-entity\n/>\n{% endblock %}\n",beforeRouteEnter:s,beforeRouteUpdate:s,computed:{allowSaving:function(){return this.acl.can("sales_channel.creator")}},methods:{createdComponent:function(){this.$route.params.typeId&&(Shopware.State.getters["context/isSystemDefaultLanguage"]||Shopware.State.commit("context/resetLanguageToDefault"),this.salesChannel=this.salesChannelRepository.create(),this.salesChannel.typeId=this.$route.params.typeId,this.salesChannel.active=!1,this.$super("createdComponent"))},saveFinish:function(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.sales.channel.detail",params:{id:this.salesChannel.id}})},onSave:function(){this.$super("onSave")}}}}}]);
//# sourceMappingURL=e49c2eaf8c147cb7da6c.js.map