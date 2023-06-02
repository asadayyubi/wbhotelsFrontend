import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router";
import MaterialUi from "./styles/MaterialUi";
import { LoginProvider } from "./Contexts/LoginContext"
import { BookingProvider } from "./Contexts/BookingContext";
// import {app} from './airpay/responsefromairpay';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MaterialUi>
          <LoginProvider >
            <BookingProvider>
              <Router />
            </BookingProvider>
          </LoginProvider>
        </MaterialUi>
      </Provider>
    </div>
  );
}

export default App;
