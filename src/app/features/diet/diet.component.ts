import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareInfoService } from 'src/app/common/providers/share-info.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.scss']
})
export class DietComponent implements OnInit {

  showWl : boolean = false;
  showWg : boolean =false;

  constructor( private  _shareInfoService : ShareInfoService, private _router : Router ) { }

  ngOnInit(): void {
  }

  wlDiet = [
    {
      day : 'Monday',
      breakfast : 'Sambar with 2 brown rice idlis/ Paneer sandwich with mint chutney',
      lunch : 'Whole-grain roti with mixed-vegetable curry with one dal',
      snacks : 'Walnuts and dates',
      dinner : 'Tofu/chicken curry with mixed vegetables and a fresh spinach salad/chicken gravy with 2 multigrain rotis'
    },
    {
      day : 'Tuesday',
      breakfast : 'Chana dal pancakes with mixed vegetables and a glass of milk/ bread and egg with fruits',
      lunch : 'Chickpea curry with brown rice/ Brown rice with dal',
      snacks : 'Fresh fruit smoothies or whey protein shakes',
      dinner : 'Khichdi with sprout salad/Veg paratha with raita'
    },
    {
      day : 'Wednesday',
      breakfast : 'Yogurt with sliced fruits and sunflower seeds/ vegetable poha',
      lunch : 'Whole-grain roti with tofu/ non veg and mixed vegetables',
      snacks : 'nuts and seeds',
      dinner : 'Palak paneer with brown rice and vegetables/ 2 Multigrain rotis with chicken and curd'
    },
    {
      day : 'Thursday',
      breakfast : 'Apple cinnamon porridge/ Vegetable uttapam with sambhar',
      lunch : 'Whole-grain roti with vegetable sabzi/ Dal with veg or non veg sabzi and brown rice',
      snacks : 'Fresh fruit smoothies or whey protein shakes',
      dinner : 'Chana masala with basmati rice and green salad/ One bowl of fruits and vegetables with multigrain rotis'
    },
    {
      day : 'Friday',
      breakfast : 'Vegetable dalia and a glass of milk/ 3-4 dal paddu with sambar',
      lunch : 'Vegetable sambar with brown rice/ 2 multigrain roti with veg/non veg curry',
      snacks : 'Veg sandwich or milk and apple',
      dinner : 'Tofu curry with potatoes and mixed vegetables/ chicken curry with 2 multigrain rotis'
    },
    {
      day : 'Saturday',
      breakfast : 'Multigrain parathas with avocado and sliced papaya/ dal paratha with mixed vegetables',
      lunch : ' Large salad with rajma curry and quinoa/ one bowl mixed vegetable kadai',
      snacks : 'nuts and seeds',
      dinner : 'Lentil pancakes with tofu tikka masala/ green salad with mixed vegetables and multigrain roti'
    },
    {
      day : 'Sunday',
      breakfast : 'Buckwheat porridge with sliced mango/ fruit salad with a glass of milk',
      lunch : 'Vegetable soup with whole-grain roti/ one bowl millet and dal khichdi with multigrain roti',
      snacks : 'Veg sandwich or milk and apple',
      dinner : 'Masala-baked tofu with vegetable curry/ non veg curry (chicken, seafood) with multigrain roti'
    },
  ]
  
  wgDiet = [
    {
      day : 'Monday',
      breakfast : 'Vegetable stuffed paratha, Curd / Omlete, Toasted bread',
      lunch : 'Whole-grain roti with mixed-vegetable curry with one dal and Rice / biryani / pulav (veg / non veg)',
      snacks : 'Groundnut chikki / DryFruit chikki and Roasted Soybean / Almonds',
      dinner : 'Tofu/chicken curry with mixed vegetables and a fresh spinach salad/chicken gravy with 2 multigrain rotis'
    },
    {
      day : 'Tuesday',
      breakfast : '1 to 2 vegetable cheese sandwiches and 1 glass of non-fat milk',
      lunch : 'Chickpea curry with brown rice/ Brown rice with dal',
      snacks : 'Fresh fruit smoothies or whey protein shakes',
      dinner : '3 medium-sized chapattis with ghee, 1 small bowl of legumes/dal, 1 small bowl of dry vegetable curry, 1 small bowl of chicken/fish'
    },
    {
      day : 'Wednesday',
      breakfast : '3 to 4 slices of whole wheat bread toast with peanut butter, 3 egg whites, and 1 full egg omelet',
      lunch : 'Whole-grain roti with tofu/ non veg and mixed vegetables',
      snacks : 'A handful of roasted chana/almonds/soybeans and 1 small bowl of upma/bhelpuri, or',
      dinner : '2 whole wheat chapattis, 1 small bowl of stir-fried vegetables with baked potato, and 1 small piece of lean chicken/fish'
    },
    {
      day : 'Thursday',
      breakfast : '1 bowl of oatmeal with a few almonds and walnuts, 1 banana, and 1 cup of low-fat milk with a scoop of whey protein',
      lunch : 'Whole-grain roti with vegetable sabzi/ Dal with veg or non veg sabzi and brown rice',
      snacks : '1 cup of low-fat yogurt and 1 fresh seasonal fruit ',
      dinner : 'Chana masala with basmati rice and green salad/ One bowl of fruits and vegetables with multigrain rotis'
    },
    {
      day : 'Friday',
      breakfast : '1 full plate of upma/daliya khichdi/poha cooked with plenty of colorful vegetables,',
      lunch : '1 small bowl of brown rice/2 whole wheat chapattis, 1 small bowl of stir-fried vegetables with baked potato, and 1 small piece of lean chicken/fish',
      snacks : '1 medium-sized bowl of vegetable/chicken soup (with butter) and 1 veg sandwich with mayonnaise or extra cheese',
      dinner : 'Tofu curry with potatoes and mixed vegetables/ chicken curry with 2 multigrain rotis'
    },
    {
      day : 'Saturday',
      breakfast : '2 pieces of multigrain bread with butter (low-fat), and 1 egg omelet',
      lunch : ' Large salad with rajma curry and quinoa/ one bowl mixed vegetable kadai',
      snacks : '1 whole-wheat bread sandwich with steamed chicken/3 egg whites',
      dinner : 'Lentil pancakes with tofu tikka masala/ green salad with mixed vegetables and multigrain roti'
    },
    {
      day : 'Sunday',
      breakfast : '2 to 3 fresh seasonal fruits (as per your choice), and 1 glass full of fresh fruit juice',
      lunch : '1 small bowl of pulav/biriyani, 1 small bowl of egg/paneer, 1 small bowl of vegetables, and 1 bowl of chicken soup/sprout salad',
      snacks : '1 cup of low-fat milk with a scoop of whey protein',
      dinner : 'Masala-baked tofu with vegetable curry/ non veg curry (chicken, seafood) with multigrain roti'
    },
  ]

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

  onWeightLoss(){

    this.showWg =false;
    this.showWl =! this.showWl;
    // setTimeout(() =>{
    //   document.getElementById('wlSec')?.scrollIntoView({behavior:'smooth', inline: "center"});
    // },300);
    
  }

  onWeightGain(){
    this.showWl = false;
    this.showWg = !this.showWg;
    // setTimeout(() =>{
    //   document.getElementById('wgSec')?.scrollIntoView({ behavior: 'smooth' });
    // },300);
    //
  }
}
