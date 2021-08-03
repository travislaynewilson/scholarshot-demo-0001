<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>

        <ion-title>Recommendations</ion-title>

        <settings-toolbar-link />
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Recommendations</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <p>These recommendations are based on ScholarShot best practices. 
          ScholarShot has over a 90% degree completion rate for its first-generation students 
          from low income backgrounds in the state of Texas.</p>
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
  name: 'Recommendations',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    SettingsToolbarLink
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>