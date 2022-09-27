import {defineComponent} from "vue";
import s from './First.module.scss'
import {RouterLink} from "vue-router";
import clock from '../../assets/icons/clock.svg'

export const Second = defineComponent({
    setup: (props, context) => {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img class={s.icon} src={clock} alt="芝士图片"/>
                    <h2>整点字<br/>再整点字</h2>
                </div>
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/3">下一页</RouterLink>
                    <RouterLink to="start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})