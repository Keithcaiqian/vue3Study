import { ref, computed } from 'vue';

export default function useEditTodo(todosRef) {
    const editTodoRef = ref(null); //正在编辑的todo
    let originTitle = null; //原来的todo
    // 编辑todo的函数
    const editTodo = (todo) => {
        editTodoRef.value = todo;
        originTitle = todo.title;
    }

    // 完成编辑
    const doneEdit = (todo) => {
        editTodoRef.value = null;
        const title = todo.title.trim();
        if(title){
            todo.title = title;
        }else{
            // 删除
            const index = todosRef.value.indexOf(todo);
            if (index >= 0) {
                todosRef.value.splice(index, 1);
            }
        }
    }

    // 取消编辑
    const cancelTodoEdit = (todo) => {
        editTodoRef.value = null;
        todo.title = originTitle;
    }

    // 全选的编辑
    const allDoneRef = computed({
        get() {
            return todosRef.value.filter(it => !it.completed).length === 0;
        },
        set(checked) {
            todosRef.value.forEach(it => it.completed = checked);
        }
    });

    return {
        editTodoRef,
        editTodo,
        doneEdit,
        cancelTodoEdit,
        allDoneRef
    }
}