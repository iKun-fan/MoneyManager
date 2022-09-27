import {defineComponent} from "vue";
import {RouterView} from "vue-router";
import s from './Welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg'

export const Welcome = defineComponent({
    setup: (props, context) => {
        return () => <div class={s.wrapper}>
            <header>
                <img src={logo} alt="芝士logo"/>    {/*找图片*/}
                <h1>芝士名字</h1>
            </header>
            <main class={s.main}><RouterView/></main>
        </div>
    }
})
