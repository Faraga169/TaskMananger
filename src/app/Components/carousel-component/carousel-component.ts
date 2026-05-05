import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  imports: [],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css',
})
export class CarouselComponent {

  images:string[]=['assets/1.jpg', 'assets/2.jpg','assets/3.jpg','assets/4.jpg'];
  currentIndex=signal<number>(0);
  currentImage = computed(() => this.images[this.currentIndex()]);

ngOnInit(): void {

this.autoSlide();

}

  autoSlide() {
  setInterval(() => {
    this.currentIndex.update(prev => (prev + 1) % this.images.length);
  }, 2000);
}

prev(){
 this.currentIndex.update(prev => (prev - 1) % this.images.length);
}

next(){
 this.currentIndex.update(prev => (prev + 1) % this.images.length);
}



goTo(i: number) {
  this.currentIndex.set(i);
}

}
