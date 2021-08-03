<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <div class="object" />
          <div class="content">
            <h1>What is GapApp?</h1>      
            <p> 
              Make sure the school you choose fits you financially and academically. Get a degree, don't be a dropout!
            </p>
          </div>
        </ion-slide>

        <ion-slide>
          <div class="object" />
          <div class="content">
            <h1>100% Free</h1>      
            <p> 
              The GapApp is quick, it's easy and it's free. Get results in about 20 seconds.
            </p>
          </div>
        </ion-slide>

        <ion-slide>
          <div class="object" />
          <div class="content">
            <h1>It's your future. Know before you go.</h1>
            <p> 
              Tens of thousands of Texas high school graduates enroll in college not knowing their financial or academic gaps. 
              Don't be one of them. Know before you go!
            </p>
            <ion-button :router-link="{ name: 'login' }" router-direction="root" color="secondary">
              Get Started
              <ion-icon slot="end" :ios="arrowForwardOutline" :md="arrowForwardOutline" />
            </ion-button>
            </div>
        </ion-slide>
      </ion-slides>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  IonSlide, 
  IonSlides } from '@ionic/vue';
  import {
    arrowForwardOutline
  } from 'ionicons/icons'

export default {
  name: 'Intro',
  components: {
    IonButton,
    IonContent,
    IonIcon,
    IonPage,
    IonSlide,
    IonSlides
  },
  setup() {
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };

    return { 
      arrowForwardOutline,
      slideOpts 
    }
  }
}
</script>

<style lang="scss" scoped>
ion-slides { height: 100%; }

ion-slide { flex-direction: column; 
  .object { width: 70vw; height: 70vw; margin-bottom: 48px; border-radius: 50%; background-color: gray;  }
  .content { padding: 0 48px; }
}
</style>