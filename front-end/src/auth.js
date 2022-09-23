class Auth {
    constructor() {
        // this.token = "";
        this.authenticated = false;
        // this.email = "";
        // this.id = "";
    }

    isAuthenticated() {
        let authenticatedAdmin = localStorage.getItem("authenticated");
        return authenticatedAdmin ? true : false;
    }

    storeAuthData(data, token) {
        localStorage.setItem("token", token);
        localStorage.setItem("authenticated", true);
        localStorage.setItem("email", data.email);
        localStorage.setItem("id", data._id);
        // this.token = token;
        // this.authenticated = true;
        // this.email = data.email;
        // this.id = data.id;
    }

    removeAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("authenticated");
        localStorage.removeItem("email");
        localStorage.removeItem("id");
    //         this.token = "";
    //         this.authenticated = false;
    //         this.email = "";
    //         this.id = "";
    }

}

export default new Auth();