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

                    <div class="mb-4 mb-lg-0 d-flex justify-content-center align-content-center">
                        <div class="card border-0"
                            style="background-color: #00000000;">
                            <div class="card-body w-700px">

                                <div class="d-flex justify-content-center align-items-center mb-2 mb-3">
                                    <svg width="127" height="90" viewBox="0 0 96 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.6875 62.25C17.9453 60.3669 28.5197 51.7014 31.6186 51.7014H64.3834C68.8739 51.7014 78.0407 58.8845 80.3125 61.4166M95 36C95 55.33 73.9574 71 48 71C22.0426 71 1 55.33 1 36C1 16.67 22.0426 1 48 1C73.9574 1 95 16.67 95 36ZM64.836 24.0707C64.836 17.3933 57.2664 11.9375 48.0014 11.9375C38.7367 11.9375 31.1668 17.3933 31.1668 24.0707C31.1668 30.7481 38.7367 36.2039 48.0014 36.2039C57.2662 36.2039 64.836 30.7481 64.836 24.0707Z" stroke="black" stroke-width="2" />
                                    </svg>
                                </div>
                                

                                <div class="mb-3">
                                    <h1 class="text-center font-weight-bold">Form Peminjaman</h1>
                                </div>
                                <form>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="nik" placeholder="Nama"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="alamat" placeholder="Tanggal Mulai Peminjaman"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="alamat" placeholder="Tanggal Selesai peminjaman"
                                            style="background-color: #D9D9D9;">
                                    </div>

                                    <div class="d-flex justify-content-md-end justify-content-center">
                                        <a href=""  class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill" style="background-color: #1284ED;"
                                            onmouseover="this.style.backgroundColor='#075095'"
                                            onmouseout="this.style.backgroundColor='#1284ED'">Simpan</a>
                                        <RouterLink to="/inventory"  class="btn px-4 text-white h-5 font-weight-semibold ml-2 rounded-pill" style="background-color: #ED1212E5;"
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
