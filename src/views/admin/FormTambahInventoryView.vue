<script setup>
import SidebarAdmin from '@/components/admin/SidebarAdmin.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/admin/HeaderBar.vue';
import Navbar from '@/components/Navbar.vue';
import { ref, onMounted } from 'vue';
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

async function addInventoryData() {
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
    stok.value = null;
    status.value = '';
    image = null;
};
</script>

<template>
    <Navbar />

    <div class="container-fluid">
        <div class="row">

            <SidebarAdmin />

            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-2 pb-4">
                <div class="row pt-2 ">

                    <HeaderBar />

                    <div class="mb-4 mb-lg-0 d-flex justify-content-center align-content-center">
                        <div class="card border-0" style="background-color: #00000000;">
                            <div class="card-body w-700px">
                                <div class="mb-3">
                                    <h1 class="text-center font-weight-bold">TAMBAH INVETORY</h1>
                                </div>
                                <form>
                                    <div class="mb-3">
                                        <input v-model="nama_barang" type="text" class="form-control" id="nama_barang" placeholder="nama_barang"
                                            style="background-color: #D9D9D9;" required />
                                    </div>
                                    <div class="mb-3">
                                        <select v-model="category" class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                                            <option selected style="background-color: white;" value="">Pilih Kategori</option>
                                            <option value="barang" style="background-color: white;">Barang</option>
                                            <option value="ruangan" style="background-color: white;">Ruangan</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <textarea v-model="deskripsi" class="form-control" id="deskripsi" placeholder="Deskripsi" style="background-color: #D9D9D9;" required></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <input v-model="alamat" type="text" class="form-control" id="alamat" placeholder="Alamat" style="background-color: #D9D9D9;" required />
                                    </div>
                                    <div class="mb-3">
                                        <input v-model.number="stok" type="number" class="form-control" id="stok" placeholder="Jumlah Stok" style="background-color: #D9D9D9;" required />
                                    </div>
                                    <div class="mb-3">
                                        <select v-model="status" class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                                            <option selected style="background-color: white;" value="">Pilih Status Ketersediaan</option>
                                            <option value="tersedia" style="background-color: white;">Tersedia</option>
                                            <option value="disewa" style="background-color: white;">Disewa</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <input type="file" @change="handleFileUpload" class="form-control" id="image" style="background-color: #D9D9D9;"/>
                                    </div>
                                    <div class="d-flex justify-content-md-end justify-content-center">
                                        <button @click.prevent="addInventoryData()" class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill" style="background-color: #1284ED;"
                                            onmouseover="this.style.backgroundColor='#075095'"
                                            onmouseout="this.style.backgroundColor='#1284ED'">Simpan</button>
                                        <RouterLink to="/admin/inventory" type="login" class="btn px-4 text-white h-5 font-weight-semibold ml-2 rounded-pill" style="background-color: #ED1212E5;"
                                            onmouseover="this.style.backgroundColor='#9E0202E5'"
                                            onmouseout="this.style.backgroundColor='#ED1212E5'">Batal</RouterLink>
                                    </div>
                                    <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </main>

        <FooterSection />

    </div>
</div></template>
