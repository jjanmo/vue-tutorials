import { Champion } from '@/store/modules/common';
import axios from 'axios';

export interface ChampionsResponse {
  type: string;
  format: string;
  version: string;
  data: Champion[];
}

export const fetchChampions = () => {
  return axios
    .get<ChampionsResponse>(`http://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json`)
    .then((res) => res.data);
};
