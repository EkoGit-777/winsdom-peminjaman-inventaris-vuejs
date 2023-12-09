<script setup>
import SidebarAdmin from '@/components/Admin/SidebarAdmin.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import Navbar from '@/components/Navbar.vue';
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
                                        <h1 class="h2">Inventory</h1>
                                    </div>
                                    <div class="col-md-6 d-flex justify-content-md-end justify-content-center">
                                        <a href="/Admin/formTambahInventory.html"
                                            class="btn btn-primary rounded-pill font-weight-semibold"
                                            style="height: 40px;">Tambah Inventory</a>
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
                                                <option selected value="nik">ID</option>
                                                <option value="nama">Nama</option>
                                                <option value="alamat">Status</option>
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
                                                <th scope="col">ID Inventory</th>
                                                <th scope="col">Nama</th>
                                                <th scope="col">Kategori</th>
                                                <th scope="col">Alamat</th>
                                                <th scope="col">Deskripsi</th>
                                                <th scope="col">Status</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>B01</td>
                                                <td>Bor</td>
                                                <td>Barang</td>
                                                <td>Jl. Bogor No.12</td>
                                                <td>Hadapi tugas bor Anda dengan kehanda...</td>
                                                <td>
                                                    <div class="d-flex justify-content-center align-items-center">
                                                        <span class="mr-1">Disewa</span>
                                                        <svg width="20" height="20" viewBox="0 0 17 22" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M2.19173 0C1.45536 0 0.858398 0.615608 0.858398 1.375C0.858398 2.13439 1.45536 2.75 2.19173 2.75V4.36091C2.19173 5.45493 2.61316 6.50414 3.36331 7.27772L6.97279 11L3.36331 14.7223C2.61316 15.4958 2.19173 16.5451 2.19173 17.639V19.25C1.45536 19.25 0.858398 19.8656 0.858398 20.625C0.858398 21.3844 1.45536 22 2.19173 22H15.5251C16.2615 22 16.8584 21.3844 16.8584 20.625C16.8584 19.8656 16.2615 19.25 15.5251 19.25V17.639C15.5251 16.5451 15.1036 15.4958 14.3535 14.7223L10.744 11L14.3535 7.27772C15.1036 6.50414 15.5251 5.45493 15.5251 4.36091V2.75C16.2615 2.75 16.8584 2.13439 16.8584 1.375C16.8584 0.615608 16.2615 0 15.5251 0H2.19173ZM12.8584 2.75H4.8584V4.36091C4.8584 4.72559 4.99888 5.07532 5.24892 5.33319L5.41068 5.5H12.3061L12.4679 5.33319C12.7179 5.07532 12.8584 4.72559 12.8584 4.36091V2.75ZM8.8584 12.9445L5.24892 16.6668C4.99888 16.9247 4.8584 17.2744 4.8584 17.639V19.25H12.8584V17.639C12.8584 17.2744 12.7179 16.9247 12.4679 16.6668L8.8584 12.9445Z"
                                                                fill="black" />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="detailInventory.html" class="text-decoration-none mr-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20"
                                                                viewBox="0 0 28 20" fill="none">
                                                                <path
                                                                    d="M14.2917 0C5.8584 0 0.858398 10 0.858398 10C0.858398 10 5.8584 20 14.2917 20C22.5251 20 27.5251 10 27.5251 10C27.5251 10 22.5251 0 14.2917 0ZM14.1917 3.33333C17.8917 3.33333 20.8584 6.33333 20.8584 10C20.8584 13.7 17.8917 16.6667 14.1917 16.6667C10.5251 16.6667 7.52506 13.7 7.52506 10C7.52506 6.33333 10.5251 3.33333 14.1917 3.33333ZM14.1917 6.66667C12.3584 6.66667 10.8584 8.16667 10.8584 10C10.8584 11.8333 12.3584 13.3333 14.1917 13.3333C16.0251 13.3333 17.5251 11.8333 17.5251 10C17.5251 9.66667 17.3917 9.36667 17.3251 9.06667C17.0584 9.6 16.5251 10 15.8584 10C14.9251 10 14.1917 9.26667 14.1917 8.33333C14.1917 7.66667 14.5917 7.13333 15.1251 6.86667C14.8251 6.76667 14.5251 6.66667 14.1917 6.66667Z"
                                                                    fill="black" />
                                                            </svg>
                                                        </a>
                                                        <a href="/Admin/formTambahInventory.html"
                                                            class="text-decoration-none mr-2">
                                                            <svg width="25" height="25" viewBox="0 0 21 20" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.66758 2.7929H4.41758C2.67788 2.7929 1.26758 4.13605 1.26758 5.7929V15.793C1.26758 17.4498 2.67788 18.793 4.41758 18.793H14.9176C16.6573 18.793 18.0676 17.4498 18.0676 15.793L18.0676 10.7929M6.51758 13.7929L10.3378 13.0598C10.5406 13.0209 10.7268 12.9258 10.8731 12.7864L19.425 4.63722C19.8351 4.24651 19.8348 3.61318 19.4244 3.2228L17.6128 1.4994C17.2026 1.10918 16.538 1.10945 16.1281 1.5L7.57524 9.65004C7.42928 9.78913 7.32962 9.96611 7.28872 10.1589L6.51758 13.7929Z"
                                                                    stroke="#C0A103" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#" class="text-decoration-none ml-2">
                                                            <svg width="25" height="25" viewBox="0 0 21 19" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M2.1001 4.27505H18.9001M7.3501 1.42505H13.6501M8.4001 13.7751V8.07505M12.6001 13.7751V8.07505M14.1751 17.5751H6.8251C5.6653 17.5751 4.7251 16.7244 4.7251 15.6751L4.24567 5.2646C4.22081 4.72488 4.69771 4.27505 5.29476 4.27505H15.7054C16.3025 4.27505 16.7794 4.72488 16.7545 5.2646L16.2751 15.6751C16.2751 16.7244 15.3349 17.5751 14.1751 17.5751Z"
                                                                    stroke="red" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>B02</td>
                                                <td>Proyektor</td>
                                                <td>Barang</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>Hadirkannya Proyektor HD Profesional ....</td>
                                                <td>
                                                    <div class="d-flex justify-content-center align-items-center">
                                                        <span class="mr-1">Tersedia</span>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M19.2827 9.50738C19.2827 14.7582 15.1583 19.0148 10.0706 19.0148C4.98281 19.0148 0.858398 14.7582 0.858398 9.50738C0.858398 4.25659 4.98281 0 10.0706 0C15.1583 0 19.2827 4.25659 19.2827 9.50738ZM9.00499 14.5415L15.8398 7.4876C16.0719 7.24807 16.0719 6.85969 15.8398 6.62017L14.9993 5.75273C14.7672 5.51317 14.3909 5.51317 14.1588 5.75273L8.58472 11.5054L5.98233 8.81959C5.75024 8.58007 5.37392 8.58007 5.14179 8.81959L4.30129 9.68703C4.06921 9.92655 4.06921 10.3149 4.30129 10.5545L8.16446 14.5414C8.39658 14.781 8.77287 14.781 9.00499 14.5415Z"
                                                                fill="#30E22C" />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="detailInventory.html" class="text-decoration-none mr-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20"
                                                                viewBox="0 0 28 20" fill="none">
                                                                <path
                                                                    d="M14.2917 0C5.8584 0 0.858398 10 0.858398 10C0.858398 10 5.8584 20 14.2917 20C22.5251 20 27.5251 10 27.5251 10C27.5251 10 22.5251 0 14.2917 0ZM14.1917 3.33333C17.8917 3.33333 20.8584 6.33333 20.8584 10C20.8584 13.7 17.8917 16.6667 14.1917 16.6667C10.5251 16.6667 7.52506 13.7 7.52506 10C7.52506 6.33333 10.5251 3.33333 14.1917 3.33333ZM14.1917 6.66667C12.3584 6.66667 10.8584 8.16667 10.8584 10C10.8584 11.8333 12.3584 13.3333 14.1917 13.3333C16.0251 13.3333 17.5251 11.8333 17.5251 10C17.5251 9.66667 17.3917 9.36667 17.3251 9.06667C17.0584 9.6 16.5251 10 15.8584 10C14.9251 10 14.1917 9.26667 14.1917 8.33333C14.1917 7.66667 14.5917 7.13333 15.1251 6.86667C14.8251 6.76667 14.5251 6.66667 14.1917 6.66667Z"
                                                                    fill="black" />
                                                            </svg>
                                                        </a>
                                                        <a href="#" class="text-decoration-none mr-2">
                                                            <svg width="25" height="25" viewBox="0 0 21 20" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.66758 2.7929H4.41758C2.67788 2.7929 1.26758 4.13605 1.26758 5.7929V15.793C1.26758 17.4498 2.67788 18.793 4.41758 18.793H14.9176C16.6573 18.793 18.0676 17.4498 18.0676 15.793L18.0676 10.7929M6.51758 13.7929L10.3378 13.0598C10.5406 13.0209 10.7268 12.9258 10.8731 12.7864L19.425 4.63722C19.8351 4.24651 19.8348 3.61318 19.4244 3.2228L17.6128 1.4994C17.2026 1.10918 16.538 1.10945 16.1281 1.5L7.57524 9.65004C7.42928 9.78913 7.32962 9.96611 7.28872 10.1589L6.51758 13.7929Z"
                                                                    stroke="#C0A103" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#" class="text-decoration-none ml-2">
                                                            <svg width="25" height="25" viewBox="0 0 21 19" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M2.1001 4.27505H18.9001M7.3501 1.42505H13.6501M8.4001 13.7751V8.07505M12.6001 13.7751V8.07505M14.1751 17.5751H6.8251C5.6653 17.5751 4.7251 16.7244 4.7251 15.6751L4.24567 5.2646C4.22081 4.72488 4.69771 4.27505 5.29476 4.27505H15.7054C16.3025 4.27505 16.7794 4.72488 16.7545 5.2646L16.2751 15.6751C16.2751 16.7244 15.3349 17.5751 14.1751 17.5751Z"
                                                                    stroke="red" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
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
</template>
