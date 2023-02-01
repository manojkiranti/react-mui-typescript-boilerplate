import { createSelector, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import AuthService from "../../services/authService";
import {GetErrorMessage} from "../../utils/GetErrorMessage";

import {getUser , setUser, removeUser} from "../../utils/storage";
const user = getUser();

import userPayload from "../../types/user.type";
import userStore from "../../types/userstore.type";

export const login = createAsyncThunk("auth/login",
    async(userData:userPayload, thunkAPI) => {
        try {
            const data = await AuthService.login(userData);
            // throw new Error("custome error")
            setUser(data)
            return data;
        } catch (error:unknown) {        
            console.log('error', error)  
            const message = GetErrorMessage(error)  
            console.log('message', message)  
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logout = createAsyncThunk("auth/logout",
    async(payload,thunkAPI) => {
        try {
            const data = await AuthService.logout();
            // throw new Error("custome error")
            removeUser()
            return data;
        } catch (error:unknown) {        
            const message = GetErrorMessage(error)   
            return thunkAPI.rejectWithValue(message)
        }
    }
)

interface AuthState {
    user: userStore|string|null;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
    isLoggedIn: boolean;
}

const initialAuthState: AuthState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    isLoggedIn: user ? true : false
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
        },
        addUser: (state, action: PayloadAction<userStore>) => {
                state.user = action.payload
          },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action:PayloadAction<any>) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.message = action.payload;
        });
        builder.addCase(login.rejected, (state, action:PayloadAction<any>) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.isError = true;
            state.isSuccess = false;
            state.user = null;
            state.message = action.payload.error.message;
        });

        builder.addCase(logout.fulfilled, (state) => {
            state.user = null;
            state.isError = false;
            state.isSuccess = false;
            state.isLoggedIn = false;
            state.message = "";
            state.isLoggedIn = false;
        })
    }
});

export const { resetLogin, addUser} = authSlice.actions;
export default authSlice;
