import { Component, OnInit } from '@angular/core';
import { Conversation } from '../chat.model';
import { Utilts } from '../utils'
import { Random } from '../random'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  constructor() {}
  conversation: Conversation[] = [];
  message: string;
  ngOnInit() {}

  send() {
    let newMessage: Conversation = { from: '', to: '', message: '', date: '' };
    newMessage.from = 'Vivek';
    newMessage.to = 'Prachi';
    newMessage.message = this.message;
    newMessage.date = Utilts.getDate();
    this.conversation.push(newMessage);

    let replayMessage: Conversation = {
      from: '',
      to: '',
      message: '',
      date: '',
    };
    replayMessage.from = 'Prachi';
    replayMessage.to = 'Vivek';
    replayMessage.message = Random.messages[Utilts.getRandomInt(0,Random.messages.length)];
    replayMessage.date = Utilts.getDate();

    this.conversation.push(replayMessage);
    this.message = '';
  }

}
