<script setup>
import SidebarAdmin from '@/components/admin/SidebarAdmin.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/admin/HeaderBar.vue';
import Navbar from '@/components/Navbar.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
// import Quill from 'quill';
// import 'quill/dist/quill.snow.css';

// const initializeQuill = () => {
//   const quill = new Quill(quillEditor.value, {
//     modules: {
//       toolbar: [
//         ['bold', 'italic', 'underline', 'strike'],
//         ['link', 'blockquote'],
//       ],
//     },
//     // placeholder: 'Deskripsi',
//     theme: 'snow',
//   });
// };

// const quillEditor = ref(null);
// const quillContent = ref('');

const selectedFiles = ref([]);

function handleFileUpload(event) {
    const fileInput = event.target;
    const files = fileInput.files;

    selectedFiles.value = [];

    if (files.length > 4) {
        alert('Please select up to 4 files.');
        fileInput.value = '';
        return;
    }

    for (let i = 0; i < files.length; i++) {
        selectedFiles.value.push(files[i].name);
    }
}

const inventory = ref({
  nama_barang: '',
  category: '',
  deskripsi: '',
  alamat: '',
  stok: null,
  status: '',
  image: null,
});

// const updateDeskripsi = (event) => {
//   inventory.value.deskripsi = event.target.textContent;
// };

async function addInventoryData() {
  try {
    if (selectedFiles.value.length === 0) {
      throw new Error('Please select a file');
    }
    
    const response = await axios.post('http://localhost:3350/masters/inventories', {
        nama_barang: inventory.value.nama_barang,
        category: inventory.value.category,
        deskripsi: inventory.value.deskripsi,
        alamat: inventory.value.alamat,
        stok: inventory.value.stok,
        status: inventory.value.status,
        image: selectedFiles.value
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

// onMounted(() => {
//   editorRef.value = document.getElementById('quillEditor');
//   initializeQuill();
//   quill.on('text-change', () => {
//     quillContent.value = quill.root.innerHTML;
//   });
// });
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
                        <div class="card border-0"
                            style="background-color: #00000000;">
                            <div class="card-body w-700px">
                                <div class="mb-3">
                                    <h1 class="text-center font-weight-bold">TAMBAH INVETORY</h1>
                                </div>
                                <form>
                                    <div class="mb-3">
                                        <input v-model="inventory.nama_barang" type="text" class="form-control" id="nama" placeholder="Nama Inventaris"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <select v-model="inventory.category" class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                                            <option selected style="background-color: white;" value="">Pilih Kategori</option>
                                            <option value="barang" style="background-color: white;">Barang</option>
                                            <option value="ruangan" style="background-color: white;">Ruangan</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <input v-model="inventory.alamat" type="text" class="form-control" id="alamat" placeholder="Alamat"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <!-- <div ref="quillEditor"></div>
                                        <textarea v-model="quillContent"></textarea> -->
                                        <!-- <textarea :value="inventory.deskripsi" @input="updateDeskripsi"  id="editor" ref="editor" class="w-700px" placeholder="Deskripsi" style="background-color: #D9D9D9; height: 200px;"></textarea> -->
                                        <textarea v-model="inventory.deskripsi" class="form-control" placeholder="Deskripsi" id="deskripsi"
                                        style="background-color: #D9D9D9; height: 200px;"></textarea>
                                    </div>
                                    <div class="mb-4">
                                        <input v-model="inventory.stok" type="number" class="form-control" id="stok" placeholder="Jumlah stok"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-4">
                                        <select v-model="inventory.status" class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                                            <option selected style="background-color: white;" value="">Pilih Status Ketersediaan</option>
                                            <option value="tersedia" style="background-color: white;">Tersedia</option>
                                            <option value="disewa" style="background-color: white;">Disewa</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <div class="d-flex">
                                           <input type="file" @change="handleFileUpload" class="form-control" id="image" style="background-color: #D9D9D9;" />
                                        </div> 
                                    </div>
                                    <div class="d-flex justify-content-md-end justify-content-center">
                                        <button @click.prevent="addInventoryData()" class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill" style="background-color: #1284ED;"
                                            onmouseover="this.style.backgroundColor='#075095'"
                                            onmouseout="this.style.backgroundColor='#1284ED'">Simpan</button>
                                        <RouterLink to="/admin/inventory" type="login" class="btn px-4 text-white h-5 font-weight-semibold ml-2 rounded-pill" style="background-color: #ED1212E5;"
                                            onmouseover="this.style.backgroundColor='#9E0202E5'"
                                            onmouseout="this.style.backgroundColor='#ED1212E5'">Batal</RouterLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <FooterSection />

        </div>
    </div>
</template>
