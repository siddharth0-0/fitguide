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
  
  firstWeek = [
    {
      title : 'PushUps',
      image : '../../../assets/img/pushups.png',
      media : '../../../assets/img/pushups.mp4',
      description :'On floor position your hands slightly wider than your shoulders.Keep a tight core throughout the entire push-up. Inhale as you slowly bend your elbows and lower yourself until your elbows are at a 90-degree angle.Exhale as you begin contracting your chest muscles and pushing back up through your hands to the start position'
    },
    {
      title : 'Squats',
      image : '../../../assets/img/squat.png',
      media : '../../../assets/img/squat.mp4',
      description : 'Find a foot stance that feels best for you. Pointing your toes slightly outwards helps.Start by putting your feet shoulder-width apart and pointed about 15 degrees outwards.Tense your abs.“Sit back” – make sure to move your butt backward,Be careful to keep your knees in line with your toes.'
    },
    {
      title : 'Lunges',
      image : '../../../assets/img/lunges.png',
      media : '../../../assets/img/lunges.mp4',
      description : 'Start by standing up tall.Step forward with one foot until your leg reaches a 90-degree angle. ...Lift your front lunging leg to return to the starting position.'
    },
    {
      title : 'Plank',
      image : '../../../assets/img/plankw.png',
      media : '../../../assets/img/plankw.mp4',
      description : 'Reach heels back as you lengthen the crown of your head forward. Ground down into hands, pushing the floor away beneath you. Lengthen through the arms and broaden your chest.'
    },
    {
      title : 'Crunches',
      image : '../../../assets/img/crunches.png',
      media : '../../../assets/img/crunches.mp4',
      description : 'Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale.Exhale and lift your upper body, keeping your head and neck relaxed.Inhale and return to the starting position.'
    },
  ]

  secondWeek= [
    {
      title : 'Squats',
      image : '../../../assets/img/squat.png',
      media : '../../../assets/img/squat.mp4',
      description : 'Find a foot stance that feels best for you. Pointing your toes slightly outwards helps.Start by putting your feet shoulder-width apart and pointed about 15 degrees outwards.Tense your abs.“Sit back” – make sure to move your butt backward,Be careful to keep your knees in line with your toes.'
    },
    {
      title : 'PushUps',
      image : '../../../assets/img/pushups.png',
      media : '../../../assets/img/pushups.mp4',
      description :'On floor position your hands slightly wider than your shoulders.Keep a tight core throughout the entire push-up. Inhale as you slowly bend your elbows and lower yourself until your elbows are at a 90-degree angle.Exhale as you begin contracting your chest muscles and pushing back up through your hands to the start position'
    },
    {
      title : 'Triceps Dips',
      image : '../../../assets/img/dips.png',
      media : '../../../assets/img/dips.mp4',
      description : 'Grip the front edges of a chair or bench with your hand. Hover your butt just off and in front of the seat, feet flat, and legs bent so thighs are parallel to the floor. Straighten your arms. ... Lower your body toward the floor until your arms form 90-degree angles.Then, engage your triceps to press back to start.'
    },
    {
      title : 'Crunches',
      image : '../../../assets/img/crunches.png',
      media : '../../../assets/img/crunches.mp4',
      description : 'Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale.Exhale and lift your upper body, keeping your head and neck relaxed.Inhale and return to the starting position.'
    },
    {
      title : 'Shoulder Press',
      image : '../../../assets/img/press.png',
      media : '../../../assets/img/press.mp4',
      description : 'Stand tall with your feet shoulder-width apart, holding a dumbbell in each hand.Bring your weights to shoulder-level, with your palms facing forward.Extend your arms straight above your shoulders. Keep your back straight and engage your core.Slowly lower the weights back to shoulder level and repeat.'
    },
  ]

  thirdWeek= [
    {
      title : 'PullUps',
      image : '../../../assets/img/pullups.png',
      media : '../../../assets/img/pullups.mp4',
      description :'Hang with your arms fully extended, you can bend your legs at the knee if they’re dragging on the ground.Keep your shoulders back and your core engaged. Then pull up. Focus on enlisting every upper body muscle to aid your upward endeavours. Move slowly upward until your chin is above the bar, then equally slowly downward until your arms are extended again.'
    },
    {
      title : 'Biceps Curl',
      image : '../../../assets/img/curl.png',
      media : '../../../assets/img/curl.mp4',
      description : 'Start standing with a dumbbell in each hand. Your elbows should rest at your sides and your forearms should extend out in front of your body.Bring the dumbbells all the way up to your shoulders by bending your elbows. Once at the top, hold for a second by squeezing the muscle.Reverse the curl slowly and repeat.'
    },
    {
      title : 'Shoulder Press',
      image : '../../../assets/img/press.png',
      media : '../../../assets/img/press.mp4',
      description : 'Stand tall with your feet shoulder-width apart, holding a dumbbell in each hand.Bring your weights to shoulder-level, with your palms facing forward.Extend your arms straight above your shoulders. Keep your back straight and engage your core.Slowly lower the weights back to shoulder level and repeat.'
    },
    {
      title : 'Triceps Dips',
      image : '../../../assets/img/dips.png',
      media : '../../../assets/img/dips.mp4',
      description : 'Grip the front edges of a chair or bench with your hand. Hover your butt just off and in front of the seat, feet flat, and legs bent so thighs are parallel to the floor. Straighten your arms. ... Lower your body toward the floor until your arms form 90-degree angles.Then, engage your triceps to press back to start.'
    },
    {
      title : 'Crunches',
      image : '../../../assets/img/crunches.png',
      media : '../../../assets/img/crunches.mp4',
      description : 'Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale.Exhale and lift your upper body, keeping your head and neck relaxed.Inhale and return to the starting position.'
    },
    {
      title : 'Plank',
      image : '../../../assets/img/plankw.png',
      media : '../../../assets/img/plankw.mp4',
      description : 'Reach heels back as you lengthen the crown of your head forward. Ground down into hands, pushing the floor away beneath you. Lengthen through the arms and broaden your chest.'
    },
  ]

  fourthWeek= [
    {
      title : 'PushUps',
      image : '../../../assets/img/pushups.png',
      media : '../../../assets/img/pushups.mp4',
      description :'On floor position your hands slightly wider than your shoulders.Keep a tight core throughout the entire push-up. Inhale as you slowly bend your elbows and lower yourself until your elbows are at a 90-degree angle.Exhale as you begin contracting your chest muscles and pushing back up through your hands to the start position'
    },
    {
      title : 'PullUps',
      image : '../../../assets/img/pullups.png',
      media : '../../../assets/img/pullups.mp4',
      description :'Hang with your arms fully extended, you can bend your legs at the knee if they’re dragging on the ground.Keep your shoulders back and your core engaged. Then pull up. Focus on enlisting every upper body muscle to aid your upward endeavours. Move slowly upward until your chin is above the bar, then equally slowly downward until your arms are extended again.'
    },
    {
      title : 'Squats',
      image : '../../../assets/img/squat.png',
      media : '../../../assets/img/squat.mp4',
      description : 'Find a foot stance that feels best for you. Pointing your toes slightly outwards helps.Start by putting your feet shoulder-width apart and pointed about 15 degrees outwards.Tense your abs.“Sit back” – make sure to move your butt backward,Be careful to keep your knees in line with your toes.'
    },
    {
      title : 'Lunges',
      image : '../../../assets/img/lunges.png',
      media : '../../../assets/img/lunges.mp4',
      description : 'Start by standing up tall.Step forward with one foot until your leg reaches a 90-degree angle. ...Lift your front lunging leg to return to the starting position.'
    },
    {
      title : 'Biceps Curl',
      image : '../../../assets/img/curl.png',
      media : '../../../assets/img/curl.mp4',
      description : 'Start standing with a dumbbell in each hand. Your elbows should rest at your sides and your forearms should extend out in front of your body.Bring the dumbbells all the way up to your shoulders by bending your elbows. Once at the top, hold for a second by squeezing the muscle.Reverse the curl slowly and repeat.'
    },
    {
      title : 'Triceps Dips',
      image : '../../../assets/img/dips.png',
      media : '../../../assets/img/dips.mp4',
      description : 'Grip the front edges of a chair or bench with your hand. Hover your butt just off and in front of the seat, feet flat, and legs bent so thighs are parallel to the floor. Straighten your arms. ... Lower your body toward the floor until your arms form 90-degree angles.Then, engage your triceps to press back to start.'
    },
    {
      title : 'Crunches',
      image : '../../../assets/img/crunches.png',
      media : '../../../assets/img/crunches.mp4',
      description : 'Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale.Exhale and lift your upper body, keeping your head and neck relaxed.Inhale and return to the starting position.'
    },
    {
      title : 'Plank',
      image : '../../../assets/img/plankw.png',
      media : '../../../assets/img/plankw.mp4',
      description : 'Reach heels back as you lengthen the crown of your head forward. Ground down into hands, pushing the floor away beneath you. Lengthen through the arms and broaden your chest.'
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
