//权限指令  v-permission="user_view" 元素上
export function loadPermisson(app){
    app.directive("permission", {
        mounted(el, binding,vnode) {
            //当前页面权限
            let permissions =""// vnode.context.$route.meta.permissions
            //此操作需要的权限
            let permission = binding.expression
            //比对权限是否吻合
            if (!permissions.includes(permission)) {
                el.parentNode.removeChild(el)
                return false
            }
            return true
        }
    })
}