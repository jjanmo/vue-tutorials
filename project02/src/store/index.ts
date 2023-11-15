import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { ListModule } from './modules/list';

Vue.use(Vuex);

export interface RootState {
  list: ListModule;
}

/* 모듈의 키값 === 모듈의 name */
const storeOption: StoreOptions<RootState> = {
  modules: {
    list: ListModule,
  },
  strict: process.env.NODE_ENV !== 'production',
};

const createStore = () => new Vuex.Store<RootState>(storeOption);
const store = createStore();

export * from './storeAccessor';
export default store;
