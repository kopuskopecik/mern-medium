import AppRouter from "./router/Router";
import {Provider} from "react-redux";
import store from "./context/store";


function App() {
  return (
    <Provider store = {store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
