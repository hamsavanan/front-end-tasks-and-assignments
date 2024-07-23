import { Component } from '@angular/core';

@Component({
  selector: 'app-hwtask',
  templateUrl: './hwtask.component.html',
  styleUrls: ['./hwtask.component.css']
})

export class HwtaskComponent {
  showImage: boolean = true; // Initially show the image

  toggleImage() {
    this.showImage = !this.showImage; // Toggle the boolean value
  }
}