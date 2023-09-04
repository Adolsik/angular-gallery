import { Component } from '@angular/core';
import { item,Category } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Galeria Zdjęć';
  
  showImage: boolean = false
  recentPage: number = 1;
  previousPage: number = 0;
  imagesPerPage: number = 4;
  mainImageSource: string = 'assets/images/1.jpg'
  mainImageDetail: string = 'KRISS VECTOR SBR BLK Kaliber 9x19 - 9 690,00 zł'
  hide: boolean = false;
  selectedCategory: number = Category.all;

  items: item[] = [
    {source:"assets/images/1.jpg", details:"KRISS VECTOR SBR BLK Kaliber 9x19 - 9 690,00 zł",category: Category.rifle},
    {source:"assets/images/2.jpg", details:"Stag Arms 15 M4 Rifle - 6 190,00 zł", category: Category.rifle},
    {source:"assets/images/3.jpg", details:"Stag Arms 15 Tactical SBR FDE 10,5 - 6 990,00 zł", category: Category.rifle},
    {source:"assets/images/4.jpg", details:"JP Enterprises JP-15 Match Ready Rifle 18'' - 16 490,00 zł", category: Category.rifle},
    {source:"assets/images/5.jpg", details:"Ekspres Caesar Guerini Express Maxum - 22 490,00 zł", category: Category.rifle},
    {source:"assets/images/6.jpg", details:"Merkel Helix Speedster - 15 500,00 zł",category: Category.rifle},
    {source:"assets/images/7.jpg", details:"Merkel Helix Custom - 46 900,00 zł", category: Category.rifle},
    {source:"assets/images/8.jpg", details:"Merkel Kniejówka B3 BLACK - 15 900,00 zł ", category: Category.rifle},
    {source:"assets/images/9.jpg", details:"Rewolwer Smith&Wesson 686 Plus 2.5'' - 4 190,00 zł  ",category: Category.pistol},
    {source:"assets/images/10.jpg", details:"Rewolwer Smith & Wesson Performance Center MODEL 327 TRR8 - 7 490,00 zł",category: Category.pistol},
    {source:"assets/images/11.jpg", details:"Rewolwer Smith & Wesson PERFORMANCE CENTER Model 629 Hunter .44 Magnum - 7 790,00 zł",category: Category.pistol},
  ]

  items1: item[] = [ {source:"assets/images/1.jpg", details:"KRISS VECTOR SBR BLK Kaliber 9x19 - 9 690,00 zł",category: Category.rifle},
    {source:"assets/images/2.jpg", details:"Stag Arms 15 M4 Rifle - 6 190,00 zł", category: Category.rifle},
    {source:"assets/images/3.jpg", details:"Stag Arms 15 Tactical SBR FDE 10,5 - 6 990,00 zł", category: Category.rifle},
    {source:"assets/images/4.jpg", details:"JP Enterprises JP-15 Match Ready Rifle 18'' - 16 490,00 zł", category: Category.rifle},
    {source:"assets/images/5.jpg", details:"Ekspres Caesar Guerini Express Maxum - 22 490,00 zł", category: Category.rifle},
    {source:"assets/images/6.jpg", details:"Merkel Helix Speedster - 15 500,00 zł",category: Category.rifle},
    {source:"assets/images/7.jpg", details:"Merkel Helix Custom - 46 900,00 zł", category: Category.rifle},
    {source:"assets/images/8.jpg", details:"Merkel Kniejówka B3 BLACK - 15 900,00 zł ", category: Category.rifle},
  ]

  items2: item[] = [
    {source:"assets/images/9.jpg", details:"Rewolwer Smith&Wesson 686 Plus 2.5'' - 4 190,00 zł  ",category: Category.pistol},
    {source:"assets/images/10.jpg", details:"Rewolwer Smith & Wesson Performance Center MODEL 327 TRR8 - 7 490,00 zł",category: Category.pistol},
    {source:"assets/images/11.jpg", details:"Rewolwer Smith & Wesson PERFORMANCE CENTER Model 629 Hunter .44 Magnum - 7 790,00 zł",category: Category.pistol},
  ]

  numberOfPages: number = Math.ceil(this.items.length / 4);
  pagination: string = `${this.recentPage}/${this.numberOfPages}`

  ImageClicked(e: any, details: string){
    this.mainImageSource = e.target.currentSrc;
    this.mainImageDetail = details;
    this.showImage = true;
  }


  ButtonRight(): void {
    if(this.recentPage >= this.numberOfPages){
      this.recentPage = 1;
      this.previousPage = 0;
    }
    else {
      this.recentPage++;
      this.previousPage++;
    }
    this.pagination = `${this.recentPage}/${this.numberOfPages}`
  }


  ButtonLeft(): void {
    if(this.recentPage <= 1){
      this.recentPage = this.numberOfPages;
      this.previousPage = this.numberOfPages - 1;
    }
    else {
     this.recentPage--;
     this.previousPage--;
    }
    this.pagination = `${this.recentPage}/${this.numberOfPages}`
  }


  BackToMain(): void {
    this.showImage = false;
    this.hide = false;
  }


  HideDetails(): void {
    if(this.hide == false){
      this.hide = true
    }
    else{
      this.hide = false
    }
  }

  CategorySelect(e: any){
      this.selectedCategory = e.target.value;
      this.recentPage = 1;
      this.previousPage = 0;

      if(e.target.value==0){
        this.numberOfPages = Math.ceil(this.items.length / 4);
      }
      else if(e.target.value==1){
        this.numberOfPages = Math.ceil(this.items1.length / 4);
      }
      else{
        this.numberOfPages = Math.ceil(this.items2.length / 4);
      }
      this.pagination = `${this.recentPage}/${this.numberOfPages}`
  }
}