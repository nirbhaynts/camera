import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSliderModule } from '@angular/material';
import { CameraComponent } from './camera.component';
import { CameraService } from './camera.service';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule
  ],
  declarations: [
    CameraComponent
  ],
  providers: [
    CameraService
  ],
  entryComponents: [
    CameraComponent
  ]
})
export class CameraModule { }
