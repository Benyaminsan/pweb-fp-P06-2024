<template>
    <div id="app">
      <h1>Data Barang</h1>
      <!-- Tabel untuk menampilkan data barang -->
      <table id="equipment-list" class="display">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Kondisi</th>
            <th>Jumlah</th>
            <th>Tanggal Registrasi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in equipment" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.condition }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.registrationDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import $ from 'jquery';
  import 'datatables.net';
  import 'datatables.net-dt/css/jquery.dataTables.css';
  
  export default defineComponent({
    name: 'App',
    setup() {
      const equipment = ref<Array<any>>([]);
  
      // Fungsi untuk mengambil data barang
      const fetchEquipment = async () => {
        try {
          const response = await fetch('/operator/all equipment', { credentials: 'include' });
          if (response.ok) {
            equipment.value = await response.json();
            // Inisialisasi DataTables setelah data dimuat
            $('#equipment-list').DataTable({
              paging: true,           // Mengaktifkan pagination
              searching: true,        // Mengaktifkan fitur pencarian
              ordering: true,         // Mengaktifkan pengurutan (ascending/descending)
              info: true,             // Menampilkan informasi tentang data yang ditampilkan
            });
          } else {
            window.location.href = '/login'; // Redirect ke login jika tidak autentikasi
          }
        } catch (error) {
          console.error('Error fetching equipment data:', error);
        }
      };
  
      // Memanggil fetchEquipment saat komponen dimuat
      onMounted(() => {
        fetchEquipment();
      });
  
      return { equipment };
    },
  });
  </script>
  
  <style scoped>
  /* Styling untuk tabel */
  #equipment-list {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  #equipment-list th, #equipment-list td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  #equipment-list th {
    background-color: #f2f2f2;
  }
  
  /* Styling tambahan untuk tampilan halaman */
  h1 {
    text-align: center;
    margin-top: 20px;
    font-size: 24px;
  }
  </style>
  