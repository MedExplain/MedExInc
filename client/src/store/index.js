import { configureStore } from "@reduxjs/toolkit";

import articles from "./articles";

export const store = configureStore({
  reducer: {
    articles,
  },
});
