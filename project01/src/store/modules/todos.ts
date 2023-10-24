import { RootState } from '..';

export interface Todo {
  id: string;
  content: string;
  done: boolean;
}
export interface TodosState {
  data: Todo[];
}

const state: TodosState = {
  data: [],
};

const mutations = {
  addTodo: (state: TodosState, payload: { todo: Todo }) => {
    state.data.push(payload.todo);
  },
  deleteTodo: (state: TodosState, id: string) => {
    state.data = state.data.filter((todo) => todo.id !== id);
  },
  toggleStatus: (state: TodosState, id: string) => {
    const finded = state.data.find((todo) => todo.id === id) as Todo;
    finded.done = !finded.done;
  },
  toggleAll: (state: TodosState, checked: boolean) => {
    state.data = state.data.map((todo) => ({
      ...todo,
      done: checked,
    }));
  },
};

const getters = {
  leftTodos: (_: unknown, getters: any) => {
    return (getters.filteredTodos as Todo[]).filter((todo) => !todo.done)
      .length;
  },
  filteredTodos: (state: TodosState, _: unknown, rootState: RootState) => {
    const filterType = rootState.filter.type;
    if (filterType === 'done') return state.data.filter((todo) => todo.done);
    if (filterType === 'todo') return state.data.filter((todo) => !todo.done);
    return state.data;
  },
};

// const actions = {}; // 비동기처리인 경우에 사용

const todos = {
  namespaced: true,
  state,
  mutations,
  getters,
};

export default todos;
