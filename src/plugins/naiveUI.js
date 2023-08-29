// 按需引入
// import {
//     // create naive ui
//     create,
//     // component
//     NButton,
//     NSpace,
// } from 'naive-ui'

// const naive = create({
//     components: [NButton,NSpace]
// })

//全部导入
import naive  from 'naive-ui'

// import naive from "naive-ui"
export default function (app){
    app.use(naive)
}