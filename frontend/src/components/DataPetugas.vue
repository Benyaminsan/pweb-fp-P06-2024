<template>
  <div class="bg-custom-beige flex">
    <div class="container min-h-screen">
      <div class="header">
        <h1 style="font-size:2rem;"><strong>Data Petugas</strong></h1>
      </div>
      <form @submit.prevent="addUser">
        <input v-model="newUser.username" placeholder="Nama Petugas" required />
        <input v-model="newUser.password" placeholder="Password" required type="password" />
        <select v-model="newUser.role" required>
          <option disabled value="">Sebagai</option>
          <option value="Admin">Admin</option>
          <option value="Operator">Operator</option>
        </select>
      <button type="submit">{{ isEditing ? "Update Petugas" : "Tambah Petugas" }}</button>
    </form>

    
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button type="edit" @click="editUser(user.id)">Edit</button>&nbsp;
              <button type="delete" @click="deleteUser(user.id)">Delete</button>
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
    users: [],
    newUser: {
      username: '',
      password: '',
      role: '',
    },
    isEditing: false,
    currentUserId: null,
  };
},

methods: {
  addUser() {
    if (this.isEditing) {
      const userIndex = this.users.findIndex(user => user.id === this.currentUserId);
      if (userIndex !== -1) {
        this.users[userIndex] = { ...this.newUser, id: this.currentUserId };
      }
      this.isEditing = false;
      this.currentUserId = null;
    } else {
      const newId = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
      this.users.push({ ...this.newUser, id: newId });
    }
    this.resetForm();
  },
  editUser(id) {
    const user = this.users.find(user => user.id === id);
    if (user) {
      this.newUser = { ...user };
      this.isEditing = true;
      this.currentUserId = id;
    }
  },
  deleteUser(id) {
    this.users = this.users.filter(user => user.id !== id);
  },
  resetForm() {
    this.newUser = { username: '', password: '', role: '' };
  },
}
};
</script>

<style scoped>
form select {
  padding: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fff;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
th:nth-child(1), td:nth-child(1) {
width: 60px; 
}
tr:nth-child(even) {
  background-color: #f9f9f9;
}
tr:hover {
  background-color: #f1f1f1;
}

form input {
  padding: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="submit"] {
  background-color: #d4bc75;
  color: white;
}
button[type="submit"]:hover {
  background-color: #cec19b;
}
button[type="button"] {
  background-color: #f44336;
  color: white;
}
button[type="button"]:hover {
  background-color: #d32f2f;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.container {
  margin: 20px;
}
button[type="edit"] {
  background-color: #4CAF50;
  color: white;
}
button[type="delete"] {
  background-color: #f44336;
  color: white;
}
button[type="edit"]:hover {
  background-color: #a8e5aa;
  color: white;
}
button[type="delete"]:hover {
  background-color: #e7a5a0;
  color: white;
}
</style>
