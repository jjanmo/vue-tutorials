import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators';
import { Item, ListType } from '@/interface/list';
import { getAsk, getJobs, getNewest, getNews } from '@/api';

@Module({ name: 'list', namespaced: true, stateFactory: true })
export class ListModule extends VuexModule {
  news: Item[] = [];
  newest: Item[] = [];
  ask: Item[] = [];
  jobs: Item[] = [];
  listType: ListType | null = null;

  @Mutation
  setNews(data: Item[]) {
    this.news = data;
  }
  @Mutation
  setNewest(data: Item[]) {
    this.newest = data;
  }
  @Mutation
  setAsk(data: Item[]) {
    this.ask = data;
  }
  @Mutation
  setJobs(data: Item[]) {
    this.jobs = data;
  }
  @Mutation
  setListType(type: ListType) {
    this.listType = type;
  }

  @Action({ rawError: true })
  async fetchList() {
    switch (this.listType) {
      case 'news': {
        const data = await getNews().then((res) => res.data);
        this.setNews(data);
        return;
      }
      case 'newest': {
        const data = await getNewest().then((res) => res.data);
        this.setNewest(data);
        return;
      }
      case 'ask': {
        const data = await getAsk().then((res) => res.data);
        this.setAsk(data);
        return;
      }
      case 'jobs': {
        const data = await getJobs().then((res) => res.data);
        this.setJobs(data);
        return;
      }
      default: {
        return;
      }
    }
  }
}
