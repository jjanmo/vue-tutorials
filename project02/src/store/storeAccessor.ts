import { getModule } from 'vuex-module-decorators';
import { RootState } from '.';
import { Store } from 'vuex';
import { ListModule } from './modules/list';

let listModule: ListModule;

export const initializeStoreModules = (store: Store<RootState>) => {
  listModule = getModule(ListModule, store);
};

export { listModule };
