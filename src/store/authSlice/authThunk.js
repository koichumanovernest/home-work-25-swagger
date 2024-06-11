import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authPost = createAsyncThunk(
	"auth/postAuth",
	async ({ newDate, navigate }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${BASE_URL}/api/auth/signUpForClient`,
				newDate
			);
			navigate("/signIn");
      return response.data
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
export const signInPost = createAsyncThunk(
	"auth/signInPost",
	async ({ newData, navigate }, { rejectWithValue }) => {
		try {
			await axios.post(`${BASE_URL}/api/auth/signIn`, newData);
			navigate("/");
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
