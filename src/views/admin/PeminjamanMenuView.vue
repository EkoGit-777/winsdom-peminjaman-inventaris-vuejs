<script setup>
import SidebarAdmin from '@/components/admin/SidebarAdmin.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/admin/HeaderBar.vue';
import Navbar from '@/components/Navbar.vue';
import ModalPeminjaman from '@/components/admin/ModalPeminjaman.vue'
import axios from 'axios';
import { onMounted, ref } from 'vue';

const semuaPeminjaman = ref()

async function getAllPeminjamanData() {
    try {
        const response = await axios.get('http://localhost:3350/peminjamans/peminjamans-join-inventories')
        console.log(response.data)
        semuaPeminjaman.value = response.data.data
    } catch (error) {
        console.log(error)
    }
}

async function updateVerifikasiPeminjaman(id, value) {
    const userConfirmed = window.confirm("Apakah Anda yakin dengan pilihan ini?");
    if (userConfirmed) {
        try {
            const response = await axios.put(`http://localhost:3350/peminjamans/verifikasi-peminjaman/${id}`, {
                verifikasiPeminjaman: value
            })
            await getAllPeminjamanData()
        } catch (error) {
            console.log(error)
        }
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

const showModal = ref(false)
const selectedIdPeminjaman = ref(null)

function toggleModal(id) {
  showModal.value = true;
  selectedIdPeminjaman.value = id;
};

onMounted(() => {
    getAllPeminjamanData()
})

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
                                                    <th scope="row">{{ index + 1 }}</th>
                                                    <td>{{ peminjaman.id }}</td>
                                                    <td>{{ peminjaman.nama_employee }}</td>
                                                    <td>{{ peminjaman.nama_barang }}</td>
                                                    <td>{{ formatDate(peminjaman.tanggal_mulai_peminjaman) }} - {{
                                                        formatDate(peminjaman.tanggal_akhir_peminjaman) }}</td>
                                                    <template v-if="peminjaman.verifikasiPeminjaman == 'terima'">
                                                        <td class="text-success font-weight-bold">Diterima</td>
                                                    </template>
                                                    <template v-else-if="peminjaman.verifikasiPeminjaman == 'tolak'">
                                                        <td class="text-danger font-weight-bold">Ditolak</td>
                                                    </template>
                                                    <template v-else>
                                                        <td>
                                                            <div class="d-flex justify-content-center">
                                                                <button
                                                                    @click="updateVerifikasiPeminjaman(peminjaman.id, value = 'terima')"
                                                                    type="button"
                                                                    class="btn btn-sm btn-success font-weight-semibold mr-1 rounded-lg">
                                                                    Terima
                                                                </button>
                                                                <button
                                                                    @click="updateVerifikasiPeminjaman(peminjaman.id, value = 'tolak')"
                                                                    type="button"
                                                                    class="btn btn-sm btn-danger font-weight-semibold ml-1 rounded-lg">
                                                                    Tolak
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </template>
                                                    <td>
                                                        <template v-if="peminjaman.verifikasiPeminjaman == 'terima'">
                                                            <template v-if="peminjaman.verifikasiPengembalian == 'sudah'">
                                                                <div class="d-flex justify-content-center">
                                                                    <svg width="25" height="25" viewBox="0 0 20 20"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M19.2827 9.50738C19.2827 14.7582 15.1583 19.0148 10.0706 19.0148C4.98281 19.0148 0.858398 14.7582 0.858398 9.50738C0.858398 4.25659 4.98281 0 10.0706 0C15.1583 0 19.2827 4.25659 19.2827 9.50738ZM9.00499 14.5415L15.8398 7.4876C16.0719 7.24807 16.0719 6.85969 15.8398 6.62017L14.9993 5.75273C14.7672 5.51317 14.3909 5.51317 14.1588 5.75273L8.58472 11.5054L5.98233 8.81959C5.75024 8.58007 5.37392 8.58007 5.14179 8.81959L4.30129 9.68703C4.06921 9.92655 4.06921 10.3149 4.30129 10.5545L8.16446 14.5414C8.39658 14.781 8.77287 14.781 9.00499 14.5415Z"
                                                                            fill="#30E22C" />
                                                                    </svg>
                                                                </div>
                                                            </template>
                                                            <template v-else>
                                                                <div class="d-flex justify-content-center">
                                                                    <button type="button"
                                                                        class="btn btn-sm btn-primary font-weight-semibold rounded-lg"
                                                                        id="show-modal" @click="toggleModal(peminjaman.id)">
                                                                        Pengembalian
                                                                    </button>
                                                                </div>
                                                            </template>
                                                        </template>
                                                        <template v-else>
                                                            <div class="d-flex justify-content-center">
                                                                <button type="button"
                                                                    class="btn btn-sm btn-dark font-weight-semibold rounded-lg disabled"
                                                                    id="show-modal">
                                                                    Pengembalian
                                                                </button>
                                                            </div>
                                                        </template>
                                                    </td>
                                                </tr>
                                                <div>
                                                    <Teleport to="main">
                                                        <ModalPeminjaman :show="showModal" :idDataPeminjaman="selectedIdPeminjaman" @close="showModal = false">
                                                            <template #header>
                                                                <h5 class="text-white text-center">Pengembalian Inventory</h5>
                                                            </template>
                                                        </ModalPeminjaman>
                                                    </Teleport>
                                                </div>
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
</div></template>
