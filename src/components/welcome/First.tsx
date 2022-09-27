import {defineComponent, isProxy} from "vue";
import s from './First.module.scss'
import {RouterLink} from "vue-router";
import pig from '../../assets/icons/pig.svg';
import {Test} from './test';

export const First = defineComponent({
    setup: (props, context) => {
        const slots = {
            icon: () => <span>icon</span>,
            title: () => 'hi',
            buttons: <><button>+1</button></>
        }
        return () => (
            <Test v-slots={slots}></Test>
        )
    }
})