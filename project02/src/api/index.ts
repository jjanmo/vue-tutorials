import axios from 'axios';
import { Item, ListType } from '@/interface/list';
import { User } from '@/interface/user';

const API = axios.create({
  baseURL: 'https://api.hnpwa.com/v0',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

const listTypeMap = {
  top: 'news',
  new: 'newest',
  ask: 'ask',
  jobs: 'jobs',
};

export function getList(listType: ListType) {
  return API.get<Item[]>(`/${listTypeMap[listType]}/1.json`);
}

export function getUser(name: string) {
  return API.get<User>(`/user/${name}.json`);
}
