<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Favorites</ion-title>
        <settings-toolbar-link />
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Favorites</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <p>Favorites coming soon!</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar } from '@ionic/vue';
import SettingsToolbarLink from './shared/settings-toolbar-link'

export default {
  name: 'Favorites',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    SettingsToolbarLink
  }
}
</script>

<style lang="scss" scoped>

</style>