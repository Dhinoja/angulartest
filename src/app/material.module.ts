import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSelectModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

const matModules = [
  BrowserAnimationsModule,
  MatSelectModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
