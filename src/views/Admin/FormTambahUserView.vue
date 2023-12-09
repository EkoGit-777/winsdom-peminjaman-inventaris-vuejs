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

                    <div class="mb-4 mb-lg-0 d-flex justify-content-center align-content-center">
                        <div class="card border-0"
                            style="background-color: #00000000;">
                            <div class="card-body w-700px">
                                <div class="mb-3">
                                    <h1 class="text-center font-weight-bold">TAMBAH USER</h1>
                                </div>
                                <form>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="nik" placeholder="NIK"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="nama" placeholder="Nama"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="alamat" placeholder="Alamat"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="no-telepon" placeholder="No Telepon"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <select class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                                            <option selected style="background-color: white;" value="">Pilih Jenis Kelamin</option>
                                            <option value="laki-laki" style="background-color: white;">Laki-Laki</option>
                                            <option value="perempuan" style="background-color: white;">Perempuan</option>
                                        </select>
                                    </div>
                                    <div class="mb-4">
                                        <select class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                                            <option selected style="background-color: white;" value="">Pilih Role</option>
                                            <option value="laki-laki" style="background-color: white;">Employee</option>
                                            <option value="perempuan" style="background-color: white;">Admin</option>
                                        </select>
                                    </div>
                                    <div class="d-flex justify-content-md-end justify-content-center">
                                        <a href="/" type="login" class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill" style="background-color: #1284ED;"
                                            onmouseover="this.style.backgroundColor='#075095'"
                                            onmouseout="this.style.backgroundColor='#1284ED'">Simpan</a>
                                        <RouterLink to="/admin/users" class="btn px-4 text-white h-5 font-weight-semibold ml-2 rounded-pill" style="background-color: #ED1212E5;"
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
