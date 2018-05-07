<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3 >
                                <v-card-media src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&h=350" height="130px"></v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h4 class="headline mb-0">My Meetup</h4>
                                        <div>17th Jyly 2017</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat to="meetups/1"> 
                                    <v-icon left>arrow_forward</v-icon>
                                    View Meetup</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default{
    }
</script>
