export interface Card {
  target: HTMLElement;
  id: string;
}

export interface MemoryState {
  card: Card | null;
  totalCards: Card[];
  flippedCount: number;
  isStarted: boolean;
}

const state: MemoryState = {
  card: null,
  totalCards: [],
  flippedCount: 0,
  isStarted: false,
};

const mutations = {
  addTotalCards: (state: MemoryState, payload: Card[]) => {
    state.totalCards.push(...payload);
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
    state.isStarted = false;
    state.flippedCount = 0;
    state.card = null;
    state.totalCards = [];
  },
};

const memory = {
  namespaced: true,
  state,
  mutations,
};

export default memory;
