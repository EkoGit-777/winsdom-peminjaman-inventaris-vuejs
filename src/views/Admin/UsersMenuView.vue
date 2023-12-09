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
                                        <h1 class="h2">Users</h1>
                                    </div>
                                    <div class="col-md-6 d-flex justify-content-md-end justify-content-center">
                                        <a href="formTambahUser.html"
                                            class="btn btn-primary rounded-pill font-weight-semibold"
                                            style="height: 40px;">Tambah User</a>
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
                                                <option selected value="nik">NIK</option>
                                                <option value="nama">Nama</option>
                                                <option value="alamat">Alamat</option>
                                                <option value="no-telepon">No.Telepon</option>
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
                                                <th scope="col">NIK</th>
                                                <th scope="col">Nama</th>
                                                <th scope="col">Alamat</th>
                                                <th scope="col">No Telepon</th>
                                                <th scope="col">Jenis Kelamin</th>
                                                <th scope="col">Role</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>673218213</td>
                                                <td>Imam Mutaqin</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>083746733647</td>
                                                <td>Laki-Laki</td>
                                                <td>Employee</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/Admin/formEditUser.html"
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
                                                <td>673218213</td>
                                                <td>Imam Mutaqin</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>083746733647</td>
                                                <td>Laki-Laki</td>
                                                <td>Admin</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
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
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>673218213</td>
                                                <td>Imam Mutaqin</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>083746733647</td>
                                                <td>Laki-Laki</td>
                                                <td>Employee</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
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
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>673218213</td>
                                                <td>Imam Mutaqin</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>083746733647</td>
                                                <td>Laki-Laki</td>
                                                <td>Employee</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
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
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>673218213</td>
                                                <td>Imam Mutaqin</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>083746733647</td>
                                                <td>Laki-Laki</td>
                                                <td>Employee</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
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
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>673218213</td>
                                                <td>Imam Mutaqin</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>083746733647</td>
                                                <td>Laki-Laki</td>
                                                <td>Employee</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
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
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>673218213</td>
                                                <td>Imam Mutaqin</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>083746733647</td>
                                                <td>Laki-Laki</td>
                                                <td>Employee</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
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
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>673218213</td>
                                                <td>Imam Mutaqin</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>083746733647</td>
                                                <td>Laki-Laki</td>
                                                <td>Employee</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
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
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>673218213</td>
                                                <td>Imam Mutaqin</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>083746733647</td>
                                                <td>Laki-Laki</td>
                                                <td>Employee</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
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
                                            <tr>
                                                <th scope="row">10</th>
                                                <td>673218213</td>
                                                <td>Imam Mutaqin</td>
                                                <td>Jl. Cibaduyut No. 12, Bandung</td>
                                                <td>083746733647</td>
                                                <td>Laki-Laki</td>
                                                <td>Employee</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
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
    </div></template>
