import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Timers from "./timer/Timers";

function App() {
  return (
    <Provider store={store}>
      <Timers />
    </Provider>
  );
}

export default App;
