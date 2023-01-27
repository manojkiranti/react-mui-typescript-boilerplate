import { createSelector, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import AuthService from "../../services/authService";

import userPayload from "../../types/user.type";

export const login = createAsyncThunk("auth/login",
    async(userData:userPayload, thunkAPI) => {
        try {
            const data = await AuthService.login(userData);
            // throw new Error("custome error")
            return { user: data, message: `Welcome ${data.userKYC.name}`};
        } catch (error) {            
            return thunkAPI.rejectWithValue(error)
        }
    }
)

interface User {
    name: string;
    mobile: string;
    token: string
}

interface AuthState {
    user: User|null;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
    isLoggedIn: boolean;
}

const initialAuthState: AuthState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState:initialAuthState,
    reducers:{
        resetLogin:(state) => {
            state.user = null;
            state.isError = false;
            state.isSuccess = false;
            state.isLoggedIn = false;
            state.message = "";
            state.isLoggedIn = false;
        }
    }
});

export const { resetLogin } = authSlice.actions;
export default authSlice;
