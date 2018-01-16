import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent implements OnChanges {
  @Input() base64: string;

  @ViewChild('downloader') btnRef: ElementRef;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.base64.currentValue === changes.base64.previousValue) {
      return;
    }
    this.btnRef.nativeElement.href = changes.base64.currentValue;
  }
}
