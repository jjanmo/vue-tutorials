import axios from 'axios';
import { Champion } from '@/store/modules/common';
import { CHAMPION_API_VERSION } from '@/constants/champion';

export interface ChampionsResponse {
  type: string;
  format: string;
  version: string;
  data: Champion[];
}

export const fetchChampions = () => {
  return axios
    .get<ChampionsResponse>(`http://ddragon.leagueoflegends.com/cdn/${CHAMPION_API_VERSION}/data/ko_KR/champion.json`)
    .then((res) => res.data);
};
