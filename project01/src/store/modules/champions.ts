import { ActionContext } from 'vuex';
import { RootState } from '..';

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
export type ChampionId = keyof Champions;
export interface ChampionsResponse {
  type: string;
  format: string;
  version: string;
  data: Champions;
}
export interface ChampionsState {
  ids: ChampionId[];
  data: Champions | null;
}
const state: ChampionsState = {
  ids: [],
  data: null,
};
const mutations = {
  setChampions: (state: ChampionsState, data: Champions) => {
    state.data = data;
  },
  setChampionIds: (state: ChampionsState, ids: ChampionId[]) => {
    state.ids = ids;
  },
};
const actions = {
  fetchChampions: async (context: ActionContext<ChampionsState, RootState>) => {
    const response = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/13.21.1/data/ko_KR/champion.json`
    );
    const result: ChampionsResponse = await response.json();
    const data = result.data;
    context.commit('setChampions', data);

    const ids = Object.keys(data);
    context.commit('setChampionIds', ids);
  },
};
const getters = {};

const todos = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default todos;
