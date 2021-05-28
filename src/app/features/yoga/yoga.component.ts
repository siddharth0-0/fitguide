import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareInfoService } from 'src/app/common/providers/share-info.service';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.scss']
})
export class YogaComponent implements OnInit {

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
      title : 'Child Pose',
      image : 'assets/img/child.png',
      media : 'assets/img/child.mp4',
      description :'This is Child Pose'
    },
    {
      title : 'Tree Pose',
      image : 'assets/img/tree.png',
      media : 'assets/img/tree.mp4',
      description : 'this is tree pose'
    },
    {
      title : 'Cobra Pose',
      image : 'assets/img/cobra.png',
      media : 'assets/img/cobra.mp4',
      description : 'this is Cobra pose'
    },
    {
      title : 'Plank Pose',
      image : 'assets/img/plank.png',
      media : 'assets/img/plank.mp4',
      description : 'this is Plank pose'
    },
    {
      title : 'Meditate',
      image : 'assets/img/meditate.png',
      media : 'assets/img/meditate.mp4',
      description : 'this is Meditate pose'
    },
  ]

  secondWeek= [
    {
      title : 'Tree Pose',
      image : 'assets/img/tree.png',
      media : 'assets/img/tree.mp4',
      description : 'this is tree pose'
    },
    {
      title : 'Cobra Pose',
      image : 'assets/img/cobra.png',
      media : 'assets/img/cobra.mp4',
      description : 'this is Cobra pose'
    },
    {
      title : 'Bridge Pose',
      image : 'assets/img/bridge.png',
      media : 'assets/img/bridge.mp4',
      description : 'this is Bridge pose'
    },
    {
      title : 'Corpse Pose',
      image : 'assets/img/corpse.png',
      media : 'assets/img/corpse.mp4',
      description : 'this is Corpse pose'
    },
    {
      title : 'Triangle Pose',
      image : 'assets/img/triangle.png',
      media : 'assets/img/triangle.mp4',
      description : 'this is Triangle pose'
    },
  ]

  thirdWeek= [
    {
      title : 'Tree Pose',
      image : 'assets/img/tree.png',
      media : 'assets/img/tree.mp4',
      description : 'this is tree pose'
    },
    {
      title : 'Garland Pose',
      image : 'assets/img/garland.png',
      media : 'assets/img/garland.mp4',
      description : 'this is tree pose'
    },
    {
      title : 'Corpse Pose',
      image : 'assets/img/corpse.png',
      media : 'assets/img/corpse.mp4',
      description : 'this is Corpse pose'
    },
    {
      title : 'Bridge Pose',
      image : 'assets/img/bridge.png',
      media : 'assets/img/bridge.mp4',
      description : 'this is Bridge pose'
    },
    {
      title : 'Triangle Pose',
      image : 'assets/img/triangle.png',
      media : 'assets/img/triangle.mp4',
      description : 'this is Triangle pose'
    },
    {
      title : 'Downward Face Pose',
      image : 'assets/img/downface.png',
      media : 'assets/img/downface.mp4',
      description : 'this is Downward-Face pose'
    },
    {
      title : 'Meditate',
      image : 'assets/img/meditate.png',
      media : 'assets/img/meditate.mp4',
      description : 'this is tree pose'
    },
  ]

  fourthWeek= [
    {
      title : 'Child Pose',
      image : 'assets/img/child.png',
      media : 'assets/img/child.mp4',
      description : 'this is Child pose'
    },
    {
      title : 'Tree Pose',
      image : 'assets/img/tree.png',
      media : 'assets/img/tree.mp4',
      description : 'this is tree pose'
    },
    {
      title : 'Garland Pose',
      image : 'assets/img/garland.png',
      media : 'assets/img/garland.mp4',
      description : 'this is Garland pose'
    },
    {
      title : 'Cobra Pose',
      image : 'assets/img/cobra.png',
      media : 'assets/img/cobra.mp4',
      description : 'this is Cobra pose'
    },
    {
      title : 'Bridge Pose',
      image : 'assets/img/bridge.png',
      media : 'assets/img/bridge.mp4',
      description : 'this is Bridge pose'
    },
    {
      title : 'Triangle Pose',
      image : 'assets/img/triangle.png',
      media : 'assets/img/Triangle.mp4',
      description : 'this is Bridge pose'
    },
    {
      title : 'Downward Face Pose',
      image : 'assets/img/downface.png',
      media : 'assets/img/downface.mp4',
      description : 'this is Downward-dog face pose'
    },
    {
      title : 'Meditate',
      image : 'assets/img/meditate.png',
      media : 'assets/img/meditate.mp4',
      description : 'this is Meditate pose'
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
          modalFor : 0,
        })
      break;

      case 1:
        this._shareInfoService.setProgramModal({
          isShowModal:true,
          modalMedia : this.secondWeek[index].media,
          mediaDescription :this.secondWeek[index].description,
          modalFor : 0
        });
      break;

      case 2:
        this._shareInfoService.setProgramModal({
          isShowModal:true,
          modalMedia : this.thirdWeek[index].media,
          mediaDescription :this.thirdWeek[index].description,
          modalFor : 0,
        });
      break;

      case 3:
        this._shareInfoService.setProgramModal({
          isShowModal:true,
          modalMedia : this.fourthWeek[index].media,
          mediaDescription :this.fourthWeek[index].description,
          modalFor : 0
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
