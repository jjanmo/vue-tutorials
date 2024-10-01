import { createStore } from 'vuex';
import todos, { TodosState } from './modules/todos';
import filter, { FilterState } from './modules/filter';
import memory, { MemoryState } from './modules/memory';
import modal, { ModalState } from './modules/modal';
import common, { CommonState } from './modules/common';

const dev = process.env.NODE_ENV !== 'production';

export interface RootState {
  common: CommonState;
  todos: TodosState;
  filter: FilterState;
  memory: MemoryState;
  modal: ModalState;
}

const store = createStore({
  modules: {
    common,
    todos,
    filter,
    memory,
    modal,
  },
  strict: dev,
});

export default store;
