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

  constructor() { }

  // to show modal
  public setModal(value : {isShowModal: boolean; openModalFor: number;} ) {
    this.showModal.next(value);
    console.log('data',value)
  }
}
