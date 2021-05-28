import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareInfoService } from 'src/app/common/providers/share-info.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  firstContent :boolean = false;
  secContent : boolean = false;
  thirdContent : boolean = false;
  fourthContent :boolean = false;

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


  firstWeek = [
    {
      title : 'PushUps',
      image : 'assets/img/pushups.png',
      media : 'assets/img/pushups.mp4',
      description :'This is PushUps'
    },
    {
      title : 'Squats',
      image : 'assets/img/squat.png',
      media : 'assets/img/squat.mp4',
      description : 'this is Squats'
    },
    {
      title : 'Lunges',
      image : 'assets/img/lunges.png',
      media : 'assets/img/lunges.mp4',
      description : 'this is Cobra pose'
    },
    {
      title : 'Plank',
      image : 'assets/img/plankw.png',
      media : 'assets/img/plankw.mp4',
      description : 'this is Plank pose'
    },
    {
      title : 'Crunches',
      image : 'assets/img/crunches.png',
      media : 'assets/img/crunches.mp4',
      description : 'this is Meditate pose'
    },
  ]

  secondWeek= [
    {
      title : 'Squats',
      image : 'assets/img/squat.png',
      media : 'assets/img/squat.mp4',
      description : 'this is Squats'
    },
    {
      title : 'PushUps',
      image : 'assets/img/pushups.png',
      media : 'assets/img/pushups.mp4',
      description :'This is PushUps'
    },
    {
      title : 'Triceps Dips',
      image : 'assets/img/dips.png',
      media : 'assets/img/dips.mp4',
      description : 'this is Dips pose'
    },
    {
      title : 'Crunches',
      image : 'assets/img/crunches.png',
      media : 'assets/img/crunches.mp4',
      description : 'this is Meditate pose'
    },
    {
      title : 'Shoulder Press',
      image : 'assets/img/press.png',
      media : 'assets/img/press.mp4',
      description : 'this is Triangle pose'
    },
  ]

  thirdWeek= [
    {
      title : 'PullUps',
      image : 'assets/img/pullups.png',
      media : 'assets/img/pullups.mp4',
      description :'This is PushUps'
    },
    {
      title : 'Biceps Curl',
      image : 'assets/img/curl.png',
      media : 'assets/img/curl.mp4',
      description : 'this is tree pose'
    },
    {
      title : 'Shoulder Press',
      image : 'assets/img/press.png',
      media : 'assets/img/press.mp4',
      description : 'this is Corpse pose'
    },
    {
      title : 'Triceps Dips',
      image : 'assets/img/dips.png',
      media : 'assets/img/dips.mp4',
      description : 'this is Bridge pose'
    },
    {
      title : 'Crunches',
      image : 'assets/img/crunches.png',
      media : 'assets/img/crunches.mp4',
      description : 'this is Meditate pose'
    },
    {
      title : 'Plank',
      image : 'assets/img/plankw.png',
      media : 'assets/img/plank.mp4',
      description : 'this is tree pose'
    },
  ]

  fourthWeek= [
    {
      title : 'PushUps',
      image : 'assets/img/pushups.png',
      media : 'assets/img/pushups.mp4',
      description :'This is PushUps'
    },
    {
      title : 'PullUps',
      image : 'assets/img/pullups.png',
      media : 'assets/img/pullups.mp4',
      description :'This is PushUps'
    },
    {
      title : 'Squats',
      image : 'assets/img/squat.png',
      media : 'assets/img/squat.mp4',
      description : 'this is Squats'
    },
    {
      title : 'Lunges',
      image : 'assets/img/lunges.png',
      media : 'assets/img/lunges.mp4',
      description : 'this is Cobra pose'
    },
    {
      title : 'Biceps Curl',
      image : 'assets/img/curl.png',
      media : 'assets/img/curl.mp4',
      description : 'this is tree pose'
    },
    {
      title : 'Triceps Dips',
      image : 'assets/img/dips.png',
      media : 'assets/img/dips.mp4',
      description : 'this is Bridge pose'
    },
    {
      title : 'Crunches',
      image : 'assets/img/crunches.png',
      media : 'assets/img/crunches.mp4',
      description : 'this is Meditate pose'
    },
    {
      title : 'Plank',
      image : 'assets/img/plankw.png',
      media : 'assets/img/plankw.mp4',
      description : 'this is tree pose'
    },
  ]


  clickWeek(Flag : 0 | 1 | 2 |3, clickedIndex : number){
    var index = clickedIndex
    switch(Flag){
      case 0:
        this._shareInfoService.setProgramModal({
          isShowModal:true,
          modalMedia : this.firstWeek[index].media,
          mediaDescription :this.firstWeek[index].description,
          modalFor : 1,
        })
      break;

      case 1:
        this._shareInfoService.setProgramModal({
          isShowModal:true,
          modalMedia : this.secondWeek[index].media,
          mediaDescription :this.secondWeek[index].description,
          modalFor : 1,
        });
      break;

      case 2:
        this._shareInfoService.setProgramModal({
          isShowModal:true,
          modalMedia : this.thirdWeek[index].media,
          mediaDescription :this.thirdWeek[index].description,
          modalFor : 1,
        });
      break;

      case 3:
        this._shareInfoService.setProgramModal({
          isShowModal:true,
          modalMedia : this.fourthWeek[index].media,
          mediaDescription :this.fourthWeek[index].description,
          modalFor : 1,
        });
      break;

    }
  }

  showFirstWeek(){
    this.firstContent =! this.firstContent  
  }
  showSecWeek(){
    this.secContent =! this.secContent
  }
  showThirdWeek(){
    this.thirdContent =! this.thirdContent
  }
  showFourthWeek(){
    this.fourthContent =! this.fourthContent
  }

  onHome(){
    this._router.navigateByUrl('home');
  }

}
