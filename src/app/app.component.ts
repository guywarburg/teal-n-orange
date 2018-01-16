import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dataUrl: string;
  public hideFileUploader: boolean = false;

  hendleFileUpload(e) {
    this.dataUrl = e;
    this.hideFileUploader = true;
  }
}
