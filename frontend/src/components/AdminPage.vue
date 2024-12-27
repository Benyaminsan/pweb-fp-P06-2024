<template>
    <div>
      <header>
        <h1>Admin Dashboard</h1>
        <a href="/" class="logout-btn">Keluar</a>
      </header>

    </div>
    <nav>
      <div class="nav-links">
        <router-link to="/admin/" class="nav-link">Data Barang</router-link>&nbsp;
        <router-link to="/admin/all-operator" class="nav-link">Data Petugas</router-link>&nbsp;
        <router-link to="/admin/summary" class="nav-link">Data Peminjaman</router-link>
      </div>
    </nav>

    <div class="dashboard-grid">
      <div class="dashboard-card">
        <h3>Data Barang</h3>
        <p>{{ barang.length }}</p>
        <a href="/admin">Lihat Data Barang</a>
      </div>
      <div class="dashboard-card">
        <h3>Data Petugas</h3>
        <p>{{ petugas.length }}</p>
        <a href="/admin/all-operator">Lihat Data Petugas</a>
      </div>
      <div class="dashboard-card">
        <h3>Data Peminjaman</h3>
        <p>{{ peminjaman.length }}</p>
        <a href="/admin/summary">Lihat Data Peminjaman</a>
      </div>
    </div>

    </template>
  
  <script>
  export default {
    data() {
      return {
        barang: [
          { nama: 'Proyektor', jumlah: 10, kondisi: 'Baik' },
          { nama: 'Kursi', jumlah: 50, kondisi: 'Buruk' },
        ],
        petugas: [
          { nama: 'Ali', jabatan: 'Supervisor', kontak: '08123456789' },
          { nama: 'Budi', jabatan: 'Staff', kontak: '08234567890' },
        ],
        peminjaman: [
          {
            nama: 'Charlie',
            barang: 'Proyektor',
            tanggalPinjam: '2024-12-20',
            tanggalKembali: '2024-12-25',
          },
          {
            nama: 'Diana',
            barang: 'Kursi',
            tanggalPinjam: '2024-12-21',
            tanggalKembali: '2024-12-26',
          },
        ],
      };
    },
    methods: {
      editItem(index, type) {
        console.log(`Editing ${type} at index`, index);
      },
      deleteItem(index, type) {
        console.log(`Deleting ${type} at index`, index);
        this[type].splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #d6ba73;
    color: white;
    padding: 20px;
    text-align: center;
  }
  header h1 {
    font-size: 2rem;
    font-style: italic;
  }
  
  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
  }  
  .nav-link {
    text-decoration: none;
    color: white;
    background-color: #59344f;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  .nav-link:hover {
    background-color: #66505f;
  }
  
  .logout-btn {
  background-color: #59344f;
  color: white;
  padding: 3px 15px;
  text-decoration: none;
  border-radius: 5px;
}
.logout-btn:hover {
  background-color: #c0392b;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
} 
.dashboard-card {
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  padding: 20px;
}  
.dashboard-card h3 {
  font-size: 1.2rem;
  color: #59344f;
  margin-bottom: 10px;
}
.dashboard-card p {
  font-size: 2rem;
  color: #59344f;
  margin: 10px 0;
}
.dashboard-card a {
  text-decoration: none;
  color: #3498db;
}
.dashboard-card a:hover {
  text-decoration: none;
  color: #a0cbe7;
}

</style>
  