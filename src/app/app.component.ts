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
  public hideBg = false;
  public fadeToBlack = false;
  public loading = false;
  private interval: any;

  ngOnInit() {
    this.startInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.isRevealed = !this.isRevealed;
    }, 5000);
  }

  handleFileUpload(e) {
    this.dataUrl = e;
    this.hideFileUploader = true;
    this.stopAnimation();
    this.toggleLoader(false);
  }

  stopAnimation() {
    clearInterval(this.interval);
    this.hideBg = true;
    this.fadeToBlack = true;
  }

  toggleLoader(val) {
    this.loading = val;
  }
}
