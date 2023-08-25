/** 加载插件 */
export function loadPulgins(app) {
    const modules = import.meta.glob('@/plugins/*.js')
    for (const path in modules) {
        modules[path]().then(module => {
            module.default(app)
        })
    }
}