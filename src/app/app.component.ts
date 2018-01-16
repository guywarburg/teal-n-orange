import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public dataUrl: string;
  public hideFileUploader = false;
  public isRevealed = true;
  private interval: any;

  ngOnInit() {
    this.startInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.isRevealed = !this.isRevealed;
    }, 5000);
  }

  hendleFileUpload(e) {
    this.dataUrl = e;
    this.hideFileUploader = true;
  }
}
