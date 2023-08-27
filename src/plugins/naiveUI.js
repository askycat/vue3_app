import {
    // create naive ui
    create,
    // component
    NButton,
    NSpace,
} from 'naive-ui'

const naive = create({
    components: [NButton,NSpace]
})

// import naive from "naive-ui"
export default function (app){
    app.use(naive)
}
