/** 加载插件 */
export function loadPulgins(app) {
    const modules = import.meta.glob('@/plugins/*.js', { eager: true });
    for (const path in modules) {
        const plugin = modules[path];
        plugin.default(app);
    }
}