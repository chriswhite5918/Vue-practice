<template>
    <v-container>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" color="info">
                    Explore Meetups
                </v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetup/new" color="info">
                    Organize Meetup
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-3">
            <v-flex xs12>
                <v-carousel style="cursor: pointer">
                    <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id" @click.native="onLoadMeetup(meetup.id)">
                        <div class="title">
                            {{meetup.title}}
                        </div>
                    </v-carousel-item> 
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout class="mt-2">
            <v-flex xs12 class="text-xs-center display-1" >
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default{
        computed: {
            meetups() {
                return this.$store.getters.featuredMeetups
            }
        },
        methods: {
            onLoadMeetup(id) {
                // alert(id)
                this.$router.push('/meetups/' + id);
            }
        }
    }
</script>

<style scoped>
    .title {
        color: white;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 50%;
        transform: translateX(-50%);
        font-size: 4em;
        padding: 20px;
    } 
</style>