
export default function useDeleteTodo(todosRef) {

    //删除单个todo 
    const deleteTodo = (todo) => {
        todosRef.value.splice(todosRef.value.indexOf(todo), 1);
    }

    // 删除完成的
    const deleteCompleted = () => {
        todosRef.value = todosRef.value.filter((it) => !it.completed);
    };

    return {
        deleteTodo,
        deleteCompleted
    }
}