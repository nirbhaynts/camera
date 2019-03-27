import { Component, OnInit, HostListener } from '@angular/core';
import { CameraService } from './camera';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  test: string[];

  devices: any[];

  orientation: any;

  pics: string[] = [];

  constructor(
    private cameraService: CameraService
  ) { }

  public async ngOnInit() {

    this.test = [];
    this.test.push('navigator: ' + (typeof navigator != 'undefined' ? 'suppported' : 'not supported'));
    this.test.push('navigator.getUserMedia: ' + (typeof navigator.getUserMedia != 'undefined' ? 'suppported' : 'not supported'));
    this.test.push('navigator.mediaDevices: ' + (typeof navigator.mediaDevices != 'undefined' ? 'suppported' : 'not supported'));
    this.test.push('navigator.mediaDevices.getUserMedia: ' + (typeof navigator.mediaDevices.getUserMedia != 'undefined' ? 'suppported' : 'not supported'));
    this.test.push('navigator.mediaDevices.enumerateDevices: ' + (typeof navigator.mediaDevices.enumerateDevices != 'undefined' ? 'suppported' : 'not supported'));

    const devices = await navigator.mediaDevices.enumerateDevices();
    this.devices = devices.filter(device => device.kind == 'videoinput');
  }

  @HostListener('window:deviceorientation', ['$event'])
  public onDeviceOrientation({ alpha, gamma, beta, absolute }: DeviceOrientationEvent) {
    this.orientation = { alpha, gamma, beta, absolute };
  }

  public async openCamera() {
    let newPic: string;
    try {
      newPic = await this.cameraService.open();
    } catch (error) {
      console.dir(error);
    }
    if (newPic) {
      this.pics.push(newPic);
    }
  }

}
