import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction('login');
const logout = createAction('logout');

export const arshebreducer = createReducer({
  User_id: localStorage.getItem("ArshebUser") ? localStorage.getItem("ArshebUser") : "",
}, (builder) => {
  builder.addCase(login, (state,payload) => {
    console.log(payload)
    state.User_id = payload.id;
    localStorage.setItem("ArshebUser", state.User_id);
  });

  builder.addCase(logout, (state) => {
    state.User_id = "";
    localStorage.setItem("ArshebUser", state.User_id);
  });

});
