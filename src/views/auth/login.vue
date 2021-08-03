<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <p>Login</p>

        <ion-button :router-link="{ name: 'main' }" router-direction="root">Sign in</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButton, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar } from '@ionic/vue';

export default {
  name: 'Login',
  components: {
    IonButton,
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