import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: localStorage.getItem("token") || "",
        user: null,
    }),
    actions: {
        async login(credentials: {
            username: string;
            password: string;
            role: string;
        }) {
            try {
                const response = await axios.post("http://localhost:5050/", credentials);
                this.token = response.data.token;
                localStorage.setItem("token", this.token);
                alert("Login succesfull!");
                return true;
            }

            catch (error) {
                alert("Login failed: " + error.response?.data?.message || "Unknown error");
                return false;
            }
        },
        logout () {
            this.token = "";
            localStorage.removeItem("token");
            alert("Logged out");
        },
    },
});