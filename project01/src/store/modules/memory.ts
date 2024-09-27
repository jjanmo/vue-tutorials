import { ActionContext } from 'vuex';
import { fetchChampions } from '@/api';
import { TOTAL_CARDS } from '@/constants/champion';
import { select, shuffle } from '@/utils';
import { Champion } from '../champion.type';
import { RootState } from '..';

export interface Card {
  target: HTMLElement;
  id: string;
}

export interface MemoryState {
  champions: Champion[] | null;
  card: Card | null;
  totalCards: Card[];
  flippedCount: number;
  time: number;
  isStarted: boolean;
}

const state: MemoryState = {
  champions: null,
  card: null,
  totalCards: [],
  flippedCount: 0,
  time: 0,
  isStarted: false,
};

const mutations = {
  setChampions: (state: MemoryState, payload: Champion[]) => {
    state.champions = payload;
  },
  addCards: (state: MemoryState, payload: Card[]) => {
    state.totalCards.push(...payload);
  },
  setCard: (state: MemoryState, payload: Card) => {
    state.card = payload;
  },
  resetCard: (state: MemoryState) => {
    state.card = null;
  },
  addFlippedCount: (state: MemoryState) => {
    state.flippedCount++;
  },
  setTime(state: MemoryState, payload: number) {
    state.time = payload;
  },
  /** 초기화 후 게임시작 */
  startGame(state: MemoryState) {
    //card 초기화
    state.card = null;
    state.totalCards.forEach((card) => card.target.classList.remove('is-flipped'));
    state.totalCards = [];

    state.flippedCount = 0; //flippedCount 초기화
    state.time = 0; //time 초기화

    // game start
    state.isStarted = true;
  },
};

const actions = {
  getChampions: async (context: ActionContext<MemoryState, RootState>) => {
    const { data } = await fetchChampions();
    const _champions = select(Object.values(data.data), TOTAL_CARDS / 2);
    const champions = [..._champions, ...shuffle(_champions)];
    context.commit('setChampions', champions);
  },
};

const memory = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default memory;
