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
    case "NESTED-S":
      state.signupModal.closeAll = false;
      state.signupModal.nestedModal = !state.signupModal.nestedModal;
      return { ...state };
    case "ALL-S":
      state.signupModal.closeAll = true;
      state.signupModal.nestedModal = !state.signupModal.nestedModal;
      return { ...state };
      case "TOOGLE-SIGNUP":
        state.modalSignup = !state.modalSignup;
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
