import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { CanvasContainerComponent } from './canvas-container/canvas-container.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { DownloadButtonComponent } from './download-button/download-button.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasContainerComponent,
    FileUploaderComponent,
    DownloadButtonComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
