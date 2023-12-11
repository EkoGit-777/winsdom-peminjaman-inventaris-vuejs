<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
        <div class="min-vh-100 d-flex justify-content-center align-items-center py-5">
        <div class="container w-700px">
            <div class="mb-5 mb-3">
                <img src="@/assets/images/logo-winsdom.png" alt="logo" class="mx-auto d-block"
                    style="width: auto; height: 150px;">
            </div>
            <form>
                <div class="mb-3">
                    <h1 class="text-center fw-bold">REGISTRATION</h1>
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="nama" placeholder="Nama"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="nik" placeholder="NIK"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="alamat" placeholder="Alamat"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="no-telepon" placeholder="NIK"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-3">
                    <select class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                        <option selected style="background-color: white;" value="">Pilih Jenis Kelamin</option>
                        <option value="pria" style="background-color: white;">pria</option>
                        <option value="wanita" style="background-color: white;">wanita</option>
                    </select>
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="password" placeholder="Password"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-4">
                    <input type="text" class="form-control" id="konfirmasi-password" placeholder="Konfirmasi Password"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn px-5 text-white fs-5 fw-medium" style="background-color: #1284ED;"
                        onmouseover="this.style.backgroundColor='#075095'"
                        onmouseout="this.style.backgroundColor='#1284ED'">Registrasi</button>
                </div>
                <div class="d-flex justify-content-center">
                    <p class="fs-6">Sudah punya akun ? <RouterLink to="/login"
                            class="text-decoration-none fw-bold">Masuk</RouterLink></p>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.w-700px {
    width: 700px;
}

@media screen and (max-width: 992px) {
    .w-700px {
        width: 500px;
    }
}

@media screen and (max-width: 768px) {
    .w-700px {
        width: 300px;
    }
}
</style>