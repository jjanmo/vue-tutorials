export interface ListItem {
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
  list: ListItem[];
}

export interface DetailedItem {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: DetailedItem[];
  level: number;
  comments_count: number;
}
