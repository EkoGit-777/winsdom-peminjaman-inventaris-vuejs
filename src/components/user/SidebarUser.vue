<script setup>
import DashboardMenuIcon from '../icons/DashboardMenuIcon.vue';
import HistoryMenuIcon from '../icons/HistoryMenuIcon.vue';
import InventoryMenuIcon from '../icons/InventoryMenuIcon.vue';
import PeminjamanMenuIcon from '../icons/PeminjamanMenuIcon.vue';
import UsersMenuIcon from '../icons/UsersMenuIcon.vue';
</script>

<template>
    <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block sidebar collapse" style="background-color: #1284ED;">
        <div class="position-sticky">
            <div class="d-none d-md-block">
                <a class="d-flex justify-content-center mt-3 mb-4" href="#">
                    <div class="bg-light rounded-circle p-2" style="width: 150px; height: 150px;">
                        <img src="@/assets/images/logo-winsdom.png" alt="logo" class="mx-auto d-block"
                            style="width: auto; height: 130px;">
                    </div>
                </a>
            </div>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/Admin/menuHome.html">
                        <DashboardMenuIcon/>
                        <span class="ml-2 text-white font-weight-bold h5">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Admin/menuHistory.html">
                        <HistoryMenuIcon/>
                        <span class="ml-2 text-white font-weight-bold h5">History</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/menuPeminjaman.html">
                        <PeminjamanMenuIcon/>
                        <span class="ml-2 text-white font-weight-bold h5">Peminjaman</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/menuInventory.html">
                        <InventoryMenuIcon/>
                        <span class="ml-2 text-white font-weight-bold h5">Inventory</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    z-index: 99;
}
.w-700px {
    width: 700px;
}
.font-weight-semibold {
    font-weight: 600 !important;
}
.sidebar .nav-link {
    color: #333;
}

.sidebar .nav-link.active {
    color: #0d6efd;
}
.navbar {
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .1);
}

@media screen and (max-width: 992px) {
    .w-700px {
        width: 500px;
    }
}

@media (max-width: 768px) {
    .sidebar {
        top: 11.5rem;
        padding: 0;
    }
    .w-700px {
        width: 300px;
    }
}

@media (min-width: 768px) {
    .navbar {
        top: 0;
        position: sticky;
        z-index: 999;
    }
}
</style>