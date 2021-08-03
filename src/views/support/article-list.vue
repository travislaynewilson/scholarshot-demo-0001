<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/main"></ion-back-button>
        </ion-buttons>
        <ion-title>Support</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Support</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-list lines="full">
          <ion-item detail lines="inset" :router-link="{ name: 'support-article', params: { id: 1 } }">
            <ion-icon slot="start" :ios="readerOutline" :md="readerSharp" />
            <ion-label>How do I do this?</ion-label>
          </ion-item>

          <ion-item detail lines="inset" :router-link="{ name: 'support-article', params: { id: 2 } }">
            <ion-icon slot="start" :ios="readerOutline" :md="readerSharp" />
            <ion-label>Where do I find something?</ion-label>
          </ion-item>

          <ion-item detail lines="inset" :router-link="{ name: 'support-article', params: { id: 3 } }">
            <ion-icon slot="start" :ios="readerOutline" :md="readerSharp" />
            <ion-label>What is even going on?</ion-label>
          </ion-item>

          <ion-item detail lines="inset" :router-link="{ name: 'support-article', params: { id: 4 } }">
            <ion-icon slot="start" :ios="readerOutline" :md="readerSharp" />
            <ion-label>Terms and conditions</ion-label>
          </ion-item>

          <ion-item detail lines="none" :router-link="{ name: 'support-article', params: { id: 5 } }">
            <ion-icon slot="start" :ios="readerOutline" :md="readerSharp" />
            <ion-label>Privacy policy</ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
IonBackButton, 
IonContent, 
IonHeader, 
IonIcon,
IonItem, 
IonLabel,
IonList,
IonPage, 
IonTitle, 
IonToolbar } from '@ionic/vue';
import {
  readerOutline,
  readerSharp
} from 'ionicons/icons'

export default {
  name: 'SupportArticleList',
  components: {
    IonBackButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem, 
    IonLabel,
    IonList,
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