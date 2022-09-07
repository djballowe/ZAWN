import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
};

const reducer = (state = initialState, action) => {
  return {
    total: 0,
  };
};

const store = configureStore({reducer});

export default store;
