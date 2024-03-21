import { Component } from '@angular/core';
import { MessageModel } from '../models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'firstangularapp';
  messages: MessageModel[] = [
    new MessageModel(
      'Hey',
      'John',
      'Carter',
      'https://upload.wikimedia.org/wikipedia/commons/3/33/Hey_2018_logo.svg'
    ),
    new MessageModel(
      'Hello',
      'John',
      'Carter',
      'https://upload.wikimedia.org/wikipedia/commons/3/33/Hey_2018_logo.svg'
    ),
    new MessageModel(
      'Hi',
      'John',
      'Carter',
      'https://upload.wikimedia.org/wikipedia/commons/3/33/Hey_2018_logo.svg'
    ),
  ];
}
