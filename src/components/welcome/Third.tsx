import {defineComponent} from "vue";
import s from './First.module.scss'
import {RouterLink} from "vue-router";
import chart from '../../assets/icons/chart.svg'

export const Third = defineComponent({
    setup: (props, context) => {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img class={s.icon} src={chart} alt="芝士图片"/>
                    <h2>整点字<br/>再整点字</h2>
                </div>
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/4">下一页</RouterLink>
                    <RouterLink to="start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})