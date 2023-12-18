<script setup>
const props = defineProps({
    img: String,
});
</script>

<template>
    <div class="pt-2">
        <div class="d-flex justify-content-center">
            <img :src="'http://localhost:3350/uploads/images/' + props.img" class="img" />
        </div>
        <!-- <div class="d-flex justify-content-between mt-2 mx-auto card-img-list">
            <img src="@/assets/images/proyektor-1.png" class="img-list img-active" />
            <img src="@/assets/images/proyektor-2.png" class="img-list" />
            <img src="@/assets/images/proyektor-3.png" class="img-list" />
            <img src="@/assets/images/proyektor-4.png" class="img-list" />
        </div> -->
    </div>
</template>
<style>
.img {
    width: 720px;
    height: 500px;
    border-radius: 10px;
    object-fit: cover;
}

.img-list {
    width: 120px;
    height: 80px;
    border-radius: 10px;
    object-fit: cover;
}
.img-active {
    border-color: #4e73df;
    border: 5px solid #1284ED;
}
.card-img-list {
    width: 500px;
}

@media (max-width: 992px) {
    .img {
        width: 550px;
        height: 300px;
    }

    .img-list {
        width: 120px;
        height: 80px;
    }

    .card-img-list {
        width: 520px;
    }
}

@media (max-width: 768px) {
    .img {
        width: 300px;
        height: 200px;
    }

    .img-list {
        width: 70px;
        height: 50px;
    }

    .card-img-list {
        width: 300px;
    }
}
</style>