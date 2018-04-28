<template>
    <div>
        <h2 class="white-text">External API Search Box</h2>
        <div class="input-field">
            <input type="search" v-model="search" placeholder="Search" class="center"> 
        </div>
        <div class="contents grey darken-1 card" v-for="blog in filteredBlogs">
            <h4 class="black-text text-lighten-1">{{ blog.title }}</h4>
            <p>{{ blog.body }}</p>
            
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                blogs:[],
                search: ''
            }
        },
        computed: {
             filteredBlogs() {
                 return this.blogs.filter(blog => blog.title.match(this.search))
             }
        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts').then(data => this.blogs = data.body)
        }
    };
</script>

<style>
    .contents {
        padding: 20px;
        margin: 20px;
    }
    
</style>