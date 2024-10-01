export interface Card {
  target: HTMLElement;
  id: string;
}

export interface MemoryState {
  card: Card | null;
  totalCards: Card[];
  flippedCount: number;
  time: number;
  isStarted: boolean;
}

const state: MemoryState = {
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
