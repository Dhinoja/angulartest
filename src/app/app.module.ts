import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AuthComponent } from "./auth/auth.component";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
