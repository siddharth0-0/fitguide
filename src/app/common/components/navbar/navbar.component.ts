import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareInfoService } from '../../providers/share-info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeNav : number = 0;
  constructor( private  _shareInfoService : ShareInfoService, private _router : Router ) { }

  ngOnInit(): void {
  }
  
  onLogin() {
    this._shareInfoService.setModal({
      isShowModal: true,
      openModalFor: 1,
    });
    console.log('home',this._shareInfoService.setModal)
  }

  onSignUp(){
    this._shareInfoService.setModal({
      isShowModal: true,
      openModalFor : 2
    });
  }

  navigateTo(flag : 0| 1| 2 ){
    switch(flag){
      case 0:
        this.activeNav = 0;
        // this._router.navigateByUrl('home');
        this._router.navigate(['home']);
      break;

      case 1:
        this.activeNav = 1;
        // this._router.navigateByUrl('diet');
        this._router.navigate(['diet']);
      break;

      case 2:
        this.activeNav = 2;
        // this._router.navigateByUrl('about');
        this._router.navigate(['about']);
      break;
    }
  }
}
