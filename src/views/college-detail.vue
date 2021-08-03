<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/main/colleges"></ion-back-button>
        </ion-buttons>
        <ion-title>College</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">College</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <p>College detail coming soon!</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonBackButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar } from '@ionic/vue';

export default {
  name: 'CollegeDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonBackButton,
    IonPage,
    IonTitle,
    IonToolbar
  }
}
</script>

<style lang="scss" scoped>

</style>