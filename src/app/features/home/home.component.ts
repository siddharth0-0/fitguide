import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareInfoService } from 'src/app/common/providers/share-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


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

  onWorkout(){
    this._router.navigateByUrl('workout');
  }

  onYoga(){
    this._router.navigateByUrl('yoga');
  }

}
