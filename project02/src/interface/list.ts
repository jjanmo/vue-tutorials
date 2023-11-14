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

export type ListType = 'new' | 'newest' | 'ask' | 'jobs';

export interface ListState {
  news: Item[]; // 핫한 뉴스들 순으로
  newest: Item[]; // 새로운 뉴스 순으로
  ask: Item[];
  jobs: Item[];
}
