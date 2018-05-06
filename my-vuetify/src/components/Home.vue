<template>
    <v-container>
        <v-layout row wrap>
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
    </v-container>
</template>

<script>
    export default{
    }
</script>
