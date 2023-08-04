// https://clipboardjs.com/
import clipboard from "clipboard";

export default function loadClipboardJS(app){
    app.provide('clipboard',clipboard)
    app.config.globalProperties.$clipboard=clipboard
}