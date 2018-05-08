<template>
    <v-container>
        <v-layout row wrap>
            <v-flex XS12 sm6 offset-sm3>
                <h2 class="primary--text">Create a new Meetup</h2>
            </v-flex>
        </v-layout>
        <!--Title-->
        <v-layout row wrap>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field :rules="[() => title.length > 0 || 'This field is required']" v-model="title" name="title" label="Title" id="title" required></v-text-field>
                        </v-flex>
                    </v-layout>     
                    <!--Location--> 
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field :rules="[() => location.length > 0 || 'This field is required']" v-model="location" name="location" label="Location" id="location" required></v-text-field>
                        </v-flex>
                    </v-layout>         
                    <!--ImageUrl-->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field :rules="[() => imageUrl.length > 0 || 'This field is required']" v-model="imageUrl" name="imageUrl" label="Image Url" id="image-url" required></v-text-field>
                        </v-flex>
                    </v-layout> 
                    <!--Image-->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="250">
                        </v-flex>
                    </v-layout>
                    <!--Description-->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field :rules="[() => despcription.length > 0 || 'This field is required']" v-model="despcription" name="despcription" label="Despcription" id="despcription" required multi-line></v-text-field>
                        </v-flex>
                    </v-layout>
                    <!--Description-->
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn class="primary" :disabled="!formIsValid" type="submit">Create Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        despcription: ''
      }
    },
    computed: {
        formIsValid() {
            return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.despcription !== ''
        }
    },
    methods: {
        onCreateMeetup() { 
            if(!this.formIsValid) {
                return
            }
            const meetupData = {
                title: this.title,
                location: this.location,
                imageUrl: this.imageUrl,
                despcription: this.despcription,
                date: new Date() 
            }
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/meetups')
        }
    }
  }
</script>