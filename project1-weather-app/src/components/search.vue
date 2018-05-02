<template>
    <div>
        
        <div class="row">
            <div class="col m8 offset-m2">
                <div class="input-field">
                    <label for="search" class="label-icon">
                        <i class="material-icons indigo-text">search</i>
                    </label>
                    <input type="search" v-model="input" @keyup.enter="confirmSearch" class="center"> 
                </div>                  
            </div>
        </div>
        <transition name="slide" mode="out-in">
            <div class="row" v-if="searchFnished">
            <div class="col m8 offset-m2">
                <div class="col s12 m4">
                    <!-- Day 01 -->
                    <div class="card medium">
                        <div class="card-image">
                            <img v-bind:src="weatherPng1">
                        </div>
                        <div class="card-content">
                            <h5>今天</h5>
                            <h5>{{weatherOne.text_day}}</h5>
                            <p>最高: {{weatherOne.high}} °C</p>
                            <p>最低: {{weatherOne.low}} °C</p>
                        </div>
                        
                    </div>
                </div>
                <div class="col s12 m4">
                    <!-- Day 01 -->
                    <div class="card medium">
                        <div class="card-image">
                            <img v-bind:src="weatherPng2">
                        </div>
                        
                        <div class="card-content">
                            <h5>明天</h5>
                            <h5>{{weatherTwo.text_day}}</h5>
                            <p>最高: {{weatherTwo.high}} °C</p>
                            <p>最低: {{weatherTwo.low}} °C</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m4">
                    <!-- Day 01 -->
                    <div class="card medium">
                        <div class="card-image">
                            <img v-bind:src="weatherPng3">
                        </div>
                        <div class="card-content">
                            <h5>后天</h5>
                            <h5>{{weatherThree.text_day}}</h5>
                            <p>最高: {{weatherThree.high}} °C</p>
                            <p>最低: {{weatherThree.low}} °C</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '宣城',
                searchFnished: true,
                weatherOne: {},
                weatherTwo: {},
                weatherThree: {},
                // weatherPng: "static/0.png"   
            }
        },
        computed: {
            weatherPng1() {
                if(this.weatherOne.text_day === '晴') {
                    return "static/sunny.png"
                    this.searchFnished = true
                } else if(this.weatherOne.text_day === '多云') {
                    return "static/cloudy.png"
                } else if(this.weatherOne.text_day === '晴间多云') {
                    return "static/Partly Cloudy.png"
                } else if(this.weatherOne.text_day === '大部多云') {
                    return "static/Mostly Cloudy.png"
                } else if(this.weatherOne.text_day === '阴') {
                    return "static/Overcast.png"
                } else if(this.weatherOne.text_day === '阵雨') {
                    return "static/Shower.png"
                } else if(this.weatherOne.text_day === '雷阵雨') {
                    return "static/Thundershower.png"
                } else if(this.weatherOne.text_day === '雷阵雨伴有冰雹') {
                    return "static/Thundershower with Hail.png"
                } else if(this.weatherOne.text_day === '小雨') {
                    return "static/Light Rain.png"
                } else if(this.weatherOne.text_day === '中雨') {
                    return "static/Moderate Rain.png"
                } else if(this.weatherOne.text_day === '大雨') {
                    return "static/Heavy Rain.png"
                } else if(this.weatherOne.text_day === '暴雨') {
                    return "static/Storm.png"
                } else if(this.weatherOne.text_day === '大暴雨') {
                    return "static/Heavy Storm.png"
                } else if(this.weatherOne.text_day === '特大暴雨') {
                    return "static/Severe Storm.png"
                } else if(this.weatherOne.text_day === '冻雨') {
                    return "static/Ice Rain.png"
                } else if(this.weatherOne.text_day === '雨夹雪') {
                    return "static/Sleet.png"
                } else if(this.weatherOne.text_day === '阵雪') {
                    return "static/Snow Flurry.png"
                } else if(this.weatherOne.text_day === '小雪') {
                    return "static/Light Snow.png"
                } else if(this.weatherOne.text_day === '中雪') {
                    return "static/Moderate Snow.png"
                } else if(this.weatherOne.text_day === '大雪') {
                    return "static/Heavy Snow.png"
                } else if(this.weatherOne.text_day === '暴雪') {
                    return "static/Snowstorm.png"
                } else if(this.weatherOne.text_day === '浮尘') {
                    return "static/Dust.png"
                } else if(this.weatherOne.text_day === '扬沙') {
                    return "static/Sand.png"
                } else if(this.weatherOne.text_day === '沙尘暴') {
                    return "static/Duststorm.png"
                } else if(this.weatherOne.text_day === '强沙尘暴') {
                    return "static/Sandstorm.png"
                } else if(this.weatherOne.text_day === '雾') {
                    return "static/Foggy.png"
                } else if(this.weatherOne.text_day === '霾') {
                    return "static/Haze.png"
                } else if(this.weatherOne.text_day === '风') {
                    return "static/Windy.png"
                } else if(this.weatherOne.text_day === '大风') {
                    return "static/Blustery.png"
                } else if(this.weatherOne.text_day === '飓风') {
                    return "static/Hurricane.png"
                } else if(this.weatherOne.text_day === '热带风暴') {
                    return "static/Tropical Storm.png"
                } else if(this.weatherOne.text_day === '龙卷风') {
                    return "static/Tornado.png"
                } else if(this.weatherOne.text_day === '冷') {
                    return "static/Cold.png"
                } else if(this.weatherOne.text_day === '热') {
                    return "static/Hot.png"
                } else if(this.weatherOne.text_day === '未知') {
                    return "static/Unknown.png"
                }  
            },
            weatherPng2() {
                if(this.weatherTwo.text_day === '晴') {
                    return "static/sunny.png"
                } else if(this.weatherTwo.text_day === '多云') {
                    return "static/cloudy.png"
                } else if(this.weatherTwo.text_day === '晴间多云') {
                    return "static/Partly Cloudy.png"
                } else if(this.weatherTwo.text_day === '大部多云') {
                    return "static/Mostly Cloudy.png"
                } else if(this.weatherTwo.text_day === '阴') {
                    return "static/Overcast.png"
                } else if(this.weatherTwo.text_day === '阵雨') {
                    return "static/Shower.png"
                } else if(this.weatherTwo.text_day === '雷阵雨') {
                    return "static/Thundershower.png"
                } else if(this.weatherTwo.text_day === '雷阵雨伴有冰雹') {
                    return "static/Thundershower with Hail.png"
                } else if(this.weatherTwo.text_day === '小雨') {
                    return "static/Light Rain.png"
                } else if(this.weatherTwo.text_day === '中雨') {
                    return "static/Moderate Rain.png"
                } else if(this.weatherTwo.text_day === '大雨') {
                    return "static/Heavy Rain.png"
                } else if(this.weatherTwo.text_day === '暴雨') {
                    return "static/Storm.png"
                } else if(this.weatherTwo.text_day === '大暴雨') {
                    return "static/Heavy Storm.png"
                } else if(this.weatherTwo.text_day === '特大暴雨') {
                    return "static/Severe Storm.png"
                } else if(this.weatherTwo.text_day === '冻雨') {
                    return "static/Ice Rain.png"
                } else if(this.weatherTwo.text_day === '雨夹雪') {
                    return "static/Sleet.png"
                } else if(this.weatherTwo.text_day === '阵雪') {
                    return "static/Snow Flurry.png"
                } else if(this.weatherTwo.text_day === '小雪') {
                    return "static/Light Snow.png"
                } else if(this.weatherTwo.text_day === '中雪') {
                    return "static/Moderate Snow.png"
                } else if(this.weatherTwo.text_day === '大雪') {
                    return "static/Heavy Snow.png"
                } else if(this.weatherTwo.text_day === '暴雪') {
                    return "static/Snowstorm.png"
                } else if(this.weatherTwo.text_day === '浮尘') {
                    return "static/Dust.png"
                } else if(this.weatherTwo.text_day === '扬沙') {
                    return "static/Sand.png"
                } else if(this.weatherTwo.text_day === '沙尘暴') {
                    return "static/Duststorm.png"
                } else if(this.weatherTwo.text_day === '强沙尘暴') {
                    return "static/Sandstorm.png"
                } else if(this.weatherTwo.text_day === '雾') {
                    return "static/Foggy.png"
                } else if(this.weatherTwo.text_day === '霾') {
                    return "static/Haze.png"
                } else if(this.weatherTwo.text_day === '风') {
                    return "static/Windy.png"
                } else if(this.weatherTwo.text_day === '大风') {
                    return "static/Blustery.png"
                } else if(this.weatherTwo.text_day === '飓风') {
                    return "static/Hurricane.png"
                } else if(this.weatherTwo.text_day === '热带风暴') {
                    return "static/Tropical Storm.png"
                } else if(this.weatherTwo.text_day === '龙卷风') {
                    return "static/Tornado.png"
                } else if(this.weatherTwo.text_day === '冷') {
                    return "static/Cold.png"
                } else if(this.weatherTwo.text_day === '热') {
                    return "static/Hot.png"
                } else if(this.weatherTwo.text_day === '未知') {
                    return "static/Unknown.png"
                }  
            },
            weatherPng3() {
                if(this.weatherThree.text_day === '晴') {
                    return "static/sunny.png"
                } else if(this.weatherThree.text_day === '多云') {
                    return "static/cloudy.png"
                } else if(this.weatherThree.text_day === '晴间多云') {
                    return "static/Partly Cloudy.png"
                } else if(this.weatherThree.text_day === '大部多云') {
                    return "static/Mostly Cloudy.png"
                } else if(this.weatherThree.text_day === '阴') {
                    return "static/Overcast.png"
                } else if(this.weatherThree.text_day === '阵雨') {
                    return "static/Shower.png"
                } else if(this.weatherThree.text_day === '雷阵雨') {
                    return "static/Thundershower.png"
                } else if(this.weatherThree.text_day === '雷阵雨伴有冰雹') {
                    return "static/Thundershower with Hail.png"
                } else if(this.weatherThree.text_day === '小雨') {
                    return "static/Light Rain.png"
                } else if(this.weatherThree.text_day === '中雨') {
                    return "static/Moderate Rain.png"
                } else if(this.weatherThree.text_day === '大雨') {
                    return "static/Heavy Rain.png"
                } else if(this.weatherThree.text_day === '暴雨') {
                    return "static/Storm.png"
                } else if(this.weatherThree.text_day === '大暴雨') {
                    return "static/Heavy Storm.png"
                } else if(this.weatherThree.text_day === '特大暴雨') {
                    return "static/Severe Storm.png"
                } else if(this.weatherThree.text_day === '冻雨') {
                    return "static/Ice Rain.png"
                } else if(this.weatherThree.text_day === '雨夹雪') {
                    return "static/Sleet.png"
                } else if(this.weatherThree.text_day === '阵雪') {
                    return "static/Snow Flurry.png"
                } else if(this.weatherThree.text_day === '小雪') {
                    return "static/Light Snow.png"
                } else if(this.weatherThree.text_day === '中雪') {
                    return "static/Moderate Snow.png"
                } else if(this.weatherThree.text_day === '大雪') {
                    return "static/Heavy Snow.png"
                } else if(this.weatherThree.text_day === '暴雪') {
                    return "static/Snowstorm.png"
                } else if(this.weatherThree.text_day === '浮尘') {
                    return "static/Dust.png"
                } else if(this.weatherThree.text_day === '扬沙') {
                    return "static/Sand.png"
                } else if(this.weatherThree.text_day === '沙尘暴') {
                    return "static/Duststorm.png"
                } else if(this.weatherThree.text_day === '强沙尘暴') {
                    return "static/Sandstorm.png"
                } else if(this.weatherThree.text_day === '雾') {
                    return "static/Foggy.png"
                } else if(this.weatherThree.text_day === '霾') {
                    return "static/Haze.png"
                } else if(this.weatherThree.text_day === '风') {
                    return "static/Windy.png"
                } else if(this.weatherThree.text_day === '大风') {
                    return "static/Blustery.png"
                } else if(this.weatherThree.text_day === '飓风') {
                    return "static/Hurricane.png"
                } else if(this.weatherThree.text_day === '热带风暴') {
                    return "static/Tropical Storm.png"
                } else if(this.weatherThree.text_day === '龙卷风') {
                    return "static/Tornado.png"
                } else if(this.weatherThree.text_day === '冷') {
                    return "static/Cold.png"
                } else if(this.weatherThree.text_day === '热') {
                    return "static/Hot.png"
                } else if(this.weatherThree.text_day === '未知') {
                    return "static/Unknown.png"
                }  
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
        },
        created() {
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

</script>


<style>
    .card, .medium {
        height: 370px !important;
        border-radius: 10px
    }
    .divider {
        opacity: 0.2 !important;
    }
    .card {
        background: rgba(255,255,255,0.1) !important;
        color: white !important;
    }
    .card-content {
        max-height: 80% !important;
    }
    .card-content h5 {
        font-family: 'Muli', sans-serif !important;
        font-weight: 100 !important;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .card-content p {
        margin-top: 4px !important;
        font-size: 16px !important;
        font-weight: 280 !important;
    }
    .card-image {
        overflow: visible !important;
    }
    .card-image img {
        width: 60% !important;
        height: auto !important;
        left: 40px !important;
        top: 18px !important;
    }
    .input-field input {
        background: rgba(255, 255, 255, 0.7) !important;
        border-radius: 50px !important;
    }
    .input-field i {
        margin-left: 20px !important;
    }
    .weather-display {
        background: rgba(255, 255, 255, 0.9) !important;
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
    animation: slide-in 1.5s;
  }
  .slide-leave {
    
  }
  .slide-leave-active {
    opacity: 0;
    transition: opacity 1s;
    animation: slide-out 1.5s;
    /* Unconment this line in Component-group!!!!!
    /*position: absolute;*/
  }
  .slide-move {
    transition: transform 1.5s;
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