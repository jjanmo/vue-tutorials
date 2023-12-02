export interface ModalState {
  showModal: boolean;
}

const state: ModalState = {
  showModal: false,
};

const mutations = {
  openModal(state: ModalState) {
    state.showModal = true;
  },
  closeModal(state: ModalState) {
    state.showModal = false;
  },
};

const modal = {
  namespaced: true,
  state,
  mutations,
};

export default modal;
