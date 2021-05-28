import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareInfoService } from '../../providers/share-info.service';

@Component({
  selector: 'app-yoga-modal',
  templateUrl: './yoga-modal.component.html',
  styleUrls: ['./yoga-modal.component.scss']
})
export class YogaModalComponent implements OnInit {

  public _modalObserver : Subscription
  public _isShowModal : boolean =false;
  public _modalMedia : string = '';
  public _mediaDescription : string = '';
  public _openFor : number = 0;

  constructor( private  _shareInfoService : ShareInfoService) {
    this._modalObserver = this._shareInfoService.showProgramModal.subscribe( (data) =>{
      this._isShowModal = data.isShowModal
      this._modalMedia = data.modalMedia
      this._mediaDescription = data.mediaDescription
      this._openFor = data.modalFor
    })
   }


  ngOnInit(): void {
    
  }

  onCloseModal(){
    this._isShowModal = false;
  }


}
