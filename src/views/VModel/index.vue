<template>
    <div class="VModel-page">
        <CheckEdit 
            v-for="task in tasksRef" 
            :key="task.id"
            v-model="task.sell"
            v-model:text.trim='task.title'
        />
    </div>
</template>

<script>
import CheckEdit from '@/components/CheckEditor.vue';

import { ref } from 'vue';
export default {
    components:{
        CheckEdit
    },
    setup(){
        const tasksRef = ref([
            {id: 1,sell: true,title: "iphone12",},
            { id: 2, sell: false, title: "xiaomi" },
            { id: 3, sell: true, title: "huawei" },
            { id: 4, sell: true, title: "vivo" },
        ]);

        return {
            tasksRef
        }
    }
}
</script>