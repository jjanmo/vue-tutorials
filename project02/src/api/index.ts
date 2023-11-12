import axios from 'axios';
import { Item } from '@/interface/list';

const API = axios.create({
  baseURL: 'https://api.hnpwa.com/v0',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export function getNews() {
  return API.get<Item[]>(`/news/1.json`);
}
export function getNewest() {
  return API.get<Item[]>(`/newest/1.json`);
}
export function getAsk() {
  return API.get<Item[]>(`/ask/1.json`);
}
export function getJobs() {
  return API.get<Item[]>(`/jobs/1.json`);
}
