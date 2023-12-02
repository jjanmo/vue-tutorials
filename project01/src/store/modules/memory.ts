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
  isStarted: boolean;
}

const state: MemoryState = {
  champions: null,
  card: null,
  totalCards: [],
  flippedCount: 0,
  isStarted: false,
};

const mutations = {
  setChampions: (state: MemoryState, payload: Champion[]) => {
    state.champions = payload;
  },
  addCards: (state: MemoryState, payload: Card[]) => {
    state.totalCards.push(...payload);
  },
  addFlippedCount: (state: MemoryState) => {
    state.flippedCount++;
  },
  setCard: (state: MemoryState, payload: Card) => {
    state.card = payload;
  },
  resetCard: (state: MemoryState) => {
    state.card = null;
  },
  startGame(state: MemoryState) {
    state.isStarted = true;
  },
  initializeGame(state: MemoryState) {
    state.flippedCount = 0;
    state.card = null;
    state.totalCards.forEach((card) => card.target.classList.remove('is-flipped'));
    state.totalCards = [];
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
