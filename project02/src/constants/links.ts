import { ListType } from '@/interface/list';

interface LinkType {
  path: `/${ListType}`;
  name: ListType;
}
/** header의 links에서 노출해주는 상수 */
export const headerLinks: LinkType[] = [
  {
    path: '/top',
    name: 'top',
  },
  {
    path: '/new',
    name: 'new',
  },
  {
    path: '/ask',
    name: 'ask',
  },
  {
    path: '/jobs',
    name: 'jobs',
  },
];
