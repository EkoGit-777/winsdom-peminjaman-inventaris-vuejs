<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const user = ref({
  nik: '',
  password: '',
  konfirmasi_password:'',
  role: 'employee',
});

const employee = ref({
  nama: '',
  alamat: '',
  no_telepon: '',
  jenis_kelamin: '',
  umur: null,
});

const nikStatus = ref(false);
const passwordMismatch = ref(false);

async function register() {
  if (user.value.password === user.value.konfirmasi_password) {
    try {
      passwordMismatch.value = false;

      const userResponse = await axios.post('http://localhost:3350/auth/register', {
        NIK: user.value.nik,
        password: user.value.password,
        role: user.value.role,
      });
        nikStatus.value = false;
        const userId = userResponse.data.data.insertId;
        const employeeResponse = await axios.post('http://localhost:3350/users/employees', {
          userId: userId,
          nama: employee.value.nama,
          alamat: employee.value.alamat,
          no_hp: employee.value.no_telepon,
          jenis_kelamin: employee.value.jenis_kelamin,
          umur: employee.value.umur,
        });
        
        router.push({ name: 'login', query: { successMessage: 'Registrasi akun berhasil. Silakan login' } });
    } catch (error) {
      console.error('Error registering user:', error);
      nikStatus.value = true;
    }
  } else {
    passwordMismatch.value = true;
  }
}


// async function register() {
//   if (user.value.password === user.value.konfirmasi_password) {
//     try {
//       passwordMismatch.value = false;

//       const userResponse = await axios.post('http://localhost:3350/auth/register', {
//         NIK: user.value.nik,
//         password: user.value.password,
//         role: user.value.role,
//       });

//       if (userResponse.data.status) {
//         nikStatus.value = false;
//         const userId = userResponse.data.data.insertId;
//         const employeeResponse = await axios.post('http://localhost:3350/users/employees', {
//           userId: userId,
//           nama: employee.value.nama,
//           alamat: employee.value.alamat,
//           no_hp: employee.value.no_telepon,
//           jenis_kelamin: employee.value.jenis_kelamin,
//           umur: employee.value.umur,
//         });

//         router.push({ name: 'login', query: { successMessage: 'Registrasi akun berhasil. Silakan login' } });
//       } else {
//         nikStatus.value = true;
//       }
//     } catch (error) {
//       nikStatus.value = false;
//       console.error('Error registering user', error);
//     }
//   } else {
//     passwordMismatch.value = true;
//   }
// }
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
                <div v-if="nikStatus" class="alert alert-danger" role="alert">
                    <p class="text-center">NIK sudah digunakan</p>
                </div>
                <div v-if="passwordMismatch" class="alert alert-danger" role="alert">
                    <p class="text-center">
                        Error!!! Konfirmasi password tidak sesuai
                    </p>
                </div>
                <div class="mb-3">
                    <input v-model="employee.nama" type="text" class="form-control" id="nama" placeholder="Nama"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-3">
                    <input v-model="user.nik" type="text" class="form-control" id="nik" placeholder="NIK"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-3">
                    <input v-model="employee.alamat" type="text" class="form-control" id="alamat" placeholder="Alamat"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-3">
                    <input v-model="employee.umur" type="number" class="form-control" id="umur" placeholder="Umur"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-3">
                    <input v-model="employee.no_telepon" type="text" class="form-control" id="no-telepon" placeholder="No Telepon"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-3">
                    <select v-model="employee.jenis_kelamin" class="form-select" id="floatingSelect" placeholder="Jenis Kelamin" style="background-color: #D9D9D9;">
                        <option selected style="background-color: white;" value="">Pilih Jenis Kelamin</option>
                        <option value="pria" style="background-color: white;">pria</option>
                        <option value="wanita" style="background-color: white;">wanita</option>
                    </select>
                </div>
                <div class="mb-3">
                    <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Password" autocomplete="current-password"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="mb-4">
                    <input v-model="user.konfirmasi_password" type="password" class="form-control" id="konfirmasi-password" placeholder="Konfirmasi Password" autocomplete="current-password"
                        style="background-color: #D9D9D9;">
                </div>
                <div class="d-flex justify-content-center">
                    <button @click.prevent="register()" class="btn px-5 text-white fs-5 fw-medium" style="background-color: #1284ED;"
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