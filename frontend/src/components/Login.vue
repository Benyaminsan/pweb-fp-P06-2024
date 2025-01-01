<template>
    <div id="login">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Login',
    setup() {
      const username = ref('');
      const password = ref('');
  
      const handleLogin = async () => {
        try {
          const response = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username.value, password: password.value }),
            credentials: 'include', // Menyertakan cookie untuk autentikasi
          });
  
          if (response.ok) {
            window.location.href = '/operator/dashboard'; // Arahkan ke dashboard setelah login berhasil
          } else {
            alert('Login failed. Please check your credentials.');
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      };
  
      return { username, password, handleLogin };
    },
  });
  </script>
  
  <style scoped>
  #login {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  