import { ListType } from '@/interface/list';
import { listModule } from '@/store';
import { Component, Vue } from 'vue-property-decorator';

@Component
export class ListMixin extends Vue {
  isLoading = false;

  get list() {
    return listModule.list;
  }

  created() {
    try {
      this.isLoading = true;
      const listType = this.$route.path.slice(1);
      listModule.fetchList(listType as ListType);
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }
}
