<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>  
        <p>Number of clicks: {{ stringCounter }}</p>
        <p>OurOwn Computed Property: {{ ourOwn }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ]),
            ourOwn() {
                return this.$store.state.counter
            }
        }
    }
</script>