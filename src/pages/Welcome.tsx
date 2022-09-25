import {defineComponent} from "vue";
import {RouterView} from "vue-router";
import s from './Welcome.module.scss'
//这里需要引入logo    import logo form '../assets/icons/xxx'


export const Welcome = defineComponent({
    setup: (props, context) => {
        return () => <div class={s.wrapper}>
            <header>
                芝士logo    {/*找图片*/}
                <h1>芝士名字</h1>
            </header>
            <main><RouterView/></main>
        </div>
    }
})