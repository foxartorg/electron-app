// import {Component, OnInit} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'electron-app';
// }
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'electron-app';
  sources = [];
  selectedSource: any;
  videostream: any;
  @ViewChild('videoElement', { static: true }) videoElement: any;
  video: any;

  constructor() {
  }


  ngOnInit(): void {
    // this.video = this.videoElement.nativeElement;
    console.log('App Component');
  }

  displaySources() {
    // if (this._electronService.isElectronApp) {
    //   this._electronService.desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
    //     if (error) throw error;
    //     this.sources = sources;
    //     if (this.sources.length > 0) {
    //       this.selectedSource = this.sources[0];
    //     }
    //   });
    // }
  }
}
