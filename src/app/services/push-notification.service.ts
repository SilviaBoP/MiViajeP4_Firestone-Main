import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  messagingFirebase: firebase.messaging.Messaging;

  constructor() { 
    firebase.initializeApp(environment.configFirebase);
    this.messagingFirebase = firebase.messaging();
  }

   requestPermission =()=> {

    return new Promise(async(resolve,reject)=>{
      const permsis = await Notification.requestPermission();
      if(permsis==="granted"){
        const tokenFirabase = await this.messagingFirebase.getToken();
        resolve(tokenFirabase);
      }else{
        reject(new Error("No se otorgaron los permisos"))
      }
    })
  }

  private messegingObservable= new Observable(observer =>{
    this.messagingFirebase.onMessage(payload =>{
      observer.next(payload)
    })
  })

receiveMessage(){
  return this.messegingObservable;
}
   

}
