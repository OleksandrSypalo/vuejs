<template>
    <b-container id="app">
        <div class="row justify-content-center">
            <div class="col-12 margin-bottom-1rem">
                <component-navbar></component-navbar>
            </div>
            <div class="col-12 margin-bottom-1rem">
                <router-view></router-view>
            </div>
        </div>
    </b-container>
</template>

<script></script>

<style>
.margin-bottom-1rem {
    margin-bottom: 1rem;
}
</style>
