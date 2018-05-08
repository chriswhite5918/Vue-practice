<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h4 class="primary--text">{{meetup.title}}</h4>
                    </v-card-title>
                    <v-card-media :src="meetup.imageUrl" height="400px"></v-card-media>
                    <v-card-text>
                        <div class="info--text">{{meetup.date}} --where it takes place</div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores incidunt sed reprehenderit ex voluptatem eum!</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary mb-2 mr-3">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        // Using props#1
        // props: ['id']
        computed: {
            meetup() {
                // Using props#2
                // return this.$store.getters.loadedMeetup(this.id)
                return this.$store.getters.loadedMeetup(this.$route.params.id)
            }
        }
    }
</script>