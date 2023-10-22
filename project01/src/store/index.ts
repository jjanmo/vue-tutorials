import { createStore } from 'vuex';
import todos, { TodosState } from './modules/todos';

const dev = process.env.NODE_ENV !== 'production';

export interface RootState {
  todos: TodosState;
}

const store = createStore({
  modules: {
    todos,
  },
  strict: dev,
});

export default store;
