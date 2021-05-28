import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareInfoService } from '../../providers/share-info.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit, OnDestroy {

  isShowModal :boolean = false;
  public _modalObserver: Subscription;
  public _openFor  : number = 0;
  
  constructor(private  _shareInfoService : ShareInfoService ) {
    this._modalObserver = this._shareInfoService.showModal.subscribe( (data) =>{
    this.isShowModal = data.isShowModal;
    if(data.openModalFor == 1){
      this._openFor = data.openModalFor
    }
    else if(data.openModalFor == 2){
      this._openFor = data.openModalFor
    }
   });
  }
  
  ngOnInit(): void {

  }

  onCloseModal(){
    this.isShowModal = false;
  }

  ngOnDestroy(){
    this._modalObserver.unsubscribe();
  }

}
