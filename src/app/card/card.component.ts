import {Component} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  title = 'My Card Title';
  text = 'My sample text';

  changeTitle() {
    this.title = 'This title has been changed';
  }

  inputHandler(event: any) {
    const value = event.target.value;
    this.title = value;
  }

}
