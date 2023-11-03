import { createStore } from 'vuex';
import todos, { TodosState } from './modules/todos';
import filter, { FilterState } from './modules/filter';

const dev = process.env.NODE_ENV !== 'production';

export interface RootState {
  todos: TodosState;
  filter: FilterState;
}

const store = createStore({
  modules: {
    todos,
    filter,
  },
  strict: dev,
});

export default store;
