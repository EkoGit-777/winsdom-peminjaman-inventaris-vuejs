<script setup>
import SidebarUser from '@/components/user/SidebarUser.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/user/HeaderBar.vue';
import Navbar from '@/components/Navbar.vue';
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
                        <div class="card" style="
                  background-color: #faf3f3;
                  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
                ">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-md-6 d-flex justify-content-md-start justify-content-center">
                                        <h1 class="h2">Inventory</h1>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                                        <p>Show</p>
                                        <select class="form-select form-select-sm mx-2" style="width: 55px">
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
                                            <input type="text" style="height: 30px" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <div class="card text-black" style="
                          background-color: #d9d9d9;
                          box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);
                        ">
                                            <!-- Konten card -->

                                            <div class="col-md-9 mb-1 mt-3 mx-auto">
                                                <div class="card text-white" style="
                              background-color: #ffffff;
                              box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);
                            ">
                                                    <div class="card-body">
                                                        <img src='@/assets/images/proyektor-1.png' alt="logo"
                                                            class="img-fluid mx-auto d-block" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card-body">
                                                <!-- Nama Proyektor -->
                                                <h2 class="card-title text-center mb-4 font-weight-bold">
                                                    Proyektor
                                                </h2>

                                                <!-- Deskripsi Proyektor -->
                                                <p class="card-text">
                                                    <strong>Deskripsi: </strong>
                                                    <span class="d-block mt-1">
                                                        Hadirkan proyektor HD professional untuk
                                                        Presentasi dan hiburan
                                                    </span>
                                                </p>

                                                <!-- Kategori Proyektor -->
                                                <p class="card-text">
                                                    <strong>Kategori:</strong>
                                                    <span class="d-block mt-1"> Barang </span>
                                                </p>

                                                <!-- Lokasi Proyektor -->
                                                <p class="card-text">
                                                    <strong>Lokasi:</strong>
                                                    <span class="d-block mt-1">
                                                        LT 2 Gedung Admin
                                                    </span>
                                                </p>

                                                <!-- Status Proyektor -->
                                                <p class="card-text">
                                                    <strong>Status:</strong>
                                                    <span class="d-block mt-1">
                                                        Tersedia
                                                        <svg width="25" height="25" viewBox="0 0 19 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M18.4243 9.50738C18.4243 14.7582 14.2999 19.0148 9.21216 19.0148C4.12441 19.0148 0 14.7582 0 9.50738C0 4.25659 4.12441 0 9.21216 0C14.2999 0 18.4243 4.25659 18.4243 9.50738ZM8.14659 14.5415L14.9814 7.4876C15.2135 7.24807 15.2135 6.85969 14.9814 6.62017L14.1409 5.75273C13.9088 5.51317 13.5325 5.51317 13.3004 5.75273L7.72633 11.5054L5.12393 8.81959C4.89184 8.58007 4.51552 8.58007 4.28339 8.81959L3.4429 9.68703C3.21081 9.92655 3.21081 10.3149 3.4429 10.5545L7.30606 14.5414C7.53818 14.781 7.91447 14.781 8.14659 14.5415Z"
                                                                fill="#30E22C" />
                                                        </svg>
                                                    </span>
                                                </p>

                                                <div class="d-flex justify-content-md-end justify-content-center">
                                                    <a href=""
                                                        class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill"
                                                        style="background-color: #1284ed"
                                                        onmouseover="this.style.backgroundColor='#075095'"
                                                        onmouseout="this.style.backgroundColor='#1284ED'">Detail</a>
                                                    <RouterLink to="/inventory/form-peminjaman"
                                                        class="btn px-3 text-white h-5 font-weight-semibold ml-2 rounded-pill"
                                                        style="background-color: #30e22c"
                                                        onmouseover="this.style.backgroundColor='#1F9D1D'"
                                                        onmouseout="this.style.backgroundColor='#30E22C'">Pinjam</RouterLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 mb-3">
                                        <div class="card text-black" style="
                          background-color: #d9d9d9;
                          box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);
                        ">
                                            <!-- Konten card -->

                                            <div class="col-md-9 mb-1 mt-3 mx-auto">
                                                <div class="card text-white" style="
                              background-color: #ffffff;
                              box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);
                            ">
                                                    <div class="card-body">
                                                        <img src='@/assets/images/proyektor-1.png' alt="logo"
                                                            class="img-fluid mx-auto d-block" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card-body">
                                                <!-- Nama Proyektor -->
                                                <h2 class="card-title text-center mb-4 font-weight-bold">
                                                    Gunting
                                                </h2>

                                                <!-- Deskripsi Proyektor -->
                                                <p class="card-text">
                                                    <strong>Deskripsi: </strong>
                                                    <span class="d-block mt-1">
                                                        Hadirkan proyektor HD professional untuk
                                                        Presentasi dan hiburan
                                                    </span>
                                                </p>

                                                <!-- Kategori Proyektor -->
                                                <p class="card-text">
                                                    <strong>Kategori:</strong>
                                                    <span class="d-block mt-1"> Barang </span>
                                                </p>

                                                <!-- Lokasi Proyektor -->
                                                <p class="card-text">
                                                    <strong>Lokasi:</strong>
                                                    <span class="d-block mt-1">
                                                        LT 2 Gedung Admin
                                                    </span>
                                                </p>

                                                <!-- Status Proyektor -->
                                                <p class="card-text">
                                                    <strong>Status:</strong>
                                                    <span class="d-block mt-1">
                                                        Disewa
                                                        <svg width="25" height="25" viewBox="0 0 18 22" fill="none">
                                                            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M1.7792 0C0.964855 0 0.304688 0.615608 0.304688 1.375C0.304688 2.13439 0.964855 2.75 1.7792 2.75V4.36091C1.7792 5.45493 2.24525 6.50414 3.07482 7.27772L7.06648 11L3.07482 14.7223C2.24525 15.4958 1.7792 16.5451 1.7792 17.639V19.25C0.964855 19.25 0.304688 19.8656 0.304688 20.625C0.304688 21.3844 0.964855 22 1.7792 22H16.5243C17.3387 22 17.9988 21.3844 17.9988 20.625C17.9988 19.8656 17.3387 19.25 16.5243 19.25V17.639C16.5243 16.5451 16.0582 15.4958 15.2286 14.7223L11.237 11L15.2286 7.27772C16.0582 6.50414 16.5243 5.45493 16.5243 4.36091V2.75C17.3387 2.75 17.9988 2.13439 17.9988 1.375C17.9988 0.615608 17.3387 0 16.5243 0H1.7792ZM13.5753 2.75H4.72822V4.36091C4.72822 4.72559 4.88357 5.07532 5.16009 5.33319L5.33897 5.5H12.9645L13.1434 5.33319C13.4199 5.07532 13.5753 4.72559 13.5753 4.36091V2.75ZM9.15175 12.9445L5.16009 16.6668C4.88357 16.9247 4.72822 17.2744 4.72822 17.639V19.25H13.5753V17.639C13.5753 17.2744 13.4199 16.9247 13.1434 16.6668L9.15175 12.9445Z"
                                                                fill="black" />
                                                        </svg>
                                                    </span>
                                                </p>

                                                <div class="d-flex justify-content-md-end justify-content-center">
                                                    <a href=""
                                                        class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill"
                                                        style="background-color: #1284ed"
                                                        onmouseover="this.style.backgroundColor='#075095'"
                                                        onmouseout="this.style.backgroundColor='#1284ED'">Detail</a>
                                                    <a href=""
                                                        class="disabled btn px-3 text-white h-5 font-weight-semibold ml-2 rounded-pill"
                                                        style="background-color: #ed1212e5"
                                                        onmouseover="this.style.backgroundColor='#9E0202E5'"
                                                        onmouseout="this.style.backgroundColor='#ED1212E5'">Tidak
                                                        Tersedia</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 mb-3">
                                        <div class="card text-black" style="
                          background-color: #d9d9d9;
                          box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);
                        ">
                                            <!-- Konten card -->

                                            <div class="col-md-9 mb-1 mt-3 mx-auto">
                                                <div class="card text-white" style="
                              background-color: #ffffff;
                              box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);
                            ">
                                                    <div class="card-body">
                                                        <img src='@/assets/images/proyektor-1.png' alt="logo"
                                                            class="img-fluid mx-auto d-block" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card-body">
                                                <!-- Nama Proyektor -->
                                                <h2 class="card-title text-center mb-4 font-weight-bold">
                                                    Bor
                                                </h2>

                                                <!-- Deskripsi Proyektor -->
                                                <p class="card-text">
                                                    <strong>Deskripsi: </strong>
                                                    <span class="d-block mt-1">
                                                        Hadirkan proyektor HD professional untuk
                                                        Presentasi dan hiburan
                                                    </span>
                                                </p>

                                                <!-- Kategori Proyektor -->
                                                <p class="card-text">
                                                    <strong>Kategori:</strong>
                                                    <span class="d-block mt-1"> Barang </span>
                                                </p>

                                                <!-- Lokasi Proyektor -->
                                                <p class="card-text">
                                                    <strong>Lokasi:</strong>
                                                    <span class="d-block mt-1">
                                                        LT 2 Gedung Admin
                                                    </span>
                                                </p>

                                                <!-- Status Proyektor -->
                                                <p class="card-text">
                                                    <strong>Status:</strong>
                                                    <span class="d-block mt-1">
                                                        Disewa
                                                        <svg width="25" height="25" viewBox="0 0 18 22" fill="none">
                                                            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M1.7792 0C0.964855 0 0.304688 0.615608 0.304688 1.375C0.304688 2.13439 0.964855 2.75 1.7792 2.75V4.36091C1.7792 5.45493 2.24525 6.50414 3.07482 7.27772L7.06648 11L3.07482 14.7223C2.24525 15.4958 1.7792 16.5451 1.7792 17.639V19.25C0.964855 19.25 0.304688 19.8656 0.304688 20.625C0.304688 21.3844 0.964855 22 1.7792 22H16.5243C17.3387 22 17.9988 21.3844 17.9988 20.625C17.9988 19.8656 17.3387 19.25 16.5243 19.25V17.639C16.5243 16.5451 16.0582 15.4958 15.2286 14.7223L11.237 11L15.2286 7.27772C16.0582 6.50414 16.5243 5.45493 16.5243 4.36091V2.75C17.3387 2.75 17.9988 2.13439 17.9988 1.375C17.9988 0.615608 17.3387 0 16.5243 0H1.7792ZM13.5753 2.75H4.72822V4.36091C4.72822 4.72559 4.88357 5.07532 5.16009 5.33319L5.33897 5.5H12.9645L13.1434 5.33319C13.4199 5.07532 13.5753 4.72559 13.5753 4.36091V2.75ZM9.15175 12.9445L5.16009 16.6668C4.88357 16.9247 4.72822 17.2744 4.72822 17.639V19.25H13.5753V17.639C13.5753 17.2744 13.4199 16.9247 13.1434 16.6668L9.15175 12.9445Z"
                                                                fill="black" />
                                                        </svg>
                                                    </span>
                                                </p>
                                                <div class="d-flex justify-content-md-end justify-content-center">
                                                    <a href=""
                                                        class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill"
                                                        style="background-color: #1284ed"
                                                        onmouseover="this.style.backgroundColor='#075095'"
                                                        onmouseout="this.style.backgroundColor='#1284ED'">Detail</a>
                                                    <a href=""
                                                        class="disabled btn px-3 text-white h-5 font-weight-semibold ml-2 rounded-pill"
                                                        style="background-color: #ed1212e5"
                                                        onmouseover="this.style.backgroundColor='#9E0202E5'"
                                                        onmouseout="this.style.backgroundColor='#ED1212E5'">Tidak
                                                        Tersedia</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
