<script setup>
import SidebarAdmin from '@/components/admin/SidebarAdmin.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/admin/HeaderBar.vue';
import Navbar from '@/components/Navbar.vue';
import Modal from '@/components/admin/Modal.vue'
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const semuaPeminjaman = ref()

async function getAllPeminjamanData() {
    try {
        const response = await axios.get('http://localhost:3350/peminjamans/peminjamans')
        console.log(response.data)
        semuaPeminjaman.value = response.data.data
    } catch (error) {
        console.log(error)
    }
}

function formatDate(dateString) {
      // Mengonversi string tanggalPeminjaman ke objek Date
      const date = new Date(dateString);

      // Mendapatkan tanggal, bulan, dan tahun
      const tanggal = date.getDate();
      const bulan = date.getMonth() + 1; // Perlu ditambah 1 karena indeks bulan dimulai dari 0
      const tahun = date.getFullYear();

      // Format tanggal, bulan, dan tahun ke dalam string yang diinginkan
      return `${tanggal < 10 ? '0' + tanggal : tanggal}/${bulan < 10 ? '0' + bulan : bulan}/${tahun}`;
}

onMounted(() => {
    getAllPeminjamanData()
})
const showModal = ref(false)
</script>

<template>
    <Navbar />

    <div class="container-fluid">
        <div class="row">

            <SidebarAdmin />

            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-2 pb-4">
                <div class="row pt-2 ">

                    <HeaderBar />

                    <div class="mb-4 mb-lg-0">
                        <div class="card"
                            style="background-color: #FAF3F3; box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-md-6 d-flex justify-content-md-start justify-content-center">
                                        <h1 class="h2">Peminjaman</h1>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                                        <p>Show</p>
                                        <select class="form-select form-select-sm mx-2" style="width: 55px;">
                                            <option selected value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="30">40</option>
                                            <option value="30">50</option>
                                        </select>
                                        <p>Entries</p>
                                    </div>
                                    <div class="col-lg-6 d-lg-flex justify-content-lg-end justify-content-center">
                                        <div class="d-flex justify-content-center">
                                            <p>Search by</p>
                                            <select class="form-select form-select-sm mx-2" style="width: 90px;">
                                                <option selected value="nik">Nama</option>
                                                <option value="no-telepon">Inventory</option>
                                                <option value="nama">Verif Peminj</option>
                                                <option value="alamat">Verif Pengem</option>
                                            </select>
                                        </div>
                                        <div class="d-flex justify-content-center justify-content-lg-end">
                                            <input type="text" style="height: 30px;">
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">ID Peminjam</th>
                                                <th scope="col">Nama</th>
                                                <th scope="col">Pinjam</th>
                                                <th scope="col">Tanggal Peminjaman</th>
                                                <th scope="col">Verifikasi Peminjaman</th>
                                                <th scope="col">Verifikasi Pengembalian</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template v-for="(peminjaman, index) in semuaPeminjaman">
                                                <tr class="text-capitalize">
                                                    <th scope="row">{{ index+1 }}</th>
                                                    <td>{{ peminjaman.id }}</td>
                                                    <td>{{ peminjaman.nama_employee }}</td>
                                                    <td>{{ peminjaman.nama_barang }}</td>
                                                    <td>{{formatDate( peminjaman.tanggalPeminjaman) }} - {{ formatDate(peminjaman.tanggalPeminjaman) }}</td>
                                                    <template v-if="peminjaman.verifikasiPeminjaman == 'terima'">
                                                        <td class="text-success font-weight-bold">Diterima</td>
                                                    </template>
                                                    <template v-else-if="peminjaman.verifikasiPeminjaman == 'tolak'">
                                                        <td class="text-danger font-weight-bold">Ditolak</td>
                                                    </template>
                                                    <template v-else>
                                                        <td>
                                                            <div class="d-flex justify-content-center">
                                                            <a href="#"
                                                                class="btn btn-sm btn-success font-weight-semibold mr-1 rounded-lg">
                                                                Terima
                                                            </a>
                                                            <a href="#"
                                                                class="btn btn-sm btn-danger font-weight-semibold ml-1 rounded-lg">
                                                                Tolak
                                                            </a>
                                                        </div>
                                                        </td>
                                                    </template>
                                                    <td>
                                                        <template v-if="peminjaman.verifikasiPeminjaman == 'terima'">
                                                            <div class="d-flex justify-content-center">
                                                                <Button
                                                                    class="btn btn-sm btn-primary font-weight-semibold rounded-lg"
                                                                    id="show-modal" @click="showModal = true">
                                                                    Pengembalian
                                                                </button>
                                                            </div>
                                                        </template>
                                                        <template v-else>
                                                            <div class="d-flex justify-content-center">
                                                                <Button
                                                                    class="btn btn-sm btn-dark font-weight-semibold rounded-lg disabled"
                                                                    id="show-modal" @click="showModal = true">
                                                                    Pengembalian
                                                                </button>
                                                            </div>
                                                        </template>
                                                    </td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6 pl-md-4 d-flex justify-content-md-start justify-content-center">
                                    <p>Show 10 of 20 data</p>
                                </div>
                                <div class="col-md-6 d-flex justify-content-md-end justify-content-center pr-md-4">
                                    <button class="btn btn-sm btn-light font-weight-bold"
                                        style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">Prev</button>
                                    <button class="btn btn-sm btn-light font-weight-bold"
                                        style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>

            <FooterSection />

        </div>
    </div>
    <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false">
            <template #header>
                <h5 class="text-white text-center">Pengembalian Inventory</h5>
            </template>
            <template #body>
                <form>
                    <div class="mb-4">
                        <select class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                            <option selected style="background-color: white;" value="">Pilih Kondisi</option>
                            <option value="aman" style="background-color: white;">Aman</option>
                            <option value="rusak" style="background-color: white;">Rusak</option>
                            <option value="hilang" style="background-color: white;">Hilang</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <textarea type="text" class="form-control" id="nik" placeholder="Catatan"
                            style="background-color: #D9D9D9; height: 120px;"></textarea>
                    </div>
                    <div class="d-flex justify-content-md-end justify-content-center">
                        <a href="/" class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill"
                            style="background-color: #1284ED;" onmouseover="this.style.backgroundColor='#075095'"
                            onmouseout="this.style.backgroundColor='#1284ED'">Simpan</a>
                    </div>
                </form>
            </template>
    </modal>
</Teleport></template>
