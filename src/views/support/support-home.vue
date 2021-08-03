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
          <ion-list-header>
            <ion-label color="secondary">Popular articles</ion-label>
          </ion-list-header>

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

          <ion-item lines="none" :router-link="{ name: 'support-article-list' }" >
            <ion-icon slot="start" />
            <ion-label>
              <p>Browse all articles</p>
            </ion-label>
          </ion-item>
        </ion-list>

        <ion-list lines="full">
          <ion-list-header>
            <ion-label color="secondary">Need more help?</ion-label>
          </ion-list-header>

          <ion-item detail lines="none" :router-link="{ name: 'contact' }">
            <ion-icon slot="start" :ios="helpBuoyOutline" :md="helpBuoySharp" />
            <ion-label>
              <h2>Contact us</h2>
              <p>Tell us more and we'll help you get there</p>
            </ion-label>
          </ion-item>

          <ion-item detail lines="none" :router-link="{ name: 'feedback' }">
            <ion-icon slot="start" :ios="chatbubbleOutline" :md="chatbubbleSharp" />
            <ion-label>Send feedback</ion-label>
          </ion-item>
        </ion-list>
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
IonIcon,
IonItem, 
IonLabel,
IonList,
IonListHeader,
IonPage, 
IonTitle, 
IonToolbar } from '@ionic/vue';
import {
  chatbubbleOutline,
  chatbubbleSharp,
  helpBuoyOutline,
  helpBuoySharp,
  libraryOutline,
  librarySharp,
  personOutline,
  personSharp,
  readerOutline,
  readerSharp,
  schoolOutline,
  schoolSharp,
  shieldOutline,
  shieldSharp
} from 'ionicons/icons'

export default {
  name: 'SupportHome',
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem, 
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {
      chatbubbleOutline,
      chatbubbleSharp,
      helpBuoyOutline,
      helpBuoySharp,
      libraryOutline,
      librarySharp,
      personOutline,
      personSharp,
      readerOutline,
      readerSharp,
      schoolOutline,
      schoolSharp,
      shieldOutline,
      shieldSharp
    }
  }
}
</script>

<style lang="scss" scoped>

</style>