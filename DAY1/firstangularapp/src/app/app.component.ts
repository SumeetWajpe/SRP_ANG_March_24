import { Component } from '@angular/core';
import { MessageModel } from '../models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'firstangularapp';
  firstMsg: MessageModel = new MessageModel(
    'Hey',
    'John',
    'Carter',
    'https://upload.wikimedia.org/wikipedia/commons/3/33/Hey_2018_logo.svg'
  );
}
