<template>
    <div class="home-container">
      <h1>Welcome to the Home Page!</h1>
      <p v-if="user">Hello, {{ user.username }}. Your role is {{ user.role }}.</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
      return {
        user: null,
      };
    },
    created() {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = this.decodeToken(token);
        this.user = {
          username: decodedToken.username,
          role: decodedToken.role,
        };
      } else {
        this.$router.push({ name: 'Login' }); // Jika tidak ada token, redirect ke login
      }
    },
    methods: {
      decodeToken(token) {
        const payload = token.split('.')[1];
        const decoded = atob(payload);
        return JSON.parse(decoded);
      },
      logout() {
        localStorage.removeItem('token');
        this.$router.push({ name: 'Login' }); // Redirect ke login setelah logout
      },
    },
  };
  </script>
  
  <style scoped>
  .home-container {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  