import { Component } from '@angular/core';

@Component({
  selector: 'app-kash',
  templateUrl: './app.component.html', // Check the file path here
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-kash-project';
  carouselOptions = {
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
      992: { items: 4 },
    },
};
}
