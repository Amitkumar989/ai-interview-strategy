const TOKEN_KEY = "auth_token"

export function getAuthToken() {
    return localStorage.getItem(TOKEN_KEY)
}

export function setAuthToken(token) {
    if (!token) {
        localStorage.removeItem(TOKEN_KEY)
        return
    }

    localStorage.setItem(TOKEN_KEY, token)
}

export function clearAuthToken() {
    localStorage.removeItem(TOKEN_KEY)
}
