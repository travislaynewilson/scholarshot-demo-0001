<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/main"></ion-back-button>
        </ion-buttons>
        <ion-title>Article {{$route.params.id}}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Article {{$route.params.id}}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <p>Article {{$route.params.id}} coming soon!</p>
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
  name: 'SupportArticle',
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