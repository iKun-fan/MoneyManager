import {defineComponent} from "vue";
import s from './WelcomeLayout.module.scss'
import {RouterLink} from "vue-router";
import cloud from '../../assets/icons/cloud.svg'
import {WelcomeLayout} from "./WelcomeLayout";

export const Forth = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img class={s.icon} src={cloud} alt="芝士云"/>,
                    title: () => <h2>整一行文字<br/>再整一行文字</h2>,
                    buttons: () => <>
                        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                        <RouterLink to="/start">完成</RouterLink>
                        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    </>
                }}
            </WelcomeLayout>
        )
    }
})