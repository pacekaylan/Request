import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { products } from './products';
import { Subject, from, merge, Observable } from 'rxjs';
import { switchMap, map, windowCount, scan, take, tap } from 'rxjs/operators';
import { ChatModule, Message, User, Action, ExecuteActionEvent, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';
import { ChatService } from './services/chat.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { shareReplay } from 'rxjs/operators';
//import { NotificationService } from '@progress/kendo-angular-notification';



@Component({
  providers: [ ChatService ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
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
  
  // //dynamic tabs
  // public navLinks: any[] = [
  //   { label: 'Missions', path: 'missions' },
  //   { label: 'Agents', path: 'agents' },
  //   { label: 'GeoFences', path: 'geofences' }
  // ]

  menuItems: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
constructor(private intl: IntlService, private svc: ChatService, private breakpointObserver: BreakpointObserver) {
    //this.labelContent = this.labelContent.bind(this);
 

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
  

ngOnInit(){
  
}

public sendMessage(e: SendMessageEvent): void {
  this.local.next(e.message);

  this.local.next({
    author: this.bot,
    typing: true
  });

  this.svc.submit(e.message.text);
}

}