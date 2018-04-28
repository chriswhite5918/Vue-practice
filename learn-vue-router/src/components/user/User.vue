<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateHome" class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
        methods: {
            navigateHome() {
                // Not Using Name
                // this.$router.push('/')

                // Using Name
                this.$router.push({name: 'home'})
            }
        }
    }
</script>