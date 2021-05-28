import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareInfoService {

  public showModal = new BehaviorSubject<{
    isShowModal: boolean;
    openModalFor: number;
  }>({isShowModal: false , openModalFor: 0});

  public showProgramModal = new Subject<{
    isShowModal: boolean;
    modalMedia : string;
    mediaDescription : string;
    modalFor : number;
  }>();



  constructor() { }

  // to show modal
  public setModal(value : {isShowModal: boolean; openModalFor: number;} ) {
    this.showModal.next(value);
    console.log('data',value)
  }

  public setProgramModal(value : {isShowModal: boolean; modalMedia : string; mediaDescription : string;  modalFor : number;}){
    this.showProgramModal.next(value)
  }
}
