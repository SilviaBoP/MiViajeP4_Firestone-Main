import { Component } from '@angular/core';
import { Observable} from 'rxjs';

import 'firebase/firestore';

import { Itinerario } from './interface/itinerario.interface';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

import {mergeMapTo}from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'MiViajeP2';
  
   constructor(private afMessaging: AngularFireMessaging){}

  requestPermission(){
    this.afMessaging.requestPermission
    .pipe(mergeMapTo(this.afMessaging.tokenChanges))
    .subscribe(
      (token) => { console.log('Permission granted! Save to the server!' ,token); },
      (error) => {console.error(error);},
    );
   }

   days$: Observable<Itinerario[]>;
   
   ngOnInit(): void {
   
  }

 
  
}

