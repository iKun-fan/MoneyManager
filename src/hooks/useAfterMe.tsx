import {useMeStore} from "../stores/useMeStore";
import {onMounted} from "vue";

export const useAfterMe = (fn: () => void) => {
    const meStore = useMeStore()
    onMounted(() => {
        meStore.mePromise!.then(fn, ()=> undefined)
    })
}