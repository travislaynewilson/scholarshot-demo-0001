<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/main"></ion-back-button>
        </ion-buttons>
        <ion-title>Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Contact</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <p>Contact coming soon!</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
IonBackButton, 
IonContent, 
IonHeader,
IonPage, 
IonTitle, 
IonToolbar } from '@ionic/vue';
import {
  readerOutline,
  readerSharp
} from 'ionicons/icons'

export default {
  name: 'SupportContact',
  params: {
    id: {
      type: Number,
      required: true
    }
  },
  components: {
    IonBackButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {
      readerOutline,
      readerSharp
    }
  }
}
</script>