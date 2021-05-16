import { Component, OnInit } from '@angular/core';
import { ShareInfoService } from 'src/app/common/providers/share-info.service';

@Component({
  selector: 'app-pre-home',
  templateUrl: './pre-home.component.html',
  styleUrls: ['./pre-home.component.scss']
})
export class PreHomeComponent implements OnInit {

  

  constructor( private  _shareInfoService : ShareInfoService ) { }

  ngOnInit(): void {
  }
  
  onLogin() {
    this._shareInfoService.setModal({
      isShowModal: true,
      openModalFor: 1,
    });
    console.log('home',this._shareInfoService.setModal)
  }
}
