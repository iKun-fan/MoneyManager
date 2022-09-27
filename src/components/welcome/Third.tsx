import {defineComponent} from "vue";
import s from './WelcomeLayout.module.scss'
import {RouterLink} from "vue-router";
import chart from '../../assets/icons/chart.svg'
import {WelcomeLayout} from "./WelcomeLayout";

export const Third = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img class={s.icon} src={chart} alt="芝士图标"/>,
                    title: () => <h2>整一行文字<br/>再整一行文字</h2>,
                    buttons: () => <>
                        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                        <RouterLink to="/welcome/4">下一页</RouterLink>
                        <RouterLink to="/start">跳过</RouterLink>
                    </>
                }}
            </WelcomeLayout>
        )
    }
})