import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DaysLayoutComponent } from './components/days-layout/days-layout.component';
import { DaysDetailComponent } from './components/days-detail/days-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './components/player/player.component';
import { FiltersComponent } from './components/filters/filters.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms'; 
import { observeInsideAngular } from '@angular/fire';
import { AngularFireMessaging, AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AngularFireModule } from '@angular/fire/compat';
import { PushNotificationService } from './services/push-notification.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DaysLayoutComponent,
    DaysDetailComponent,
    PlayerComponent,
    FiltersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.configFirebase)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    FirestoreModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFireMessagingModule,
  ],

  providers: [PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
