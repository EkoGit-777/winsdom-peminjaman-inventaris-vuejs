<template>
    <div>
      <h1>Create New Item</h1>
      <form @submit.prevent="createInventory" enctype="multipart/form-data">
        <label>Nama Barang:</label>
        <input v-model="nama_barang" required />
  
        <label>Category:</label>
        <input v-model="category" required />
  
        <label>Deskripsi:</label>
        <textarea v-model="deskripsi" required></textarea>
  
        <label>Alamat:</label>
        <input v-model="alamat" required />
  
        <label>Stok:</label>
        <input v-model.number="stok" type="number" required />
  
        <label>Status:</label>
        <input v-model="status" required />
  
        <label>Image:</label>
        <input type="file" @change="handleFileUpload" />
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const nama_barang = ref('');
  const category = ref('');
  const deskripsi = ref('');
  const alamat = ref('');
  const stok = ref(0);
  const status = ref('');
  let image = null;
  
  const handleFileUpload = (event) => {
    image = event.target.files[0];
  };
  
  const createInventory = async () => {
    if (!image) {
      alert('Please select an image');
      return;
    }
  
    const formData = new FormData();
    formData.append('image', image);
    formData.append('nama_barang', nama_barang.value);
    formData.append('category', category.value);
    formData.append('deskripsi', deskripsi.value);
    formData.append('alamat', alamat.value);
    formData.append('stok', stok.value);
    formData.append('status', status.value);
  
    try {
      const response = await axios.post('http://localhost:3350/masters/inventories', formData);
      alert('Data Created');
      console.log('Server Response:', response.data);
      resetForm();
    } catch (error) {
      alert('Error creating data. Please check your connection or try again later.');
      console.error('API Error:', error);
    }
  };
  
  const resetForm = () => {
    nama_barang.value = '';
    category.value = '';
    deskripsi.value = '';
    alamat.value = '';
    stok.value = 0;
    status.value = '';
    image = null;
  };
  </script>
  