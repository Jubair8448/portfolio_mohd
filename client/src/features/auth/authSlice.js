import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('profile')) || { isLoggedOut: true, user: null };

const initialState = {
    user,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// **Signup user**
export const signup = createAsyncThunk('auth/signup', async (userData, thunkAPI) => {
    try {
        return await authService.signup(userData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// **Signin user**
export const signin = createAsyncThunk('auth/signin', async (userData, thunkAPI) => {
    try {
        return await authService.signin(userData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// **Forgot password**
export const forgotPassword = createAsyncThunk('auth/forgot', async (email, thunkAPI) => {
    try {
        return await authService.forgotPassword(email);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// **Reset password**
export const resetPassword = createAsyncThunk('auth/reset', async ({ data, token }, thunkAPI) => {
    try {
        return await authService.resetPassword(data, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// **Logout user**
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await authService.logout();
        return { isLoggedOut: true, user: null };
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.user = { isLoggedOut: true, user: null };
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            // Signup
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            
            // Signin
            .addCase(signin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(signin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            
            // Forgot Password
            .addCase(forgotPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            
            // Reset Password
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            
            // Logout
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.user = { isLoggedOut: true, user: null };
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
