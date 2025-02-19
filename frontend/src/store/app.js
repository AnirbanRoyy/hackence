import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/user";
import themeSlice from "../features/theme/theme";

export const store = configureStore({
    reducer: {
        user: userSlice,
        theme: themeSlice,
    },
});
