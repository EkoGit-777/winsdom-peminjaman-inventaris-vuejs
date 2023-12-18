<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    show: Boolean,
    idDataPeminjaman: Number,
})

const history = ref({
    kondisi: '',
    catatan:''
})

async function createHistory() {
    try {
        const response = await axios.post(`http://localhost:3350/histories/histories`, {
            idPeminjaman: props.idDataPeminjaman,
            tanggalPengembalian: new Date().toISOString(),
            kondisi: history.value.kondisi,
            catatan: history.value.catatan,
        })
        alert("Pengembalian berhasil terverifikasi")
    } catch (error) {
        console.log(error)
    }
}

async function updateVerifikasiPengembalian(id, value) {
    try {
        const response = await axios.put(`http://localhost:3350/peminjamans/verifikasi-pengembalian/${id}`, {
            verifikasiPengembalian: value
        })
    } catch (error) {
        console.log(error)
    }
}

const router = useRouter();
const emit = defineEmits(['close'])

function fiturPengembalian(id, value) {
    if (history.value.kondisi === '' || history.value.catatan === '') {
        alert('Kondisi dan catatan harus diisi.');
        return;
    } else {
        const userConfirmed = window.confirm("Apakah Anda yakin ingin menerima pengembalian inventaris?");
        if (userConfirmed) {
            updateVerifikasiPengembalian(id, value);
            createHistory();
            emit('close');
            router.go();
        }
    }
}
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container rounded-4 p-0 w-700px">
                <div class="modal-header">
                    <div class="row">
                        <div class="col-8 d-flex justify-content-end">
                            <slot name="header"></slot>
                        </div>
                        <div class="col-4 d-flex justify-content-end">
                            <button class="modal-default-button rounded-circle border-0" @click="$emit('close')">
                                <svg width="20" height="20" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.49045 0L0 4.49045L2.29299 6.78344L7.96178 12.5478L2.29299 18.2166L0 20.414L4.49045 25L6.78344 22.707L12.5478 16.9427L18.2166 22.707L20.414 25L25 20.414L22.707 18.2166L16.9427 12.5478L22.707 6.78344L25 4.49045L20.414 0L18.2166 2.29299L12.5478 7.96178L6.78344 2.29299L4.49045 0Z"
                                        fill="#DE0000" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-body rounded-4">
                    <slot name="body"></slot>
                        <p class="text-center font-weight-semibold"> ID Peminjaman : {{ idDataPeminjaman }}</p>
                        <form>
                            <div class="mb-4">
                                <select v-model="history.kondisi" class="form-select" id="floatingSelect"
                                    style="background-color: #D9D9D9;" required>
                                    <option selected style="background-color: white;" value="">Pilih Kondisi</option>
                                    <option value="aman" style="background-color: white;">Aman</option>
                                    <option value="rusak" style="background-color: white;">Rusak</option>
                                    <option value="hilang" style="background-color: white;">Hilang</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <textarea v-model="history.catatan" type="text" class="form-control" id="catatan"
                                    placeholder="Catatan" style="background-color: #D9D9D9; height: 120px;" required></textarea>
                            </div>
                            <div class="d-flex justify-content-md-end justify-content-center">
                                <button @click="fiturPengembalian(props.idDataPeminjaman, value = 'sudah');" type="button"
                                    class="btn px-3 text-white h-5 font-weight-semibold mr-2 rounded-pill"
                                    style="background-color: #1284ED;" onmouseover="this.style.backgroundColor='#075095'"
                                    onmouseout="this.style.backgroundColor='#1284ED'">Simpan</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
}

.modal-container {
    width: 400px;
    margin: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    background-color: white;
    border: 8px solid #1284ED;
}

.modal-header {
    margin-top: 0;
    background-color: #1284ED;
}

.modal-body {
    margin: 20px 0;
    background-color: white;
}

.modal-default-button {
    width: 40px;
    height: 40px;
    background-color: white;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>