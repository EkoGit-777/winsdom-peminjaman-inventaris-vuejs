<template>
    <div class="min-vh-100 d-flex justify-content-center align-items-center">
        <div class="container w-700px">
            <div class="mb-5 mb-3">
                <img src="@/assets/images/logo-winsdom.png" alt="logo" class="mx-auto d-block"
                    style="width: auto; height: 150px;">
            </div>
            <form>
                <div class="mb-3">
                    <h1 class="text-center fw-bold">LOGIN</h1>
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="nik" placeholder="NIK"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-2">
                    <input type="password" class="form-control" id="password" placeholder="Password"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="d-flex justify-content-end mb-2">
                    <a href="/" class="text-decoration-none fs-6 fw-semibold">
                        <p>Lupa kata sandi ?</p>
                    </a>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn px-5 text-white fs-5 fw-medium" style="background-color: #1284ED;"
                        onmouseover="this.style.backgroundColor='#075095'"
                        onmouseout="this.style.backgroundColor='#1284ED'">Masuk</button>
                </div>
            </form>
            <div class="d-flex justify-content-center mt-3">
                <RouterLink to="/registration" class="btn px-5 text-white fs-5 fw-medium"
                    style="background-color: #0cc10c;" onmouseover="this.style.backgroundColor='#058905'"
                    onmouseout="this.style.backgroundColor='#0cc10c'">Daftar</RouterLink>
            </div>
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