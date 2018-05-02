<template>
    <div>
        
        <div class="row">
                <div class="col m8 offset-m2">
                    <div class="input-field">
                        <label for="search" class="label-icon">
                            <i class="material-icons">search</i>
                        </label>
                        <input type="search" v-model="input" @keyup.enter="confirmSearch" class="center"> 
                    </div>
                    <transition name="slide" mode="out-in">
                        <ul class="collection with-header" v-if="searchFnished">
                            <li class="collection-header weather-display"><h5>今天</h5> </li>
                            <li class="collection-item weather-display">{{weatherOne.text_day}}</li>
                            <li class="collection-item weather-display">白天最高气温 {{weatherOne.high}} 摄氏度</li>
                            <li class="collection-item weather-display">夜间最低气温 {{weatherOne.low}} 摄氏度</li>
                            <li class="collection-item weather-display">---</li>
                            <li class="collection-header weather-display"><h5>明天</h5> </li>
                            <li class="collection-item weather-display">{{weatherTwo.text_day}}</li>
                            <li class="collection-item weather-display">白天最高气温 {{weatherTwo.high}} 摄氏度</li>
                            <li class="collection-item weather-display">夜间最低气温 {{weatherTwo.low}} 摄氏度</li>
                            <li class="collection-item weather-display">---</li>
                            <li class="collection-header weather-display"><h5>后天</h5> </li>
                            <li class="collection-item weather-display">{{weatherThree.text_day}}</li>
                            <li class="collection-item weather-display">白天最高气温 {{weatherThree.high}} 摄氏度</li>
                            <li class="collection-item weather-display">夜间最低气温 {{weatherThree.low}} 摄氏度</li>
                            <li class="collection-item weather-display">---</li>
                        </ul>
                    </transition>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                searchFnished: false,
                weatherOne: {},
                weatherTwo: {},
                weatherThree: {}
            }
        },
        methods: {
            confirmSearch() {
                this.searchFnished = false
                this.$http.get(`https://api.seniverse.com/v3/weather/daily.json?key=bozw3rxxe7y9ova1&location=${this.input}&language=zh-Hans&unit=c&start=0&days=5`).then((res) => {
                    console.log(res.body.results[0].now)
                    this.weatherOne = res.body.results[0].daily[0]
                    this.weatherTwo = res.body.results[0].daily[1]
                    this.weatherThree = res.body.results[0].daily[2]
                    // console.log(this.weatherStatus)
                    this.searchFnished = true
                })
            }
        }
        
    }
</script>

<style>
    .input-field input {
        opacity: 0.8 !important
    }
    .weather-display {
        opacity: 0.7;
    }
      /* Fade */
  .fade-enter {
    opacity:0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {

  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity:0;
  }

   /* Slide */
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    transition: opacity 1s;
    animation: slide-in 1s;
  }
  .slide-leave {
    
  }
  .slide-leave-active {
    opacity: 0;
    transition: opacity 1s;
    animation: slide-out 1s;
    /* Unconment this line in Component-group!!!!!
    /*position: absolute;*/
  }
  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>