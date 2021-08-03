<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/main/colleges"></ion-back-button>
        </ion-buttons>
        <ion-title>Ask an expert</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ask an expert</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <p>Ask an expert coming soon!</p>
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
  name: 'AskExpert',
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
}
</script>

<style lang="scss" scoped>

</style>