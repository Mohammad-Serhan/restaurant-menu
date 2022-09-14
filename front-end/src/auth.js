class Auth {
    constructor() {
        this.authenticated = false;
    }

    isAuthenticated() {
        let authenticatedAdmin = localStorage.getItem("authenticated");
        return authenticatedAdmin ? true : false;
    }

    storeAuthData(data, token) {
        localStorage.setItem("token", token);
        localStorage.setItem("authenticated", true);
        localStorage.setItem("email", data.email);
        localStorage.setItem("id", data.id);
    }

    removeAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("authenticated");
        localStorage.removeItem("email");
        localStorage.removeItem("id");
    }

}

export default new Auth();