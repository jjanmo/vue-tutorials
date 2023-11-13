import Vue from 'vue';
import Vuex from 'vuex';
import ListModule from './modules/list';

Vue.use(Vuex);

export type RootState = {
  listModule: ListModule;
};

const storeOption = {
  modules: {
    listModule: ListModule,
  },
  strict: process.env.NODE_ENV !== 'production',
};

const createStore = () => new Vuex.Store<RootState>(storeOption);
const store = createStore();

export default store;
