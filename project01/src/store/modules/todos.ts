import { v4 } from 'uuid';
export interface Todo {
  id: string;
  content: string;
  done: boolean;
}
export type FilterType = 'all' | 'todo' | 'done';
export interface TodosState {
  data: Todo[];
  filterType: FilterType;
}

const state: TodosState = {
  data: [
    {
      id: v4(),
      content: '자바스립트 공부하기',
      done: false,
    },
    {
      id: v4(),
      content: '뷰로 만들기',
      done: true,
    },
    {
      id: v4(),
      content: '헬로우 월드',
      done: false,
    },
  ],
  filterType: 'all',
};
const mutations = {};
const actions = {};
const getters = {};

const todos = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default todos;
