import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import * as firebase from "firebase/app"; 

import 'firebase/firestore';
import { DaysFirestoreService } from './services/firestore/days-firestore.service';
import { Itinerario } from './interface/itinerario.interface';
import { PushNotificationService } from './services/push-notification.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MiViajeP2';
  
  days$: Observable<Itinerario[]>;


  constructor( private notification: PushNotificationService ) {
    notification.requestPermission().then(token =>{
      console.log(token);
    })
  }

  ngOnInit(): void {
    this.notification.receiveMessage().subscribe(payload =>{
      console.log(payload);
    })
   
  }
}
