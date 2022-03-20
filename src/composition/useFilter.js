import { ref, onMounted, onUnmounted, computed } from 'vue';
import { filter } from '../util/todoStorage';

const validHash = ['all','active','completed']; //筛选条件字典

export default function useFilter(todosRef) {
    const visibilityRef = ref('all'); //筛选条件 默认是all
    // hash变化的时候根据条件筛选列表的内容
    const hashChange = () => {
        const hash = location.hash.replace(/#\/?/, "");
        if (validHash.includes(hash)) {
            //有效的hash
            visibilityRef.value = hash;
        } else {
            location.hash = "";
            visibilityRef.value = "all";
        } 
    };

    // 1. 组件挂载完成的生命周期函数
    onMounted(() => {
        window.addEventListener('hashchange',hashChange);
    });

    // 2. 组件销毁过后的生命周期函数
    onUnmounted(() => {
        window.removeEventListener('hashchange',hashChange);
    })

    // 根据条件筛选出列表
    const filteredTodosRef = computed(() => {
        return filter(todosRef.value, visibilityRef.value);
    })

    // 未完成任务的数量
    const remainingRef = computed(() => {
        console.log(filter(todosRef.value, 'active'))
        return filter(todosRef.value, 'active').length;
    })

    // 完成任务的数量
    const completedRef = computed(() => {
        return filter(todosRef.value, "completed").length;
    });

    return {
        visibilityRef,
        filteredTodosRef,
        remainingRef,
        completedRef
    }
}