import { Component } from '@angular/core';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { IntlService } from '@progress/kendo-angular-intl';
import { products } from './products';
import { Subject, from, merge, Observable } from 'rxjs';
import { switchMap, map, windowCount, scan, take, tap } from 'rxjs/operators';
import { ChatModule, Message, User, Action, ExecuteActionEvent, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';
import { ChatService } from './services/chat.service';

@Component({
  providers: [ ChatService ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RAR';
  public feed: Observable<Message[]>;

  public readonly user: User = {
    id: 1
  };

  public readonly bot: User = {
    id: 0
  };

  private local: Subject<Message> = new Subject<Message>();
  public gridData: any[] = products;
  public sliderValue: number = 10;
  public pieData: any[] = [
    { category: '0-14', value: 0.2545 },
    { category: '15-24', value: 0.1552 },
    { category: '25-54', value: 0.4059 },
    { category: '55-64', value: 0.0911 },
    { category: '65+', value: 0.0933 }
];

public weatherData = [
  { month: "January", min: 5, max: 11 },
  { month: "February", min: 5, max: 13 },
  { month: "March", min: 7, max: 15 },
  { month: "April", min: 10, max: 19 },
  { month: "May", min: 13, max: 23 },
  { month: "June", min: 17, max: 28 },
  { month: "July", min: 20, max: 30 },
  { month: "August", min: 20, max: 30 },
  { month: "September", min: 17, max: 26 },
  { month: "October", min: 13, max: 22 },
  { month: "November", min: 9, max: 16 },
  { month: "December", min: 6, max: 13 }
];

public labelContentFrom(e: any): string {
    return `${ e.value.from } °C`;
}

public labelContentTo(e: any): string {
    return `${ e.value.to } °C`;
}

constructor(private intl: IntlService, private svc: ChatService) {
    this.labelContent = this.labelContent.bind(this);

    const hello: Message = {
      author: this.bot,
      suggestedActions: [{
        type: 'reply',
        value: 'Neat!'
      }, {
        type: 'reply',
        value: 'Thanks, but this is boring.'
      }],
      timestamp: new Date(),
      text: 'Hello, this is a demo bot. I don`t do much, but I can count symbols!'
    };

    this.feed = merge(
      from([ hello ]),
      this.local,
      this.svc.responses.pipe(
        map((response): Message => ({
          author: this.bot,
          text: response
        })
      ))
    ).pipe(
      // ... and emit an array of all messages
      scan((acc: Message[], x: Message) => [...acc, x], [])
    );
}

public sendMessage(e: SendMessageEvent): void {
  this.local.next(e.message);

  this.local.next({
    author: this.bot,
    typing: true
  });

  this.svc.submit(e.message.text);
}

public labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category} years old: ${this.intl.formatNumber(args.dataItem.value, 'p2')}`;
}

}