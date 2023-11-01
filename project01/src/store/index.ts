import { createStore } from 'vuex';
import todos, { TodosState } from './modules/todos';
import filter, { FilterState } from './modules/filter';
import champions, { ChampionsState } from './modules/champions';

const dev = process.env.NODE_ENV !== 'production';

export interface RootState {
  todos: TodosState;
  filter: FilterState;
  champions: ChampionsState;
}

const store = createStore({
  modules: {
    todos,
    filter,
    champions,
  },
  strict: dev,
});

export default store;
