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
  // _openFor  = null;
  
  constructor(private  _shareInfoService : ShareInfoService ) {
    console.log("ngon");
    this._modalObserver = this._shareInfoService.showModal.subscribe({ next: (data) =>{
     console.log("modal",data);
     this.isShowModal = data.isShowModal;

   }});
   }
  
  ngOnInit(): void {

  }

  ngOnDestroy(){
    this._modalObserver.unsubscribe();
  }

}
