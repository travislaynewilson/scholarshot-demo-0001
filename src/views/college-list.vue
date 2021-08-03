<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Colleges</ion-title>
        <settings-toolbar-link />
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Colleges</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <p>These recommendations are based on ScholarShot best practices. 
          ScholarShot has over a 90% degree completion rate for its first-generation students 
          from low income backgrounds in the state of Texas.</p>

        <ion-list lines="full">
          <ion-item v-for="i in 100" :key="i" detail :router-link="{ name: 'college-detail', params: { name: 'hsu' } }">
            <ion-label>College {{i}}</ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonButtons, 
  IonContent, 
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage, 
  IonTitle, 
  IonToolbar } from '@ionic/vue';
  import SettingsToolbarLink from './shared/settings-toolbar-link'

export default {
  name: 'CollegeList',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
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