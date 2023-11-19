import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators';
import { Item, ListType } from '@/interface/list';
import { getList } from '@/api';

@Module({ name: 'list', namespaced: true, stateFactory: true })
export class ListModule extends VuexModule {
  listType: ListType | null = null;
  list: {
    top: Item[];
    new: Item[];
    ask: Item[];
    jobs: Item[];
  };

  @Mutation
  setListType(type: ListType) {
    this.listType = type;
  }
  @Mutation
  setList(data: Item[]) {
    if (this.listType) this.list[this.listType] = data;
  }

  @Action({ rawError: true })
  async fetchList() {
    if (this.listType) {
      const data = await getList(this.listType).then((res) => res.data);
      this.setList(data);
    }
  }
}
