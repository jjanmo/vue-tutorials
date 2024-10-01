import { ActionContext } from 'vuex';
import { RootState } from '..';
import { fetchChampions } from '@/api';

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

export interface CommonState {
  champions: Champion[] | null;
}

const state: CommonState = {
  champions: null,
};

const mutations = {
  setChampions: (state: CommonState, payload: Champion[]) => {
    state.champions = payload;
  },
};

const actions = {
  getChampions: async (context: ActionContext<CommonState, RootState>) => {
    const { data } = await fetchChampions();
    context.commit('setChampions', data);
  },
};

const common = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default common;
