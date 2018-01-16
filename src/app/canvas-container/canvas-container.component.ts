import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-canvas-container',
  templateUrl: './canvas-container.component.html',
  styleUrls: ['./canvas-container.component.scss']
})
export class CanvasContainerComponent implements OnInit, OnChanges {
  @Input() dataUrl: string;

  public height: number;
  public width: number;
  public convertedImage: string;
  private ctx: CanvasRenderingContext2D;
  private img = new Image();
  private imgData;

  @ViewChild('canvas') canvasRef: ElementRef;

  constructor() { }

  ngOnInit() {
    this.height = 450;
    this.width = 600;
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataUrl.currentValue === changes.dataUrl.previousValue) {
      return;
    }
    this.img.src = changes.dataUrl.currentValue;
    this.img.onload = () => {
      this.tealAndOrange(this.img);
    };
  }

  tealAndOrange(img) {
    this.ctx.drawImage(img, 0, 0, this.width, this.height);
    this.imgData = this.ctx.getImageData(0, 0, this.width, this.height);
  }

  convertTealAndOrange() {
    for (let i = 0; i < this.imgData.data.length; i += 4) {
      this.imgData.data[i + 2] = this.imgData.data[i + 1]; // blue -> assign blue
    }
    this.ctx.putImageData(this.imgData, 0, 0);
    this.prepareForDownload();
  }

  prepareForDownload() {
    let data = this.canvasRef.nativeElement.toDataURL('image/png');
    data = this.convertDataHeader(data);
    console.log('data', data);
    this.convertedImage = data;
  }

  convertDataHeader(b64img: string) {
    let image = b64img.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    image = image.replace(/^data:application\/octet-stream/,
      'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=teal-n-orange.png');
    return image;
  }
}
