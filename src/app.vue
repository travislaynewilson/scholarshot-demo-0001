<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list>
            <ion-list-header>Travis Wilson</ion-list-header>
            <ion-note>isi@mailbeaver.net</ion-note>
  
            <ion-menu-toggle auto-hide="false">
              <ion-item :router-link="{ name: 'intro' }" router-direction="root" lines="inset" detail="false" class="hydrated">
                <ion-icon slot="start" :ios="helpCircleOutline" :md="helpCircleSharp" />
                <ion-label>Intro</ion-label>
              </ion-item>

              <ion-item :router-link="{ name: 'ask-expert' }" router-direction="root" lines="inset" detail="false" class="hydrated">
                <ion-icon slot="start" :ios="helpCircleOutline" :md="helpCircleSharp" />
                <ion-label>Ask an expert</ion-label>
              </ion-item>

              <ion-item :router-link="{ name: 'login' }" router-direction="root" lines="none" class="hydrated">
                <ion-icon slot="start" :ios="logInOutline" :md="logInSharp" />
                <ion-label>Sign in</ion-label>
              </ion-item>

              <ion-item :router-link="{ name: 'login' }" router-direction="root" lines="full" class="hydrated">
                <ion-icon slot="start" :ios="logOutOutline" :md="logOutSharp" />
                <ion-label>Sign out</ion-label>
              </ion-item>

              <ion-item :router-link="{ name: 'settings-home' }" router-direction="root" lines="none" class="hydrated">
                <ion-icon slot="start" :ios="settingsOutline" :md="settingsSharp" />
                <ion-label>Settings</ion-label>
              </ion-item> 

              <ion-item :router-link="{ name: 'support-home' }" router-direction="root" lines="none" class="hydrated">
                <ion-icon slot="start" :ios="helpCircleOutline" :md="helpCircleOutline" />
                <ion-label>Help & feedback</ion-label>
              </ion-item> 
            </ion-menu-toggle>
            
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script>
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { 
  chatbubbleOutline,
  chatbubbleSharp,
  helpCircleOutline, 
  helpCircleSharp, 
  logInOutline,
  logInSharp,
  logOutOutline,
  logOutSharp,
  personCircleOutline, 
  personCircleSharp,
  settingsOutline,
  settingsSharp } from 'ionicons/icons';

export default defineComponent({
  name: 'App',
  components: {
    IonApp, 
    IonContent, 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader, 
    IonMenu, 
    IonMenuToggle, 
    IonNote, 
    IonRouterOutlet, 
    IonSplitPane,
  },
  setup() {    
    const route = useRoute();
    
    return { 
      chatbubbleOutline,
      chatbubbleSharp,
      helpCircleOutline, 
      helpCircleSharp, 
      logInOutline,
      logInSharp,
      logOutOutline,
      logOutSharp,
      personCircleOutline, 
      personCircleSharp, 
      settingsOutline,
      settingsSharp,
      isSelected: (url) => url === route.path ? 'selected' : ''
    }
  }
});
</script>

<style lang="scss" scoped>

ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>