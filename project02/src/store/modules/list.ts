import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators';
import { ListItem, ListType } from '@/interface/list';
import { getList } from '@/api';

@Module({ name: 'list', namespaced: true, stateFactory: true })
export class ListModule extends VuexModule {
  list: ListItem[] = [];
  @Mutation
  setList(data: ListItem[]) {
    this.list = data;
  }

  @Action({ rawError: true })
  async fetchList(listType: ListType) {
    const data = await getList(listType).then((res) => res.data);
    this.setList(data);
  }
}
