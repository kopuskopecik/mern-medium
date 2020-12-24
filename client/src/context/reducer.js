export default function reducer(state, action) {
  switch (action.type) {
    case "TOOGLE":
      state.modal = !state.modal;
      return { ...state };

    case "NESTED":
      state.secondModal.closeAll = false;
      state.secondModal.nestedModal = !state.secondModal.nestedModal;
      return { ...state };
    case "ALL":
      state.secondModal.closeAll = true;
      state.secondModal.nestedModal = !state.secondModal.nestedModal;
      return { ...state };
    case "TOKEN-UP":
      state.isLogged = true;
      return { ...state };
    case "TOKEN-DOWN":
      state.isLogged = false;
      return { ...state };
    default:
      return state;
  }
}
