import s from './WelcomeLayout.module.scss'
import {RouterLink} from "vue-router";
import clock from '../../assets/icons/clock.svg'
import {WelcomeLayout} from "./WelcomeLayout";

export const Second = () => {
    return (
        <WelcomeLayout>
            {{
                icon: () => <img class={s.icon} src={clock} alt="芝士闹钟"/>,
                title: () => <h2>整一行字<br/>再整一行字</h2>,
                buttons: () => <>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/3">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </>
            }}
        </WelcomeLayout>
    )
}

Second.displayName = 'Second'