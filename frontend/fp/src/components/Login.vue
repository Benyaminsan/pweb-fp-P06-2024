<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="errorMessage" class="error">
        {{ errorMessage }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('http://localhost:4000/login', {
            username: this.username,
            password: this.password,
          });
  
          const token = response.data.token;
          localStorage.setItem('token', token); // Simpan token di localStorage
  
          // Arahkan ke halaman home setelah login berhasil
          this.$router.push({ name: 'Home' });
        } catch (error) {
          this.errorMessage = error.response?.data?.message || 'Login failed';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 300px;
    margin: 0 auto;
    padding-top: 50px;
    text-align: center;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  