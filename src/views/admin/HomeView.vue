<script setup>
import SidebarAdmin from '@/components/admin/SidebarAdmin.vue';
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

                    <div class="mb-4 mb-lg-0">
                        <h3 class="mb-3 text-center text-md-left" style="color: #1284ED; font-weight: bold;">Halo, Sandi Prayogo</h3>
                        <div class="card"
                            style="background-color: #FAF3F3; box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <div class="card text-white" style="background-color: #BBB1B1; box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);" >
                                            <div class="card-body">
                                                <h5 class="card-title mb-4">Barang Dipinjam</h5>
                                                <p class="card-text">100
                                                    <span><svg width="50" height="50" viewBox="0 0 58 58" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3.19653 35.1625H54.342V22.3762H3.19653V35.1625ZM15.9829 27.1711H38.3591V30.3676H15.9829V27.1711ZM9.58972 27.1711H12.7863V30.3676H9.58972V27.1711Z"
                                                            fill="black" />
                                                        <path
                                                            d="M51.1454 6.39319H6.39313C5.54534 6.39319 4.73227 6.72997 4.13279 7.32945C3.53332 7.92893 3.19653 8.74199 3.19653 9.58978V19.1796H54.342V9.58978C54.342 8.74199 54.0053 7.92893 53.4058 7.32945C52.8063 6.72997 51.9932 6.39319 51.1454 6.39319ZM12.7863 14.3847H9.58972V11.1881H12.7863V14.3847ZM38.3591 14.3847H15.9829V11.1881H38.3591V14.3847Z"
                                                            fill="black" />
                                                        <path
                                                            d="M3.19653 47.9489C3.19653 48.7967 3.53332 49.6098 4.13279 50.2092C4.73227 50.8087 5.54534 51.1455 6.39313 51.1455H51.1454C51.9932 51.1455 52.8063 50.8087 53.4058 50.2092C54.0053 49.6098 54.342 48.7967 54.342 47.9489V38.3591H3.19653V47.9489ZM15.9829 43.154H38.3591V46.3506H15.9829V43.154ZM9.58972 43.154H12.7863V46.3506H9.58972V43.154Z"
                                                            fill="black" />
                                                    </svg></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <div class="card text-white" style="background-color: #BBB1B1; box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);" >
                                            <div class="card-body">
                                                <h5 class="card-title mb-4">Barang Selesai</h5>
                                                <p class="card-text">50
                                                    <span><svg width="50" height="50" viewBox="0 0 58 58" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3.19653 35.1625H54.342V22.3762H3.19653V35.1625ZM15.9829 27.1711H38.3591V30.3676H15.9829V27.1711ZM9.58972 27.1711H12.7863V30.3676H9.58972V27.1711Z"
                                                            fill="black" />
                                                        <path
                                                            d="M51.1454 6.39319H6.39313C5.54534 6.39319 4.73227 6.72997 4.13279 7.32945C3.53332 7.92893 3.19653 8.74199 3.19653 9.58978V19.1796H54.342V9.58978C54.342 8.74199 54.0053 7.92893 53.4058 7.32945C52.8063 6.72997 51.9932 6.39319 51.1454 6.39319ZM12.7863 14.3847H9.58972V11.1881H12.7863V14.3847ZM38.3591 14.3847H15.9829V11.1881H38.3591V14.3847Z"
                                                            fill="black" />
                                                        <path
                                                            d="M3.19653 47.9489C3.19653 48.7967 3.53332 49.6098 4.13279 50.2092C4.73227 50.8087 5.54534 51.1455 6.39313 51.1455H51.1454C51.9932 51.1455 52.8063 50.8087 53.4058 50.2092C54.0053 49.6098 54.342 48.7967 54.342 47.9489V38.3591H3.19653V47.9489ZM15.9829 43.154H38.3591V46.3506H15.9829V43.154ZM9.58972 43.154H12.7863V46.3506H9.58972V43.154Z"
                                                            fill="black" />
                                                    </svg></span>
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-4">
                                        <div class="card text-white" style="background-color: #BBB1B1; box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);" >
                                            <div class="card-body">
                                                <h5 class="card-title mb-4">Total Barang</h5>
                                                <p class="card-text">500
                                                    <span><svg width="50" height="50" viewBox="0 0 58 58" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3.19653 35.1625H54.342V22.3762H3.19653V35.1625ZM15.9829 27.1711H38.3591V30.3676H15.9829V27.1711ZM9.58972 27.1711H12.7863V30.3676H9.58972V27.1711Z"
                                                            fill="black" />
                                                        <path
                                                            d="M51.1454 6.39319H6.39313C5.54534 6.39319 4.73227 6.72997 4.13279 7.32945C3.53332 7.92893 3.19653 8.74199 3.19653 9.58978V19.1796H54.342V9.58978C54.342 8.74199 54.0053 7.92893 53.4058 7.32945C52.8063 6.72997 51.9932 6.39319 51.1454 6.39319ZM12.7863 14.3847H9.58972V11.1881H12.7863V14.3847ZM38.3591 14.3847H15.9829V11.1881H38.3591V14.3847Z"
                                                            fill="black" />
                                                        <path
                                                            d="M3.19653 47.9489C3.19653 48.7967 3.53332 49.6098 4.13279 50.2092C4.73227 50.8087 5.54534 51.1455 6.39313 51.1455H51.1454C51.9932 51.1455 52.8063 50.8087 53.4058 50.2092C54.0053 49.6098 54.342 48.7967 54.342 47.9489V38.3591H3.19653V47.9489ZM15.9829 43.154H38.3591V46.3506H15.9829V43.154ZM9.58972 43.154H12.7863V46.3506H9.58972V43.154Z"
                                                            fill="black" />
                                                    </svg></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 class="mb-3" style="color: #1284ED; font-weight: bold;">Profile Static</h4>

                                    <div class="col-md-12 mb-3">
                                        <div class="card text-white" style="background-color: #BBB1B1; box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);" >
                                            <div class="card-body">
                                                <img src="@/assets/images/strechoq-1.png" alt="logo" class="img-fluid mx-auto d-block">
                                            </div>
                                        </div>
                                    </div>
                                    
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
