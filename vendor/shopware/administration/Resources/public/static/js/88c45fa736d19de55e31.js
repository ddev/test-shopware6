(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[448],{W27H:function(t,n,e){"use strict";e.r(n);var a=e("6lmj"),o=e.n(a),i=(e("p+G8"),Shopware.Mixin),s=Shopware.Data.Criteria,r=Shopware.Utils.object.cloneDeep;n.default=Shopware.Component.wrapComponentConfig({template:'\n{% block sw_settings_payment_overview %}\n<sw-page class="sw-settings-payment-overview">\n\n    \n    {% block sw_settings_payment_overview_smart_bar_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_settings_payment_overview_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'payment.creator\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-settings-payment-overview__button-create"\n            :disabled="!acl.can(\'payment.creator\')"\n            :router-link="{ name: \'sw.settings.payment.create\' }"\n            variant="primary"\n        >\n            {{ $tc(\'sw-settings-payment.list.buttonAddPaymentMethod\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_payment_overview_smart_bar_header %}\n    <template #smart-bar-header>\n\n        \n        {% block sw_settings_payment_overview_smart_bar_header_title %}\n        <h2 class="sw-settings-payment-overview__title">\n            {{ $tc(\'sw-settings-payment.general.mainMenuItemGeneral\') }}\n        </h2>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_payment_overview_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_payment_overview_content %}\n    <template #content>\n\n        \n        {% block sw_settings_payment_overview_content_inner %}\n        <sw-card-view class="sw-settings-payment-overview__content">\n\n            \n            {% block sw_settings_payment_overview_sorting_modal_card %}\n            <sw-card\n                class="sw-settings-payment-overview__sorting_modal_card"\n                position-identifier="sw-settings-payment-overview-sorting-modal-card"\n            >\n                <sw-button-process\n                    :disabled="isLoading"\n                    :is-loading="isLoading"\n                    :process-success="false"\n                    variant="ghost"\n                    @click="showSortingModal = true"\n                >\n                    {{ $tc(\'sw-settings-payment.overview.openSortingModalButton\') }}\n                </sw-button-process>\n            </sw-card>\n            {% endblock %}\n\n            \n            {% block sw_settings_payment_overview_list %}\n            <template\n                v-for="card in paymentMethodCards"\n                {% if VUE3 %}\n                :key="card.id"\n                {% endif %}\n            >\n\n                <template v-if="card.hasCustomCard">\n                    \n                    {% block sw_settings_payment_overview_list_card_custom_location %}\n                    <sw-extension-component-section\n                        :key="`extension-${card.id}`"\n                        :position-identifier="card.positionId"\n                    />\n                    {% endblock %}\n                </template>\n\n                <template v-if="card.hasCustomCard && card.component">\n                    \n                    {% block sw_settings_payment_overview_list_card_custom_card %}\n                    <component\n                        :is="card.component"\n                        :key="`component-${card.id}`"\n                        :payment-methods="card.paymentMethods"\n                        @set-payment-active="togglePaymentMethodActive"\n                    />\n                    {% endblock %}\n                </template>\n\n                <template v-if="!card.hasCustomCard">\n                    \n                    {% block sw_settings_payment_overview_list_card_default %}\n                    <sw-payment-card\n                        :key="`default-${card.id}`"\n                        :payment-method="card.paymentMethod"\n                        @set-payment-active="togglePaymentMethodActive"\n                    />\n                    {% endblock %}\n                </template>\n\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_settings_payment_overview_empty_state %}\n            <sw-empty-state\n                v-if="isEmpty"\n                :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n            >\n                <template #default>\n                    {{ $tc(\'sw-empty-state.messageNoResultSublineBefore\') }}\n                    <router-link\n                        class="sw-empty-state__description-link"\n                        :to="{ name: \'sw.profile.index.searchPreferences\' }"\n                    >\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineLink\') }}\n                    </router-link>\n                    {{ $tc(\'sw-empty-state.messageNoResultSublineAfter\') }}\n                </template>\n            </sw-empty-state>\n            {% endblock %}\n\n        </sw-card-view>\n        {% endblock %}\n\n        \n        {% block sw_settings_payment_overview_sorting_modal %}\n        <sw-settings-payment-sorting-modal\n            v-if="showSortingModal"\n            :payment-methods="paymentMethods"\n            @modal-close="showSortingModal = false"\n            @modal-save="loadPaymentMethods"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[i.getByName("notification")],data:function(){return{paymentMethods:[],isLoading:!1,showSortingModal:!1}},metaInfo:function(){return{title:this.$createTitle()}},computed:{customCards:function(){var t;return null!==(t=Shopware.State.get("paymentOverviewCardState").cards)&&void 0!==t?t:[]},paymentMethodRepository:function(){return this.repositoryFactory.create("payment_method")},paymentMethodCriteria:function(){var t=new s(1,500);return t.addAssociation("media"),t.addSorting(s.sort("position","ASC")),t},isEmpty:function(){return!this.isLoading&&0===this.paymentMethods.length},paymentMethodCards:function(){if(0===this.paymentMethods.length)return[];var t=[],n=r(this.paymentMethods);return this.customCards.forEach((function(e){var a=n.filter((function(t){return e.paymentMethodHandlers.includes(t.formattedHandlerIdentifier)}));0!==a.length&&(t.push({id:a[0].id,hasCustomCard:!0,component:e.component,position:Math.min.apply(Math,o()(a.map((function(t){return t.position})))),positionId:e.positionId,paymentMethods:a}),n=n.filter((function(t){return!e.paymentMethodHandlers.includes(t.formattedHandlerIdentifier)})))})),t.push.apply(t,o()(n.map((function(t){return{id:t.id,hasCustomCard:!1,paymentMethod:t,position:t.position,positionId:""}})))),t.sort((function(t,n){return t.position-n.position}))}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadPaymentMethods()},loadPaymentMethods:function(){var t=this;this.isLoading=!0,this.paymentMethodRepository.search(this.paymentMethodCriteria).then((function(n){t.paymentMethods=n})).finally((function(){t.isLoading=!1}))},onChangeLanguage:function(t){Shopware.State.commit("context/setApiLanguageId",t),this.loadPaymentMethods()},togglePaymentMethodActive:function(t){var n=this,e=this.paymentMethods.find((function(n){return n.id===t.id}));e&&(e.active=t.active,this.paymentMethodRepository.save(e).then((function(){var t,a;n.loadPaymentMethods(),n.showActivationSuccessNotification(null!==(t=null===(a=e.translated)||void 0===a?void 0:a.name)&&void 0!==t?t:"",e.active)})).catch((function(){var t,a;n.showActivationErrorNotification(null!==(t=null===(a=e.translated)||void 0===a?void 0:a.name)&&void 0!==t?t:"",e.active),n.$nextTick((function(){e.active=!e.active}))})))},showActivationSuccessNotification:function(t,n){var e=n?this.$tc("sw-settings-payment.overview.notification.activationSuccess",0,{name:t}):this.$tc("sw-settings-payment.overview.notification.deactivationSuccess",0,{name:t});this.createNotificationSuccess({message:e})},showActivationErrorNotification:function(t,n){var e=n?this.$tc("sw-settings-payment.overview.notification.activationError",0,{name:t}):this.$tc("sw-settings-payment.overview.notification.deactivationError",0,{name:t});this.createNotificationError({message:e})}}})},YMUB:function(t,n,e){},"p+G8":function(t,n,e){var a=e("YMUB");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e("P8hj").default)("67a306a8",a,!0,{})}}]);
//# sourceMappingURL=88c45fa736d19de55e31.js.map