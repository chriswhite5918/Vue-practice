export const weatherPng1 = function() {
  if (this.weatherOne.text_day === '晴') {
    return 'static/sunny.png';
  } else if (this.weatherOne.text_day === '多云') {
    return 'static/cloudy.png';
  } else if (this.weatherOne.text_day === '晴间多云') {
    return 'static/Partly Cloudy.png';
  } else if (this.weatherOne.text_day === '大部多云') {
    return 'static/Mostly Cloudy.png';
  } else if (this.weatherOne.text_day === '阴') {
    return 'static/Overcast.png';
  } else if (this.weatherOne.text_day === '阵雨') {
    return 'static/Shower.png';
  } else if (this.weatherOne.text_day === '雷阵雨') {
    return 'static/Thundershower.png';
  } else if (this.weatherOne.text_day === '雷阵雨伴有冰雹') {
    return 'static/Thundershower with Hail.png';
  } else if (this.weatherOne.text_day === '小雨') {
    return 'static/Light Rain.png';
  } else if (this.weatherOne.text_day === '中雨') {
    return 'static/Moderate Rain.png';
  } else if (this.weatherOne.text_day === '大雨') {
    return 'static/Heavy Rain.png';
  } else if (this.weatherOne.text_day === '暴雨') {
    return 'static/Storm.png';
  } else if (this.weatherOne.text_day === '大暴雨') {
    return 'static/Heavy Storm.png';
  } else if (this.weatherOne.text_day === '特大暴雨') {
    return 'static/Severe Storm.png';
  } else if (this.weatherOne.text_day === '冻雨') {
    return 'static/Ice Rain.png';
  } else if (this.weatherOne.text_day === '雨夹雪') {
    return 'static/Sleet.png';
  } else if (this.weatherOne.text_day === '阵雪') {
    return 'static/Snow Flurry.png';
  } else if (this.weatherOne.text_day === '小雪') {
    return 'static/Light Snow.png';
  } else if (this.weatherOne.text_day === '中雪') {
    return 'static/Moderate Snow.png';
  } else if (this.weatherOne.text_day === '大雪') {
    return 'static/Heavy Snow.png';
  } else if (this.weatherOne.text_day === '暴雪') {
    return 'static/Snowstorm.png';
  } else if (this.weatherOne.text_day === '浮尘') {
    return 'static/Dust.png';
  } else if (this.weatherOne.text_day === '扬沙') {
    return 'static/Sand.png';
  } else if (this.weatherOne.text_day === '沙尘暴') {
    return 'static/Duststorm.png';
  } else if (this.weatherOne.text_day === '强沙尘暴') {
    return 'static/Sandstorm.png';
  } else if (this.weatherOne.text_day === '雾') {
    return 'static/Foggy.png';
  } else if (this.weatherOne.text_day === '霾') {
    return 'static/Haze.png';
  } else if (this.weatherOne.text_day === '风') {
    return 'static/Windy.png';
  } else if (this.weatherOne.text_day === '大风') {
    return 'static/Blustery.png';
  } else if (this.weatherOne.text_day === '飓风') {
    return 'static/Hurricane.png';
  } else if (this.weatherOne.text_day === '热带风暴') {
    return 'static/Tropical Storm.png';
  } else if (this.weatherOne.text_day === '龙卷风') {
    return 'static/Tornado.png';
  } else if (this.weatherOne.text_day === '冷') {
    return 'static/Cold.png';
  } else if (this.weatherOne.text_day === '热') {
    return 'static/Hot.png';
  } else if (this.weatherOne.text_day === '未知') {
    return 'static/Unknown.png';
  }
};
