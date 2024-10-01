import { ChampionsResponse } from '@/store/champion.type';
import axios from 'axios';

export const fetchChampions = () => {
  return axios
    .get<ChampionsResponse>(`http://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json`)
    .then((res) => res.data);
};
