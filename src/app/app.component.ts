import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { MsgNotiService } from './services/msg-noti.service';
import { TokenService } from './services/token.service';
import { BehaviorSubject } from 'rxjs';
import { StatusService } from './services/status.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'productivera-site';
  data = null;
  
  constructor(
    private router: Router,
    private msgNotiService: MsgNotiService,
    private tokenService: TokenService,
    private statusService: StatusService
    ) { }

  ngOnInit(){
    this.router.events.subscribe(event => {
       if (event instanceof NavigationStart){
          this.checkForNotification();
       }
       if(event instanceof NavigationEnd){
        gtag('config', 'UA-176732346-1', 
                 {
                   'page_path': event.urlAfterRedirects
                 }
                );
        }
    });

    // check if the user's token is expired or not, if yes then logging out
    /*let tokenExp = this.tokenService.payload(this.tokenService.get()).exp;
    let now = Math.floor((new Date).getTime() / 1000);
    console.log(now);
    console.log(tokenExp);
    if(now > tokenExp){
      console.log('Logging out.');
      this.statusService.changeAuthStatus(false);
      this.tokenService.remove();
    }else{
      console.log('Token is still valid');
    }*/
  }

  checkForNotification(){
    if(this.tokenService.loggedIn()){
      this.data = {
        'token': this.tokenService.get()
      };
      this.msgNotiService.checkForNotiMsg(this.data);
    }else{
      console.log('Not logged in.');
    }
  }
}
