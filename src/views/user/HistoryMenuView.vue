<script setup>
import SidebarUser from '@/components/user/SidebarUser.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/user/HeaderBar.vue';
import Navbar from '@/components/Navbar.vue';
import Modal from '@/components/user/Modal.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
    <Navbar />

    <div class="container-fluid">
        <div class="row">

            <SidebarUser />

            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-2 pb-4">
                <div class="row pt-2 ">

                    <HeaderBar />

                    <div class="mb-4 mb-lg-0">
                        <div class="card"
                            style="background-color: #FAF3F3; box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-md-6 d-flex justify-content-md-start justify-content-center">
                                        <h1 class="h2">History</h1>
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
                                            <p class="mr-2">Search :</p>

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
                                                <th scope="col">No.</th>
                                                <th scope="col">ID Peminjaman</th>
                                                <th scope="col">Nama Inventory</th>
                                                <th scope="col">Tanggal Peminjaman</th>
                                                <th scope="col">Tanggal Pengembalian</th>
                                                <th scope="col">Kondisi</th>
                                                <th scope="col">Catatan</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>2223</td>
                                                <td>Obeng</td>
                                                <td>20/12/2023 - 25/12/2023</td>
                                                <td>25/12/2023</td>
                                                <td><span class="mr-1">Aman</span><svg width="25" height="25"
                                                        viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4243 9.50738C18.4243 14.7582 14.2999 19.0148 9.21216 19.0148C4.12441 19.0148 0 14.7582 0 9.50738C0 4.25659 4.12441 0 9.21216 0C14.2999 0 18.4243 4.25659 18.4243 9.50738ZM8.14659 14.5415L14.9814 7.4876C15.2135 7.24807 15.2135 6.85969 14.9814 6.62017L14.1409 5.75273C13.9088 5.51317 13.5325 5.51317 13.3004 5.75273L7.72633 11.5054L5.12393 8.81959C4.89184 8.58007 4.51552 8.58007 4.28339 8.81959L3.4429 9.68703C3.21081 9.92655 3.21081 10.3149 3.4429 10.5545L7.30606 14.5414C7.53818 14.781 7.91447 14.781 8.14659 14.5415Z"
                                                            fill="#30E22C" />
                                                    </svg> </td>

                                                <td><Button class="btn btn-sm" id="show-modal" @click="showModal = true">
                                                        <svg width="25" height="25" viewBox="0 0 27 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M13.4333 0C5 0 0 10 0 10C0 10 5 20 13.4333 20C21.6667 20 26.6667 10 26.6667 10C26.6667 10 21.6667 0 13.4333 0ZM13.3333 3.33333C17.0333 3.33333 20 6.33333 20 10C20 13.7 17.0333 16.6667 13.3333 16.6667C9.66667 16.6667 6.66667 13.7 6.66667 10C6.66667 6.33333 9.66667 3.33333 13.3333 3.33333ZM13.3333 6.66667C11.5 6.66667 10 8.16667 10 10C10 11.8333 11.5 13.3333 13.3333 13.3333C15.1667 13.3333 16.6667 11.8333 16.6667 10C16.6667 9.66667 16.5333 9.36667 16.4667 9.06667C16.2 9.6 15.6667 10 15 10C14.0667 10 13.3333 9.26667 13.3333 8.33333C13.3333 7.66667 13.7333 7.13333 14.2667 6.86667C13.9667 6.76667 13.6667 6.66667 13.3333 6.66667Z"
                                                                fill="black" />
                                                        </svg>
                                                    </button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>2224</td>
                                                <td>Bor</td>
                                                <td>20/12/2023 - 25/12/2023</td>
                                                <td>27/12/2023</td>
                                                <td><span class="mr-1">Rusak</span><svg width="25" height="25"
                                                        viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3.10154 0.25V1.42188H10.5862L11.2371 0.25H3.10154ZM3.25017 2.125C3.41849 2.55074 3.04111 3.28609 2.88783 3.63234C2.45791 4.5973 1.76564 5.88242 1.24642 7.36008C0.72728 8.83773 0.378765 10.5189 0.654624 12.2866C0.930523 14.0543 1.83892 15.8943 3.76244 17.6575L3.86326 17.75H14.1367L14.2375 17.6575C16.161 15.8943 17.0694 14.0543 17.3453 12.2866C17.6212 10.5189 17.2727 8.83773 16.7535 7.36004C16.2344 5.88242 15.542 4.5973 15.1121 3.6323C14.9373 3.23988 14.8097 2.89984 14.7483 2.64121L11.8141 4.01906L14.2765 5.28059L12.8598 8.34531L15.2786 9.09551L9.28166 14.4928L11.8588 9.95687L9.58537 9.83297L11.45 6.0707L8.59025 5.01531L10.1957 2.125H3.25017Z"
                                                            fill="#D0AF01" />
                                                    </svg> </td>
                                                <td><Button class="btn btn-sm" id="show-modal" @click="showModal = true">
                                                        <svg width="25" height="25" viewBox="0 0 27 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M13.4333 0C5 0 0 10 0 10C0 10 5 20 13.4333 20C21.6667 20 26.6667 10 26.6667 10C26.6667 10 21.6667 0 13.4333 0ZM13.3333 3.33333C17.0333 3.33333 20 6.33333 20 10C20 13.7 17.0333 16.6667 13.3333 16.6667C9.66667 16.6667 6.66667 13.7 6.66667 10C6.66667 6.33333 9.66667 3.33333 13.3333 3.33333ZM13.3333 6.66667C11.5 6.66667 10 8.16667 10 10C10 11.8333 11.5 13.3333 13.3333 13.3333C15.1667 13.3333 16.6667 11.8333 16.6667 10C16.6667 9.66667 16.5333 9.36667 16.4667 9.06667C16.2 9.6 15.6667 10 15 10C14.0667 10 13.3333 9.26667 13.3333 8.33333C13.3333 7.66667 13.7333 7.13333 14.2667 6.86667C13.9667 6.76667 13.6667 6.66667 13.3333 6.66667Z"
                                                                fill="black" />
                                                        </svg>
                                                    </button></td>

                                            </tr>

                                            <tr>
                                                <th scope="row">3</th>
                                                <td>2225</td>
                                                <td>Gunting</td>
                                                <td>20/12/2023 - 25/12/2023</td>
                                                <td>25/12/2023</td>
                                                <td><span class="mr-1">Hilang</span><svg width="25" height="25"
                                                        viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path xmlns="http://www.w3.org/2000/svg"
                                                            d="M9 0C4.0275 0 0 4.475 0 10C0 15.525 4.0275 20 9 20C13.9725 20 18 15.525 18 10C18 4.475 13.9725 0 9 0ZM5.625 4.45L9 8.2L12.375 4.45L13.995 6.25L10.62 10L13.995 13.75L12.375 15.55L9 11.8L5.625 15.55L4.005 13.75L7.38 10L4.005 6.25L5.625 4.45Z"
                                                            fill="#FB0000" />
                                                    </svg> </td>

                                                <td><Button class="btn btn-sm" id="show-modal" @click="showModal = true">
                                                        <svg width="25" height="25" viewBox="0 0 27 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M13.4333 0C5 0 0 10 0 10C0 10 5 20 13.4333 20C21.6667 20 26.6667 10 26.6667 10C26.6667 10 21.6667 0 13.4333 0ZM13.3333 3.33333C17.0333 3.33333 20 6.33333 20 10C20 13.7 17.0333 16.6667 13.3333 16.6667C9.66667 16.6667 6.66667 13.7 6.66667 10C6.66667 6.33333 9.66667 3.33333 13.3333 3.33333ZM13.3333 6.66667C11.5 6.66667 10 8.16667 10 10C10 11.8333 11.5 13.3333 13.3333 13.3333C15.1667 13.3333 16.6667 11.8333 16.6667 10C16.6667 9.66667 16.5333 9.36667 16.4667 9.06667C16.2 9.6 15.6667 10 15 10C14.0667 10 13.3333 9.26667 13.3333 8.33333C13.3333 7.66667 13.7333 7.13333 14.2667 6.86667C13.9667 6.76667 13.6667 6.66667 13.3333 6.66667Z"
                                                                fill="black" />
                                                        </svg>
                                                    </button></td>
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
                <h3 class="text-white">Catatan</h3>
            </template>
            <template #body>
                <p class="text-center">Terjadi kerusakan pada mata bor</p>
            </template>
        </modal>
    </Teleport>
</template>
