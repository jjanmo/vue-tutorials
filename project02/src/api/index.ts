import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.hnpwa.com/v0',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export function getNews() {
  return API.get(`/news/1.json`);
}
export function getNewest() {
  return API.get(`/newest/1.json`);
}
export function getAsk() {
  return API.get(`/ask/1.json`);
}
export function getJobs() {
  return API.get(`/jobs/1.json`);
}
