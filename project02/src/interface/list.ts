export interface Item {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export type ListType = 'top' | 'new' | 'ask' | 'jobs';
export interface ListState {
  listType: ListType | null;
  list: Record<ListType, Item[]>;
}
