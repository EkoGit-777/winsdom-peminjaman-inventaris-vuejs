<script setup>
import SidebarAdmin from '@/components/admin/SidebarAdmin.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeaderBar from '@/components/admin/HeaderBar.vue';
import ImageGallery from '@/components/ImageGallery.vue';
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const inventoryId = route.params.id;
const inventory = ref(false);

async function getInventoryData() {
    try {
        const response = await axios.get(`http://localhost:3350/masters/inventories/${inventoryId}`)
        console.log(response.data)
        inventory.value = response.data.data[0];
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getInventoryData()
})

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
                        <div class="card" style="background-color: #FAF3F3; box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                            <div class="card-body">
                                <div class="d-flex justify-content-center">
                                    <h1 class="h1 font-weight-bold">{{inventory.nama_barang }}</h1>
                                </div>
                                <div class="mt-3 h6 lh-base">
                                    {{ inventory.deskripsi }}
                                </div>
                                
                                <ImageGallery/>

                            </div>
                        </div>
                    </div>
                    <!-- <div class="mb-4 mb-lg-0">
                        <div class="card" style="background-color: #FAF3F3; box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                            <div class="card-body">
                                <div class="d-flex justify-content-center">
                                    <h1 class="h1 font-weight-bold">Proyektor</h1>
                                </div>
                                <div class="mt-3 h6 lh-base">
                                    <p>Hadirkannya Proyektor HD Profesional kami akan membawa pengalaman presentasi dan
                                        hiburan Anda ke dimensi baru. Dengan kualitas gambar yang luar biasa dan desain
                                        yang
                                        intuitif, proyektor ini cocok untuk berbagai keperluan, mulai dari presentasi
                                        bisnis
                                        hingga malam film keluarga. Fitur Utama: </p>
                                    <ol type="1">
                                        <li>Resolusi HD Tinggi: Nikmati gambar yang tajam dan jernih dengan resolusi
                                            tinggi untuk presentasi yang mengesankan dan
                                            hiburan berkualitas.</li>
                                        <li>Kecerahan yang Tinggi: Didesain dengan kecerahan tinggi untuk
                                            memastikan gambar tetap terlihat jelas, bahkan dalam kondisi pencahayaan
                                            yang
                                            terang.</li>
                                        <li> Konektivitas Universal: Dilengkapi dengan port HDMI, USB, dan VGA,
                                            memungkinkan koneksi mudah ke berbagai perangkat seperti laptop, tablet, dan
                                            perangkat penyimpanan eksternal.</li>
                                        <li>Proyeksi Serbaguna: Ideal untuk presentasi bisnis,
                                            film, slideshow, atau bahkan game, memberikan fleksibilitas tanpa batas.
                                        </li>
                                        <li>Desain Portabel: Ringan dan mudah dibawa, memudahkan pengaturan di berbagai
                                            lokasi tanpa
                                            kesulitan.</li>
                                        <li> Teknologi Dukungan 3D: Pengalaman hiburan yang mendalam dengan dukungan
                                            proyeksi 3D untuk film atau presentasi yang lebih dinamis.</li>
                                    </ol>
                                </div>
                                
                                <ImageGallery/>

                            </div>
                        </div>
                    </div> -->
                </div>
            </main>

            <FooterSection />

        </div>
    </div>
</template>