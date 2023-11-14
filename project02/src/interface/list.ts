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

// TODO : 요거 사용하고 싶은데...
export type ListType = 'news' | 'newest' | 'ask' | 'jobs';
/**
 * - news: Item[] // 핫한 뉴스들 순으로
 * - newest: Item[] // 새로운 뉴스 순으로
 * - ask: Item[]
 * - jobs: Item[]
 */
export type ListState = Record<string, Item[]>;
