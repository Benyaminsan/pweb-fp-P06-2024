<template>
    <nav class="bg-custom-plum p-4 sticky top-0 z-50 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-custom-gold text-lg font-semibold">Alat Peminjaman</div>
            <div class="flex items-center space-x-4">
                <span v-if="username" class="text-custom-gold">{{ username }}</span>
                <!-- conditionally render based on current route -->
                <router-link
                    :to="isOnRulesPage ? '/' : '/rules'"
                    class="text-white px-4 bg-custom-gold rounded-lg hover:bg-custom-gray hover:text-custom-plum transition"
                >
                    {{ isOnRulesPage ? 'Back to Login' : 'Aturan Peminjaman' }}
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAuthStore } from '@/store/token';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: "Navbar",
    setup() {
        const authStore = useAuthStore();
        const username = computed(() => authStore.username); // assuming authStore has the username property
        const route = useRoute(); // access the current route

        // check if the current route is the "rules" page
        const isOnRulesPage = computed(() => route.path === '/rules');

        return {
            username,
            isOnRulesPage,  // reactive value to conditionally render navbar buttons
        };
    },
});
</script>