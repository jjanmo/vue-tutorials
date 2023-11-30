import { createStore } from 'vuex';
import todos, { TodosState } from './modules/todos';
import filter, { FilterState } from './modules/filter';
import memory, { MemoryState } from './modules/memory';

const dev = process.env.NODE_ENV !== 'production';

export interface RootState {
  todos: TodosState;
  filter: FilterState;
  memory: MemoryState;
}

const store = createStore({
  modules: {
    todos,
    filter,
    memory,
  },
  strict: dev,
});

export default store;
