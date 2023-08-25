/** 加载组件 */
export function loadComponents(app) {
    const modules = import.meta.glob('@/components/**/*.vue', { eager: true });

    for (const path in modules) {
        console.log(path)
        //const name = path.match(/\/(\w+)\.vue$/)?.[1];
        const match = path.match(/\/([^/]+)\/index\.vue$/);
        const name = match?.[1];
        if (name) {
            const component = modules[path];
            app.component(name, component.default || component);
        }
    }
}