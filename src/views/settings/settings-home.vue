<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/main"></ion-back-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-list lines="full">
          <ion-list-header>
            <ion-label color="secondary">Manage your account</ion-label>
          </ion-list-header>
          <ion-item detail lines="inset" :router-link="{ name: 'profile' }">
            <ion-icon slot="start" :ios="personOutline" :md="personSharp" />
            <ion-label>Profile</ion-label>
          </ion-item>
          <ion-item detail lines="inset" :router-link="{ name: 'high-school' }">
            <ion-icon slot="start" :ios="libraryOutline" :md="librarySharp" />
            <ion-label>High school</ion-label>
          </ion-item>
          <ion-item detail lines="none" :router-link="{ name: 'college-plans' }">
            <ion-icon slot="start" :ios="schoolOutline" :md="schoolSharp" />
            <ion-label>College plans</ion-label>
          </ion-item>
        </ion-list>

        <ion-list lines="full">
          <ion-list-header>
            <ion-label color="secondary">Additional settings</ion-label>
          </ion-list-header>
          <ion-item detail lines="none" :router-link="{ name: 'profile' }">
            <ion-icon slot="start" :ios="shieldOutline" :md="shieldSharp" />
            <ion-label>Security</ion-label>
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
  libraryOutline,
  librarySharp,
  personOutline,
  personSharp,
  schoolOutline,
  schoolSharp,
  shieldOutline,
  shieldSharp
} from 'ionicons/icons'

export default {
  name: 'SettingsHome',
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
      libraryOutline,
      librarySharp,
      personOutline,
      personSharp,
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