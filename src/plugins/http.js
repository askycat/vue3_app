import axios from "../utils/axios";
export default function (app){
    app.provide('http',axios)
}