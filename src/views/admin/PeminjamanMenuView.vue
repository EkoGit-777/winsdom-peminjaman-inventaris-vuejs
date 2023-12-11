<script setup>
import SidebarAdmin from '@/components/admin/SidebarAdmin.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import Navbar from '@/components/Navbar.vue';
import Modal from '@/components/admin/Modal.vue'
import { ref } from 'vue'

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
                                                <th scope="col">Nama</th>
                                                <th scope="col">No Telepon</th>
                                                <th scope="col">Pinjam</th>
                                                <th scope="col">Tanggal Peminjaman</th>
                                                <th scope="col">Verifikasi Peminjaman</th>
                                                <th scope="col">Verifikasi Pengembalian</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Imam mutaqin</td>
                                                <td>088218102939</td>
                                                <td>Obeng</td>
                                                <td>20/12/2023 - 25/12/2023</td>
                                                <td class="text-success font-weight-bold">Diterima</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
                                                        <Button
                                                            class="btn btn-sm btn-primary font-weight-semibold rounded-lg"
                                                            id="show-modal" @click="showModal = true">
                                                            Pengembalian
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Indah</td>
                                                <td>088218102939</td>
                                                <td>Gunting</td>
                                                <td>25/12/2023 - 26/12/2023</td>
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
                                                <td>
                                                    <div class="d-flex justify-content-center">
                                                        <Button
                                                            class="btn btn-sm btn-dark font-weight-semibold rounded-lg disabled"
                                                            id="show-modal" @click="showModal = true">
                                                            Pengembalian
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
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
                            style="background-color: #D9D9D9;"></textarea>
                    </div>
                    <div class="d-flex justify-content-md-end justify-content-center">
                        <a href="/" type="login" class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill"
                            style="background-color: #1284ED;" onmouseover="this.style.backgroundColor='#075095'"
                            onmouseout="this.style.backgroundColor='#1284ED'">Simpan</a>
                    </div>
                </form>
            </template>
    </modal>
</Teleport></template>
