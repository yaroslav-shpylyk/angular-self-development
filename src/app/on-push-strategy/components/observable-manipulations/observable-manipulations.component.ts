import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable-manipulations',
  templateUrl: './observable-manipulations.component.html',
  styleUrls: ['./observable-manipulations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableManipulationsComponent implements OnInit {
  @Input() public message: Observable<Message>;
  public author: string;

  constructor(private changeDetector: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.message.subscribe((message: Message) => {
      this.author = message.author;
      this.changeDetector.markForCheck();
    });
  }
}
