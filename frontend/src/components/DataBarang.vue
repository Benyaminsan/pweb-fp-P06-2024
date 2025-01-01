<template>
<div class="bg-custom-beige min-h-screen p-6">
    <div class="header">
      <h1 style="font-size:2rem;"><strong>Data Barang</strong></h1>
      <button class="btn-add" @click="showModal = true">Tambah Barang</button>
    </div>
    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h2 style="font-weight: bold;">{{ isEditing ? "Edit Barang" : "Tambah Barang" }}</h2>
          <form @submit.prevent="addItem">
            <input v-model="newItem.name" placeholder="Nama Barang" required />
            <input v-model="newItem.amount" type="number" placeholder="Jumlah" required />
            <select v-model="newItem.condition" required>
              <option value="" disabled>Pilih Kondisi</option>
              <option value="Sangat Baik">Sangat Baik</option>
              <option value="Baik">Baik</option>
              <option value="Buruk">Buruk</option>
              <option value="Rusak">Rusak</option>
            </select>
            <input v-model="newItem.created_at" type="date" required />
            <br>
            <div class="modal-actions">
              <button type="submit">{{ isEditing ? "Simpan Perubahan" : "Tambah" }}</button>
              <button type="cancel" @click="closeModal">Batal</button>
            </div>
          </form>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Jumlah</th>
          <th>Kondisi</th>
          <th>Tanggal Registrasi</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.condition }}</td>
          <td>{{ item.created_at }}</td>
          <td>
            <button type="editItem" @click="editItem(item.id)">Edit</button>
            <button type="deleteItem" @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [], 
      newItem: {
        name: '',
        amount: '',
        condition: '',
        created_at: '',
      },
      showModal: false,
      isEditing: false,
      editIndex: null, 
    };
  },
  methods: {
    addItem() {
      if (this.isEditing) {
        this.items.splice(this.editIndex, 1, { ...this.newItem });
        this.isEditing = false;
        this.editIndex = null;
      } else {
        const newId = this.items.length ? this.items[this.items.length - 1].id + 1 : 1;
        this.items.push({ ...this.newItem, id: newId });
      }
      this.closeModal();
    },
    editItem(id) {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.newItem = { ...this.items[index] };
        this.isEditing = true;
        this.editIndex = index;
        this.showModal = true;
      }
    },
    deleteItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },
    resetForm() {
      this.newItem = {
        name: '',
        amount: '',
        condition: '',
        created_at: '',
      };
    },
  },
};
</script>


<style scoped>
/* div {
  margin: 20px;
} */

/* tabel */
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

/* modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  background: white;
  padding: 40px;
  border-radius: 8px;
  width: 500px;
  max-width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.modal h2 {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}

input:focus {
  border-color: #4CAF50;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button[type="submit"] {
  background-color: #4CAF50;
  color: white;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
button[type="cancel"] {
  background-color: #f44336;
  color: white;
}
button[type="cancel"]:hover {
  background-color: #d32f2f;
}

/* button tambah barang */
.btn-add {
  background-color: #d4bc75;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-add:hover {
  background-color: #d6ccad;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.container {
  margin: 0px;
}

/* dropdown */
select {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  background-color: white;
  font-size: 16px;
}

select:focus {
  border-color: #000000;
}

/* aksi */
button[type="editItem"] {
  background-color: #4CAF50;
  color: white;
}
button[type="deleteItem"] {
  background-color: #f44336;
  color: white;
}
button[type="editItem"]:hover {
  background-color: #a8e5aa;
  color: white;
}
button[type="deleteItem"]:hover {
  background-color: #e7a5a0;
  color: white;
}
</style>
