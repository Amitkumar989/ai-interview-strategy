import axios from "axios"
import { clearAuthToken, getAuthToken, setAuthToken } from "./token.storage"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
})

api.interceptors.request.use((config) => {
    const token = getAuthToken()

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

function toApiError(err, fallbackMessage) {
    const message = err?.response?.data?.message
        || err?.message
        || fallbackMessage

    return new Error(message)
}

export async function register({ username, email, password }) {

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })

        setAuthToken(response.data?.token)
        return response.data

    } catch (err) {
        throw toApiError(err, "Registration failed")

    }

}

export async function login({ email, password }) {

    try {

        const response = await api.post("/api/auth/login", {
            email, password
        })

        setAuthToken(response.data?.token)
        return response.data

    } catch (err) {
        throw toApiError(err, "Login failed")
    }

}

export async function logout() {
    try {

        const response = await api.get("/api/auth/logout")

        clearAuthToken()
        return response.data

    } catch (err) {
        clearAuthToken()
        throw toApiError(err, "Logout failed")
    }
}

export async function getMe() {

    try {

        const response = await api.get("/api/auth/get-me")

        return response.data

    } catch (err) {
        throw toApiError(err, "Failed to fetch user")
    }

}

export { api }
