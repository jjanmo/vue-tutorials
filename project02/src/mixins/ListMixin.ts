import { ListType } from '@/interface/list';
import { listModule } from '@/store';
import { Component, Vue } from 'vue-property-decorator';

@Component
export class ListMixin extends Vue {
  get list() {
    return listModule.list;
  }

  created() {
    const listType = this.$route.path.slice(1);
    listModule.fetchList(listType as ListType);
  }
}
