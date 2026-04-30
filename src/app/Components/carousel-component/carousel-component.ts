import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  imports: [],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css',
})
export class CarouselComponent {
  constructor(){
this.autoSlide();
  }
  images:string[]=['assets/1.jpg', 'assets/2.jpg','assets/3.jpg','assets/4.jpg'];
  currentIndex:number=0;
  currentImage:string=this.images[this.currentIndex];
  target:number=0;

  autoSlide() {
  setInterval(() => {
    this.currentIndex = (this.currentIndex+1)  % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }, 2000);
}

prev(){
  if(this.currentIndex==0){
           this.currentIndex=this.images.length
  }
   this.currentIndex = (this.currentIndex-1)  % this.images.length;
   this.currentImage = this.images[this.currentIndex];
}

next(){
  this.currentIndex = (this.currentIndex+1)  % this.images.length;
  this.currentImage = this.images[this.currentIndex];
}

// ngOnInit(): void {
//   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//   //Add 'implements OnInit' to the class.


// }

goTo(i: number) {
  this.currentIndex = i;
  this.currentImage = this.images[this.currentIndex];
}

}
