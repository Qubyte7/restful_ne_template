import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

interface User {
    id: string;
    username: string;
    email: string;
    role: 'USER' | 'ADMIN';
}



interface AuthContextType {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isAdmin: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, role: 'USER' | 'ADMIN') => Promise<void>;
    logout: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const navigate = useNavigate();


    // Check if token is valid and set user on mount
    useEffect(() => {
        const validateToken = async () => {
            if (token) {
                try {
                    // // Decode the token to get user info
                    // interface DecodedToken {
                    //     username: string;
                    //     email: string;
                    //     role: 'USER' | 'ADMIN';
                    //     exp: number;
                    // }
                    interface DecodedToken {
                    userId: string;
                    exp: number;
                    iat: number;
                    }
                    const decoded: DecodedToken = jwtDecode(token);

                    // Check if token is expired
                    if (decoded.exp * 1000 < Date.now()) {
                        localStorage.removeItem('token');
                        setToken(null);
                        setUser(null);
                        return;
                    }

                    // Get user data from backend
                    const response = await api.get('/auth/me'); // You'll need to create this endpoint
                    setUser(response.data.data);
                } catch (error) {
                    console.error('Error validating token:', error);
                    localStorage.removeItem('token');
                    setToken(null);
                    setUser(null);
                }
            }
        };
        validateToken();
    }, [token]);

    const login = async (email: string, password: string) => {
        try {
            const response = await api.post('/auth/signIn', { email, password });
            const { token, data } = response.data;

            localStorage.setItem('token', token);
            setToken(token);
            setUser(data);

            // Redirect based on role
            if (data.role === 'ADMIN') {
                navigate('/dashboard/parking-sessions');
            } else {
                navigate('/dashboard/vehicle-management');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };


    const register = async (name: string, email: string, password: string, role: 'USER' | 'ADMIN') => {
        try {
            const response = await api.post('/auth/signUp', { name, email, password, role });
            const { token, data } = response.data;

            localStorage.setItem('token', token);
            setToken(token);
            setUser(data);

            // Redirect based on role
            if (data.role === 'ADMIN') {
                navigate('/dashboard/parking-sessions');
            } else {
                navigate('/dashboard/vehicle-management');
            }
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        navigate('/login');
    };


    const isAuthenticated = !!token && !!user;
    const isAdmin = isAuthenticated && user?.role === 'ADMIN';


    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated,
                isAdmin,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );

}
