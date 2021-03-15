import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { Message } from '../../models/message.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-object-manipulations',
  templateUrl: './object-manipulations.component.html',
  styleUrls: ['./object-manipulations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectManipulationsComponent {
  @Input() public message: Message;
  public readonly buttonMessage = 'Detect changes';
  constructor(private http: HttpClient, private changeDetector: ChangeDetectorRef) { }

  public detectChangesByEvent(): void {
    // event which is bound to template can trigger сd
  }

  public detectChangesByHttpCall(): void {
    // http doesn't trigger cd with onPush strategy, so we have to mark it for cd manually
    this.http.get('https://cat-fact.herokuapp.com/facts').subscribe(() => {
      this.message.author = 'Frodo';
      this.changeDetector.markForCheck();
    });
  }

  public detectChangesByTimeout(): void {
    // async operations don't trigger cd with onPush strategy, so we have to mark it for cd manually
    setTimeout(() => {
      this.message.author = 'Pablo';
      this.changeDetector.markForCheck();
    }, 5000);
  }
}
