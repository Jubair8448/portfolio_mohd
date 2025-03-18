import axios from 'axios';

const API_URL = '/api/user';

// **Signup user**
const signup = async (userData) => {
    const response = await axios.post(API_URL + '/signup', userData);

    if (response.data) {
        localStorage.setItem('profile', JSON.stringify(response.data));
    }

    return response.data;
};

// **Signin user**
const signin = async (userData) => {
    const response = await axios.post(API_URL + '/signin', userData);

    if (response.data) {
        localStorage.setItem('profile', JSON.stringify(response.data));
    }

    return response.data;
};

// **Forgot password**
const forgotPassword = async (email) => {
    const response = await axios.post(API_URL + '/forgot', { email }); // Ensure email is wrapped inside an object
    return response.data;
};

// **Reset password**
const resetPassword = async (data, token) => {
    const response = await axios.post(API_URL + '/reset', data, {
        headers: { Authorization: `Bearer ${token}` }
    });

    return response.data;
};

// **Logout user**
const logout = async () => {
    await axios.get(API_URL + '/logout');
    localStorage.removeItem('profile');
    return { message: "User logged out successfully" };
};

const authService = {
    signup,  // ✅ Added signup function
    signin,
    logout,
    forgotPassword,
    resetPassword,
};

export default authService;
