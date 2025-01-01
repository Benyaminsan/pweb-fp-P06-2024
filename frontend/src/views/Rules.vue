<template>
    <div class="min-h-screen flex items-center justify-center bg-custom-beige">
        <div class=" mx-auto p-6 bg-custom-plum rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
            <h2 class="text-2xl text-center font-bold mb-4 text-custom-gold">Aturan & Alur Peminjaman</h2>
            <p class="text-lg text-custom-beige">
                <!-- This is hardcoded static content for now -->
                <b>Alur Peminjaman:</b><br>
                1. Pengguna login terlebih dahulu.<br>
                2. Pilih alat yang ingin dipinjam.<br>
                3. Tentukan waktu peminjaman.<br>
                4. Tunggu konfirmasi dari admin.<br>
                5. Ambil alat dan pastikan untuk mengembalikan sesuai waktu yang ditentukan.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Rules",
};
</script>