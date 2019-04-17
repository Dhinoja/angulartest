import { NgModule } from "@angular/core";
import {
  MatSelectModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatTableModule,
  MatCardModule,
  MatInputModule
} from "@angular/material";
import { ToCsvPipe } from "./pipes/ToCsv.pipe";

const matModules = [
  MatSelectModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatTableModule,
  MatCardModule,
  MatInputModule
];

@NgModule({
  declarations: [ToCsvPipe],
  imports: [matModules],
  exports: [ToCsvPipe, matModules]
})
export class SharedModule {}
