import { createStore } from 'vuex';
import todos from './modules/todos';

const dev = process.env.NODE_ENV !== 'production';

const store = createStore({
  modules: {
    todos,
  },
  strict: dev,
});

export default store;
