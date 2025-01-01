<template>
  <div class="bg-custom-beige min-h-screen p-6">
    <div class="header">
      <h1 style="font-size:2rem;"><strong>Data Peminjaman</strong></h1>
    </div>
    <br>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Barang</th>
          <th>Jumlah Pinjam</th>
          <th>Tgl. Pinjam</th>
          <th>Tgl. Kembali</th>
          <th>Peminjam</th>
          <th>Petugas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(borrow, index) in borrowItems" :key="borrow.id">
          <td>{{ index + 1 }}</td>
          <td>{{ borrow.item_name }}</td>
          <td>{{ borrow.amount }}</td>
          <td>{{ borrow.borrow_date }}</td>
          <td>{{ borrow.return_date }}</td>
          <td>{{ borrow.borrower_name }}</td>
          <td>{{ borrow.officer_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BorrowItems: [],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
tr:nth-child(even) {
  background-color: #f9f9f9;
}
tr:hover {
  background-color: #f1f1f1;
}
th:nth-child(1), td:nth-child(1) {
width: 60px; 
}
</style>
