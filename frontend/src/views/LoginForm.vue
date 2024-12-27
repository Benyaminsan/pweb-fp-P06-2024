<template>
    <div class="min-h-screen flex items-center justify-center bg-custom-beige">
        <div class="max-w-md w-full bg-custom-plum rounded-lg shadow-md p-6">
            <h1 class="text-3xl font-bold text-center text-custom-gold mb-6">Login</h1>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label for="username" class="block text-custom-gray mb-2">Username</label>
                    <input 
                        type="text"
                        placeholder="Enter username"
                        id="username"
                        v-model="username"
                        class="w-full px-4 py-2 border rounded-lg text-custom-gray focus:outline-none focus:ring-2 focus:ring-custom-green"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-custom-gray mb-2">Password</label>
                    <input 
                        type="password"
                        placeholder="Enter password"
                        id="password"
                        v-model="password"
                        class="w-full px-4 py-2 border rounded-lg text-custom-gray focus:outline-none focus:ring-2 focus:ring-custom-green"
                        required
                    />
                </div>
                <div class="mb-6">
                    <label for="role" class="block text-custom-gray mb-2">Role</label>
                    <select 
                        id="role"
                        v-model="role"
                        class="w-full px-4 py-2 rounded-lg text-custom-gray focus:outline-none focus:ring-2 focus:ring-custom-green"
                        required
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
                <button
                    type="submit"
                    class="w-full bg-custom-gold text-white py-2 px-4 rounded-lg hover:bg-custom-gray focus: outline-none focus:ring-2 focus:ring-custom-green"
                >
                    Login
                </button>
            </form>
            <p v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '@/store/token';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const username = ref("");
        const password = ref("");
        const role = ref("USER");
        const errorMessage = ref("");
        const authStore = useAuthStore();
        const router = useRouter();

        const handleLogin = async () => {
            try {
                const isSuccess = await authStore.login({
                    username: username.value,
                    password: password.value,
                    role: role.value
                });

                if (isSuccess) {
                    if (role.value === "ADMIN") {
                        router.push('/admin');
                    }
                    // uncomment dan atur bawah ini untuk page endpoint petugas/operator
                    else {
                        router.push('/dashboard');
                    }
                }
                else {
                    errorMessage.value = "Invalid username or password."
                }
            }

            catch (error) {
                errorMessage.value = "Login failed. Please try again.";
            }
        };

        return {
            username,
            password,
            role,
            errorMessage,
            handleLogin,
        };
    },
})
</script>