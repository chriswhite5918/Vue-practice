<template>
  <div>
    <transition name="fade" appear>
      <div class="container">
        <h1>Vue Animation</h1>
        <hr>
        <br>
        <select v-model="selectedTransition" class="form-control">
          <option value="fade">fade</option>
          <option value="slide">slide</option>
        </select>
        <br>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br><br>
        <!--Transition-->
        <transition :name="selectedTransition">
          <div class="alert alert-info" v-if="show">This is alert-info</div>
        </transition>
        <transition :name="selectedTransition">
          <div class="alert alert-info" v-if="show">This is alert-info</div>
        </transition>
        <transition :name="selectedTransition">
          <div class="alert alert-info" v-if="show">This is alert-info</div>
        </transition>

        <!--<transition :name="selectedTransition" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is alert-info</div>
          <div class="alert alert-warning" v-else key="warning">This is alert-info</div>
        </transition>-->

        <!--Animation CSS From Animation CSS.COM-->
        <!--<transition name="animated bounce 1s">
          <div class="alert alert-warning" v-if="show">This is alert-info</div>
        </transition>-->
        <hr v-if="show">
        <button class="btn btn-secondary" @click="load = !load">Load / Remove Element</button>
        <br><br>
        <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false">
          <div style="width:300px; height:100px; background: lightgreen" v-if="load"></div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert': selectedComponent = 'app-success-alert'">Toggle Components</button>
        <br><br>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <!--Transition-Group-->
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br><br>
        <ul class="list-group">
          <transition-group name="slide">
            <li class="list-group-item" v-for="(number,index) in numbers" @click="removeItem(index)" style="cursor: pointer" :key="number">{{ number }}</li>
          </transition-group>
        </ul>
      </div>
    </transition>
    <div style="margin-top:1000px;"></div>
  </div>
</template>

<script>
import DangerAlert from './DangerAlert.vue';
import SuccessAlert from './SuccessAlert.vue';
export default {
  data () {
    return {
      show: false,
      load: true,
      selectedTransition: 'fade',
      elementwidth: 100,
      selectedComponent: 'app-success-alert',
      numbers: [1,2,3,4,5]
    }
  },
  components: {
    'app-danger-alert': DangerAlert,
    'app-success-alert': SuccessAlert
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
      this.elementwidth = 100;
      el.style.width = this.elementwidth + 'px';
    },
    enter(el, done) {
      console.log('enter');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementwidth + round * 10) + 'px';
        round ++;
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    enterCancelled(el) {
      console.log('enterCancelled');
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      this.elementwidth = 300;
      el.style.width = this.elementwidth + 'px';
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementwidth - round * 10) + 'px';
        round ++;
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
    },
    leaveCancelled(el) {
      console.log('leaveCancelled');
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index,1);
    }
  }
}
</script>

<style>
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
