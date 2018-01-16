import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  @Output() fileUploaded: EventEmitter<string> = new EventEmitter();
  @Output() uploadStarted: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  triggerFileClick() {
    this.fileInput.nativeElement.click();
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = () => {
      this.fileUploaded.emit(myReader.result);
    };
    myReader.readAsDataURL(file);
    myReader.onloadstart = () => {
      this.uploadStarted.emit(true);
    };
  }
}
