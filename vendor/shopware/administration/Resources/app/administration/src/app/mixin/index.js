/**
 * @package admin
 */

// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
export default () => {
    const context = require.context('./', false, /(?<!index)(?<!\.spec)(?<!spec\.vue3\.)\.j|ts$/);
    return context.keys().forEach(item => context(item));
};
