import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title = 'My Card Title';
  text = 'My sample text';

  disabled = false

  imgUrl = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png';
      this.disabled = true
    }, 3000);
  }

  getInfo() {
    return 'This is method info';
  }
}
