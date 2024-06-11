import { createSlice } from "@reduxjs/toolkit";
import { authPost } from "./authThunk";

const initialState = {
	isAuth: localStorage.getItem("isAuth") === "true" || false,
	error: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(authPost.fulfilled, (state, action) => {
			console.log(action, "action");
			localStorage.setItem("isAuth", "true");
			localStorage.setItem("token", action.payload.data.token);
			state.isAuth = true;
		});
		builder.addCase(authPost.rejected, (state, action) => {
			state.error = action.payload;
		});
		builder.addCase(authPost.pending, (state, action) => {
			state.error = action.payload;
		});
	},
});
