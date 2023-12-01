export interface Pair {
  target: HTMLElement;
  id: string;
}

export interface MemoryState {
  pair: Pair | null;
  totalPairs: number;
  isStarted: boolean;
}

const state: MemoryState = {
  pair: null,
  totalPairs: 0,
  isStarted: false,
};

const mutations = {
  addTotalPair: (state: MemoryState) => {
    state.totalPairs++;
  },
  resetTotalPairs: (state: MemoryState) => {
    state.totalPairs = 0;
  },
  setPair: (state: MemoryState, payload: Pair) => {
    state.pair = payload;
  },
  resetPair: (state: MemoryState) => {
    state.pair = null;
  },
  setStarted(state: MemoryState) {
    state.isStarted = !state.isStarted;
  },
};

const memory = {
  namespaced: true,
  state,
  mutations,
};

export default memory;
