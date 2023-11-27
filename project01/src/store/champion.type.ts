export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
}
export interface Champions {
  [key: string]: Champion;
}
export interface ChampionsResponse {
  type: string;
  format: string;
  version: string;
  data: Champions;
}

export type ChampionImageBaseUrl = 'https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/';

export interface SelectedChampion {
  id: string;
  name: string;
  image: `${ChampionImageBaseUrl}${string}`; // TODO 타입을 template literal type으로 만들 필요가 있을까??
}
