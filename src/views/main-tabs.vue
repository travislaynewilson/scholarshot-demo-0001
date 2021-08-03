<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="recommendations" href="/main/recommendations">
          <ion-icon :ios="thumbsUpOutline" :md="thumbsUpSharp"></ion-icon>
          <ion-label>Recommendations</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="favorites" href="/main/favorites">
          <ion-icon :ios="starOutline" :md="starSharp"></ion-icon>
          <ion-label>Favorites</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="colleges" href="/main/colleges">
          <ion-icon :ios="schoolOutline" :md="schoolSharp"></ion-icon>
          <ion-label>Colleges</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="planner" href="/main/planner">
          <ion-icon :ios="gitMergeOutline" :md="gitMergeSharp"></ion-icon>
          <ion-label>Planner</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { 
  IonIcon, 
  IonLabel, 
  IonPage,
  IonTabBar, 
  IonTabButton, 
  IonTabs } from '@ionic/vue';
import {
  gitMergeOutline,
  gitMergeSharp,
  schoolOutline,
  schoolSharp,
  starOutline,
  starSharp,
  thumbsUpOutline,
  thumbsUpSharp
} from 'ionicons/icons'

export default {
  name: 'MainTabs',
  components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs },
  setup() {
    return {
      gitMergeOutline,
      gitMergeSharp,
      schoolOutline,
      schoolSharp,
      starOutline,
      starSharp,
      thumbsUpOutline,
      thumbsUpSharp
    }
  }
}
</script>

<style lang="scss" scoped>

</style>