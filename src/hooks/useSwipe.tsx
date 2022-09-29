import {onMounted, Ref} from "vue";

type Point = {
    x: number
    y: number
}

export const useSwipe = (element: Ref<HTMLElement | null>) => {
    onMounted(() => {
        element.value?.addEventListener('touchstart', e => {
            console.log('start')
        })
        element.value?.addEventListener('touchmove', e=>{
            console.log('move')
        })
        element.value?.addEventListener('touchend', e=>{
            console.log('end')
        })
    })

}