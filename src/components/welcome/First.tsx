import s from './WelcomeLayout.module.scss'
import {RouterLink} from "vue-router";
import pig from '../../assets/icons/pig.svg';
import {WelcomeLayout} from './WelcomeLayout';

export const First = () => {
    return (
        <WelcomeLayout>
            {{
                icon: () => <img src={pig} alt="芝士猪猪"/>,
                title: () => <h2>整一行字<br/>再整一行字</h2>,
                buttons: () => <>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/2">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </>
            }}</WelcomeLayout>
    )
}

First.displayName = 'First'