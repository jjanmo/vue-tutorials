import { createStore } from 'vuex';
import todos, { TodosState } from './modules/todos';

const debug = process.env.NODE_ENV !== 'production';

export interface RootState {
  todos: TodosState;
}

export default createStore({
  modules: {
    todos,
  },
  strict: debug,
});
