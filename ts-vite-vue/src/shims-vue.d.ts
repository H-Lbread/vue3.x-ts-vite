declare module "*.css"{
    const classes : {[key:string]:string}
    export default classes;
}
// 如果引入vue文件报错的话
declare module '*.vue'{
    import { defineComponent,FunctionalComponent } from "vue"
    const component:ReturnType<typeof defineComponent> | FunctionalComponent;
    export default component;
}