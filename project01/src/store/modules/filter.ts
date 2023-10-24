export type FilterType = 'all' | 'todo' | 'done';

export interface FilterState {
  type: FilterType;
}

const state: FilterState = {
  type: 'all',
};

const mutations = {
  changeFilter: (state: FilterState, type: FilterType) => {
    state.type = type;
  },
};

const filter = {
  namespaced: true,
  state,
  mutations,
};

export default filter;
