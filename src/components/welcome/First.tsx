import s from './WelcomeLayout.module.scss'
import {FunctionalComponent} from "vue";

export const First: FunctionalComponent = () => {
    return (
        <div class={s.card}>
            <svg>
                <use xlinkHref='#pig'></use>
            </svg>
        </div>
    )
}

First.displayName = 'First'