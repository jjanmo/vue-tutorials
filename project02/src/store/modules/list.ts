import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators';
import { Item, ListState, ListType } from '@/interface/list';
import { getAsk, getJobs, getNewest, getNews } from '@/api';

@Module({ name: 'list', namespaced: true, stateFactory: true })
export class ListModule extends VuexModule {
  news: Item[] = [];
  newest: Item[] = [];
  ask: Item[] = [];
  jobs: Item[] = [];

  @Mutation
  setNews(data: ListState['news']) {
    this.news = data;
  }
  @Mutation
  setNewest(data: ListState['newest']) {
    this.newest = data;
  }
  @Mutation
  setAsk(data: ListState['ask']) {
    this.ask = data;
  }
  @Mutation
  setJobs(data: ListState['jobs']) {
    this.jobs = data;
  }

  @Action({ rawError: true })
  async fetchList(listType?: string) {
    const data = await getNews().then((res) => res.data);
    this.setNews(data);
    //   console.log('🤬', listType);
    //   switch (listType) {
    //     case 'news': {
    //       const data = await getNewest().then((res) => res.data);
    //       this.setNews(data);
    //       return;
    //     }
    //     case 'ask': {
    //       const data = await getAsk().then((res) => res.data);
    //       this.setAsk(data);
    //       return;
    //     }
    //     case 'jobs': {
    //       const data = await getJobs().then((res) => res.data);
    //       this.setJobs(data);
    //       return;
    //     }
    //     default: {
    //       const data = await getNews().then((res) => res.data);
    //       this.setNewest(data);
    //       return;
    //     }
    //   }
  }
}
