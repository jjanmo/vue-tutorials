export interface Pair {
  target: HTMLElement;
  id: string;
}

export interface MemoryState {
  pair: Pair | null;
  totalPairs: number;
}

const state: MemoryState = {
  pair: null,
  totalPairs: 0,
};

const mutations = {
  addTotalPair: (state: MemoryState) => {
    state.totalPairs++;
  },
  resetTotalPairs: (state: MemoryState) => {
    state.totalPairs = 0;
  },
  setPair: (state: MemoryState, payload: Pair) => {
    console.log('>>>', payload);
    state.pair = payload;
    console.log('!!!!', state.pair);
  },
  resetPair: (state: MemoryState) => {
    state.pair = null;
  },
};

const memory = {
  namespaced: true,
  state,
  mutations,
};

export default memory;
