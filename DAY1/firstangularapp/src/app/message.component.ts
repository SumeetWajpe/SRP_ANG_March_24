import { Component, Input } from '@angular/core';
import { MessageModel } from '../models/message.model';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
})
export class Message {
  //   @Input() msg: string = '';
  //   @Input() from: string = '';
  //   @Input() to: string = '';
  //   @Input() imageUrl: string =
  //     'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
  @Input() msgdetails: MessageModel = new MessageModel();
}
