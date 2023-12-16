<script setup>
import SidebarAdmin from '@/components/admin/SidebarAdmin.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/admin/HeaderBar.vue';
import Navbar from '@/components/Navbar.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const router = useRouter();
const userId = route.params.id;

const employee = ref('');

const getEmployeeData = async () => {
    try {
    const response = await axios.get(`http://localhost:3350/users/employees-join-users/${userId}`);
    employee.value = response.data.data[0];
  } catch (error) {
    console.error("Error fetching employee data", error.response.data);
  }
};

async function updateEmployee() {
  const response = await axios.put(`http://localhost:3350/users/employees-join-users/${userId}`, {
    nama: employee.value.nama_employee,
    alamat: employee.value.alamat,
    no_hp: employee.value.no_hp,
    jenis_kelamin: employee.value.jenis_kelamin,
    umur: employee.value.umur,
    role: employee.value.role,
  })
  alert("Data berhasil diubah")
  router.push({name: "usersAdmin"})
};

onMounted(() => {
    getEmployeeData();
});
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
                                    <h1 class="text-center font-weight-bold">EDIT USER</h1>
                                </div>
                                <form>
                                    <div class="mb-3">
                                        <input v-model="employee.nama_employee" type="text" class="form-control" id="nama" placeholder="Nama"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <input v-model="employee.alamat" type="text" class="form-control" id="alamat" placeholder="Alamat"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <input v-model="employee.no_hp" type="text" class="form-control" id="no-telepon" placeholder="No Telepon"
                                            style="background-color: #D9D9D9;">
                                    </div>
                                    <div class="mb-3">
                                        <select v-model="employee.jenis_kelamin" class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                                            <option selected style="background-color: white;" value="">Pilih Jenis Kelamin</option>
                                            <option value="pria" style="background-color: white;">Pria</option>
                                            <option value="wanita" style="background-color: white;">Wanita</option>
                                        </select>
                                    </div>
                                    <div class="mb-4">
                                        <select v-model="employee.role" class="form-select" id="floatingSelect" style="background-color: #D9D9D9;">
                                            <option selected style="background-color: white;" value="">Pilih Role</option>
                                            <option value="employee" style="background-color: white;">Employee</option>
                                            <option value="admin" style="background-color: white;">Admin</option>
                                        </select>
                                    </div>
                                    <div class="d-flex justify-content-md-end justify-content-center">
                                        <button @click="updateEmployee" type="button" class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill" style="background-color: #1284ED;"
                                            onmouseover="this.style.backgroundColor='#075095'"
                                            onmouseout="this.style.backgroundColor='#1284ED'">Simpan</button>
                                        <RouterLink to="/admin/users" type="login" class="btn px-4 text-white h-5 font-weight-semibold ml-2 rounded-pill" style="background-color: #ED1212E5;"
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