const LOCAL_KEY = "todomvc";

/**
 * 生成一个任务的唯一编号，时间戳+4位随机数
 */
export function generateId() {
  return Date.now() + Math.random().toString(16).substr(2, 4);
}

/**
 * 获取目前所有的任务
 */
export function fetch() {
  const result = localStorage.getItem(LOCAL_KEY);
  if (result) {
    return JSON.parse(result);
  }
  return [];
}

/**
 * 保存所有任务
 * @param {*} todos 任务列表
 */
export function save(todos) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}

/**
 * 筛选任务
 * @param {*} visibility 筛选条件
 */
export function filter(todos, visibility = "all") {
  if (visibility === "all") { //全部
    return todos;
  } else if (visibility === "active") {  //未完成的任务
    return todos.filter((it) => !it.completed);
  } else if (visibility === "completed") { //完成的任务
    return todos.filter((it) => it.completed);
  }
  throw new Error("invalid visibility value");
}
