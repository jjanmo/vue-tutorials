import { createStore } from 'vuex';
import todos, { TodosState } from './modules/todos';
import filter, { FilterState } from './modules/filter';
import memory, { MemoryState } from './modules/memory';
import modal, { ModalState } from './modules/modal';

const dev = process.env.NODE_ENV !== 'production';

export interface RootState {
  todos: TodosState;
  filter: FilterState;
  memory: MemoryState;
  modal: ModalState;
}

const store = createStore({
  modules: {
    todos,
    filter,
    memory,
    modal,
  },
  strict: dev,
});

export default store;
