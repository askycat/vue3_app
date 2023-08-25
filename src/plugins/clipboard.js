// https://clipboardjs.com/
import clipboard from "clipboard";

export default function (app){
    app.provide('clipboard',clipboard)
}
// to use
// import { inject } from 'vue'
// let clipboard=inject('clipboard');
// new clipboard('.btn')