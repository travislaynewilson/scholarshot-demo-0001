<template>
  <ion-buttons slot="end">
    <ion-button router-link="/settings">
      <ion-icon slot="icon-only" :ios="personCircleOutline" :md="personCircleSharp"></ion-icon>
    </ion-button>
  </ion-buttons>
</template>

<script>
import { 
  IonButton,
  IonButtons, 
  IonIcon } from '@ionic/vue';
import {
  personCircleOutline, 
  personCircleSharp, 
} from 'ionicons/icons'

export default {
  name: 'SettingsToolbarLink',
  components: {
    IonButton,
    IonButtons,
    IonIcon
  },
  setup() {
    return {
      personCircleOutline, 
      personCircleSharp
    }
  }
}
</script>