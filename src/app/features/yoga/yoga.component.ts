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

  firstWeek = [
    {
      title : 'Child Pose',
      image : '../../../assets/img/child.png',
      media : '../../../assets/img/child.mp4',
      description :'Kneel on your hands and knees, with your hands in front of your shoulders and your knees about hip width apart,your big toes touching.As you exhale, lower your buttocks toward your heels as your torso rests on your thighs,and your head rests on the floor.'
    },
    {
      title : 'Tree Pose',
      image : '../../../assets/img/tree.png',
      media : '../../../assets/img/tree.mp4',
      description : 'Find a fixed point in front of you and stare at it to help you balance. As you inhale, shift the weight into your left foot and lift your right foot an inch off the floor. Using your right hand, bring the foot to your shin or inner thigh. Avoid placing your foot directly on the knee.'
    },
    {
      title : 'Cobra Pose',
      image : '../../../assets/img/cobra.png',
      media : '../../../assets/img/cobra.mp4',
      description : 'Lie flat on your belly with your forehead on your mat and your toenails pressing into the mat.Place your hands under your shoulders, keeping your elbows close to your torso. Draw your navel up away from the mat.Inhale  and press your feet and legs into the mat, releasing your tailbone down  toward your pubis as you begin to straighten the arms to lift your head  and chest forward and up off the floor. Exhale.'
    },
    {
      title : 'Plank',
      image : '../../../assets/img/plank.png',
      media : '../../../assets/img/plank.mp4',
      description : 'Reach heels back as you lengthen the crown of your head forward. Ground down into hands, pushing the floor away beneath you. Lengthen through the arms and broaden your chest.'
    },
    {
      title : 'Meditate',
      image : '../../../assets/img/meditate.png',
      media : '../../../assets/img/meditate.mp4',
      description : 'Sit or lie comfortably.Close your eyes. ...Make no effort to control the breath; simply breathe naturally.Focus your attention on the breath and on how the body moves with each inhalation and exhalation.'
    },
  ]

  secondWeek= [
    {
      title : 'Tree Pose',
      image : '../../../assets/img/tree.png',
      media : '../../../assets/img/tree.mp4',
      description : 'Find a fixed point in front of you and stare at it to help you balance. As you inhale, shift the weight into your left foot and lift your right foot an inch off the floor. Using your right hand, bring the foot to your shin or inner thigh. Avoid placing your foot directly on the knee.'
    },
    {
      title : 'Cobra Pose',
      image : '../../../assets/img/cobra.png',
      media : '../../../assets/img/cobra.mp4',
      description : 'Lie flat on your belly with your forehead on your mat and your toenails pressing into the mat.Place your hands under your shoulders, keeping your elbows close to your torso. Draw your navel up away from the mat.Inhale  and press your feet and legs into the mat, releasing your tailbone down  toward your pubis as you begin to straighten the arms to lift your head  and chest forward and up off the floor. Exhale.'
    },
    {
      title : 'Bridge Pose',
      image : '../../../assets/img/bridge.png',
      media : '../../../assets/img/bridge.mp4',
      description : 'Lie faceup with knees bent, feet flat on the floor, and arms at your sides with palms facedown. Keep your feet parallel and hip-width apart, heels stacked under knees. On an inhale, activate through the legs and the glutes. Press the floor away with your feet and lift the hips off the floor toward the sky.'
    },
    {
      title : 'Corpse Pose',
      image : '../../../assets/img/corpse.png',
      media : '../../../assets/img/corpse.mp4',
      description : 'Lie faceup, bringing your legs to the outer edges of your mat, like a starfish. Splay your feet out to the sides. Place arms along sides, palms facing up. Close your eyes and relax.'
    },
    {
      title : 'Triangle Pose',
      image : '../../../assets/img/triangle.png',
      media : '../../../assets/img/triangle.mp4',
      description : 'Stand with feet wide, 3–4 feet apart. Shift your right heel out so your toes are pointing slightly inward. Turn your left foot out 90 degrees. Line up your left heel with the arch of your right foot.'
    },
  ]

  thirdWeek= [
    {
      title : 'Tree Pose',
      image : '../../../assets/img/tree.png',
      media : '../../../assets/img/tree.mp4',
      description : 'Find a fixed point in front of you and stare at it to help you balance. As you inhale, shift the weight into your left foot and lift your right foot an inch off the floor. Using your right hand, bring the foot to your shin or inner thigh. Avoid placing your foot directly on the knee.'
    },
    {
      title : 'Garland Pose',
      image : '../../../assets/img/garland.png',
      media : '../../../assets/img/garland.mp4',
      description : 'Stand with your feet about mat width apart.Bend the knees and lower your butt into a squat. Work toward keeping the feet closer to parallel.Take your upper arms inside your knees and bend the elbows to bring the palms together(prayer position).With hands to your heart center in , Continue pressing upper arms into thighs to stay engaged.Keep your spine straight, your butt moving toward the floor, and your shoulders relaxed away from your ears.'
    },
    {
      title : 'Corpse Pose',
      image : '../../../assets/img/corpse.png',
      media : '../../../assets/img/corpse.mp4',
      description : 'Lie faceup, bringing your legs to the outer edges of your mat, like a starfish. Splay your feet out to the sides. Place arms along sides, palms facing up. Close your eyes and relax.'
    },
    {
      title : 'Bridge Pose',
      image : '../../../assets/img/bridge.png',
      media : '../../../assets/img/bridge.mp4',
      description : 'Lie faceup with knees bent, feet flat on the floor, and arms at your sides with palms facedown. Keep your feet parallel and hip-width apart, heels stacked under knees. On an inhale, activate through the legs and the glutes. Press the floor away with your feet and lift the hips off the floor toward the sky.'
    },
    {
      title : 'Triangle Pose',
      image : '../../../assets/img/triangle.png',
      media : '../../../assets/img/triangle.mp4',
      description : 'Stand with feet wide, 3–4 feet apart. Shift your right heel out so your toes are pointing slightly inward. Turn your left foot out 90 degrees. Line up your left heel with the arch of your right foot.'
    },
    {
      title : 'Downward Face Pose',
      image : '../../../assets/img/downface.png',
      media : '../../../assets/img/downface.mp4',
      description : 'Tuck your toes and lift your hips up and back to lengthen your spine. Keep your knees bent in order to bring your weight back into the legs.'
    },
    {
      title : 'Meditate',
      image : '../../../assets/img/meditate.png',
      media : '../../../assets/img/meditate.mp4',
      description : 'Sit or lie comfortably.Close your eyes. ...Make no effort to control the breath; simply breathe naturally.Focus your attention on the breath and on how the body moves with each inhalation and exhalation.'
    },
  ]

  fourthWeek= [
    {
      title : 'Child Pose',
      image : '../../../assets/img/child.png',
      media : '../../../assets/img/child.mp4',
      description : 'Kneel on your hands and knees, with your hands in front of your shoulders and your knees about hip width apart,your big toes touching.As you exhale, lower your buttocks toward your heels as your torso rests on your thighs,and your head rests on the floor.'
    },
    {
      title : 'Tree Pose',
      image : '../../../assets/img/tree.png',
      media : '../../../assets/img/tree.mp4',
      description : 'Find a fixed point in front of you and stare at it to help you balance. As you inhale, shift the weight into your left foot and lift your right foot an inch off the floor. Using your right hand, bring the foot to your shin or inner thigh. Avoid placing your foot directly on the knee.'
    },
    {
      title : 'Garland Pose',
      image : '../../../assets/img/garland.png',
      media : '../../../assets/img/garland.mp4',
      description : 'Stand with your feet about mat width apart.Bend the knees and lower your butt into a squat. Work toward keeping the feet closer to parallel.Take your upper arms inside your knees and bend the elbows to bring the palms together(prayer position).With hands to your heart center in , Continue pressing upper arms into thighs to stay engaged.Keep your spine straight, your butt moving toward the floor, and your shoulders relaxed away from your ears.'
    },
    {
      title : 'Cobra Pose',
      image : '../../../assets/img/cobra.png',
      media : '../../../assets/img/cobra.mp4',
      description : 'Lie flat on your belly with your forehead on your mat and your toenails pressing into the mat.Place your hands under your shoulders, keeping your elbows close to your torso. Draw your navel up away from the mat.Inhale  and press your feet and legs into the mat, releasing your tailbone down  toward your pubis as you begin to straighten the arms to lift your head  and chest forward and up off the floor. Exhale.'
    },
    {
      title : 'Bridge Pose',
      image : '../../../assets/img/bridge.png',
      media : '../../../assets/img/bridge.mp4',
      description : 'Lie faceup with knees bent, feet flat on the floor, and arms at your sides with palms facedown. Keep your feet parallel and hip-width apart, heels stacked under knees. On an inhale, activate through the legs and the glutes. Press the floor away with your feet and lift the hips off the floor toward the sky.'
    },
    {
      title : 'Triangle Pose',
      image : '../../../assets/img/triangle.png',
      media : '../../../assets/img/triangle.mp4',
      description : 'Stand with feet wide, 3–4 feet apart. Shift your right heel out so your toes are pointing slightly inward. Turn your left foot out 90 degrees. Line up your left heel with the arch of your right foot.'
    },
    {
      title : 'Downward Face Pose',
      image : '../../../assets/img/downface.png',
      media : '../../../assets/img/downface.mp4',
      description : 'Tuck your toes and lift your hips up and back to lengthen your spine. Keep your knees bent in order to bring your weight back into the legs.'
    },
    {
      title : 'Meditate',
      image : '../../../assets/img/meditate.png',
      media : '../../../assets/img/meditate.mp4',
      description : 'Sit or lie comfortably.Close your eyes. ...Make no effort to control the breath; simply breathe naturally.Focus your attention on the breath and on how the body moves with each inhalation and exhalation.'
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
