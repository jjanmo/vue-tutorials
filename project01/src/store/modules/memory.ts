import { shuffleAndSelect } from '@/utils';
import { Champion, CommonState } from './common';
import { TOTAL_CARDS } from '@/constants/memory';

export interface Card {
  target: HTMLElement;
  id: string;
}

export interface MemoryState {
  board: Champion[] | null;
  card: Card | null;
  totalCards: Card[];
  flippedCount: number;
  time: number;
  isStarted: boolean;
}

const state: MemoryState = {
  board: null,
  card: null,
  totalCards: [],
  flippedCount: 0,
  time: 0,
  isStarted: false,
};

const mutations = {
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

  // board 초기화
  setBoard(state: MemoryState, payload: { champions: CommonState['champions'] }) {
    const converted = Object.values(payload.champions || {});
    const baseCards: Champion[] = shuffleAndSelect<Champion>(converted, TOTAL_CARDS / 2);
    const pairCards: Champion[] = shuffleAndSelect<Champion>(baseCards);
    state.board = [...baseCards, ...pairCards];
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

const memory = {
  namespaced: true,
  state,
  mutations,
};

export default memory;
