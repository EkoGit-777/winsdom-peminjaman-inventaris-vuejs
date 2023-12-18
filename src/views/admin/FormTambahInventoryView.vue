<script setup>
import SidebarAdmin from '@/components/admin/SidebarAdmin.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/admin/HeaderBar.vue';
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter()
const inventory = ref({
  nama_barang: '',
  category: '',
  deskripsi: '',
  alamat: '',
  stok: null,
  status: '',
});

let image = null;

const handleFileUpload = (event) => {
  image = event.target.files[0];
};

const addInventoryData = async () => {
  if (!image) {
    alert('Please select an image');
    return;
  }

  try {
    const formData = new FormData();
    formData.append('nama_barang', inventory.value.nama_barang);
    formData.append('category', inventory.value.category);
    formData.append('deskripsi', inventory.value.deskripsi);
    formData.append('alamat', inventory.value.alamat);
    formData.append('stok', inventory.value.stok);
    formData.append('status', inventory.value.status);
    formData.append('image', image);

    const response = await axios.post('http://localhost:3350/masters/inventories', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    alert('Data berhasil dibuat.');
    console.log('Server Response:', response.data);
    router.push({ name: 'inventoryAdmin' });
  } catch (error) {
    alert('Terjadi kesalahan saat membuat data. Silakan periksa koneksi Anda atau coba lagi nanti.');
    console.error('API Error:', error);
  }
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
                                        <input v-model="inventory.nama_barang" type="text" class="form-control" id="nama_barang" placeholder="Nama Inventory"
                                            style="background-color: #D9D9D9;" required />
                                    </div>
                                    <div class="mb-3">
                                        <select v-model="inventory.category" class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                                            <option selected style="background-color: white;" value="">Pilih Kategori</option>
                                            <option value="barang" style="background-color: white;">Barang</option>
                                            <option value="ruangan" style="background-color: white;">Ruangan</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <textarea v-model="inventory.deskripsi" class="form-control" id="deskripsi" placeholder="Deskripsi" style="background-color: #D9D9D9;" required></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <input v-model="inventory.alamat" type="text" class="form-control" id="alamat" placeholder="Alamat" style="background-color: #D9D9D9;" required />
                                    </div>
                                    <div class="mb-3">
                                        <input v-model.number="inventory.stok" type="number" class="form-control" id="stok" placeholder="Jumlah Stok" style="background-color: #D9D9D9;" required />
                                    </div>
                                    <div class="mb-3">
                                        <select v-model="inventory.status" class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                                            <option selected style="background-color: white;" value="">Pilih Status Ketersediaan</option>
                                            <option value="tersedia" style="background-color: white;">Tersedia</option>
                                            <option value="disewa" style="background-color: white;">Disewa</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <input type="file" @change="handleFileUpload" accept="image/*" class="form-control" id="image" style="background-color: #D9D9D9;"/>
                                    </div>
                                    <div class="d-flex justify-content-md-end justify-content-center">
                                        <button @click="addInventoryData()" type="button" class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill" style="background-color: #1284ED;"
                                            onmouseover="this.style.backgroundColor='#075095'"
                                            onmouseout="this.style.backgroundColor='#1284ED'">Simpan</button>
                                        <RouterLink to="/admin/inventory" class="btn px-4 text-white h-5 font-weight-semibold ml-2 rounded-pill" style="background-color: #ED1212E5;"
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
