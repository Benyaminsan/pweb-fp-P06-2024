<template>
    <div>
      <h1>Manage Items</h1>
      <button @click="addItem">Add Item</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Condition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.condition }}</td>
            <td>
              <button @click="editItem(item.id)">Edit</button>
              <button @click="deleteItem(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const items = ref([]);
  
      const fetchItems = async () => {
        await store.dispatch('fetchItems');
        items.value = store.getters.getItems;
      };
  
      const addItem = () => {
        // Logic to add item
      };
  
      const editItem = (id: string) => {
        // Logic to edit item
      };
  
      const deleteItem = (id: string) => {
        // Logic to delete item
      };
  
      onMounted(() => {
        fetchItems();
      });
  
      return { items, fetchItems, addItem, editItem, deleteItem };
    },
  };
  </script>