import { getAsyncPage } from "../util";

const TodoList = getAsyncPage("../views/TodoList/index.vue");
const VModel = getAsyncPage("../views/VModel/index.vue");
const Comp = getAsyncPage("../views/Comp/index.vue");

export default [
  { path: "/todoList", component: TodoList },
  { path: "/vmodel", component: VModel },
  { path: "/comp", component: Comp },
];