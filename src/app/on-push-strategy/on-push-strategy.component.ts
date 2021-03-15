import {Component, OnInit} from '@angular/core';
import {Message} from './models/message.model';
import {AllowMutation} from './enums/allow-mutation.enum';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-on-push-strategy',
  templateUrl: './on-push-strategy.component.html',
  styleUrls: ['./on-push-strategy.component.scss']
})
export class OnPushStrategyComponent implements OnInit {
  public message1: Message;
  public message2: Message;
  public AllowMutation = AllowMutation;
  public message2$: BehaviorSubject<Message>;

  public ngOnInit(): void {
    this.message1 = {
      author: 'Carl'
    };
    this.message2 = {
      author: 'Ivan'
    };
    this.message2$ = new BehaviorSubject<Message>(this.message2);
  }

  public changeAuthorForObject(allowMutations: AllowMutation): void {
    if (allowMutations === AllowMutation.NO) {
      this.message1 = {
        author: 'Johny'
      };
    } else if (AllowMutation.YES) {
      this.message1.author = 'Bill';
    }
  }

  public changeAuthorForSubject(): void {
    this.message2.author = 'Kolya';
    this.message2$.next(this.message2);
  }
}
