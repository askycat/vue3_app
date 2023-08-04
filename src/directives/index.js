import { loadPermisson } from "./permission"

/** 挂载自定义指令 */
export function loadDirectives(app) {
  loadPermisson(app)
}