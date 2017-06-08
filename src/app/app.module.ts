import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './content/login/login.component';
import { BannerComponent } from './content/banner/banner.component';
import { ProfileCardComponent } from './content/profile_card/profile_card.component';
import { ConnectComponent } from './content/connect/connect.component';
import { CustomerConsentComponent } from './content/customer_consent/customer_consent.component';

import { MessageCommunicationService } from './services/message-communication.service';
import { RecorderService } from './services/recorder.service';
import { SharepointService } from './services/sharepoint.service';
import { UserService } from './services/user.service';
import { NavigationService } from './services/navigation.service';
import { CanActivateViaAuthGuardService } from './services/canactivate-via-auth-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { FundNavigatorComponent } from './content/fund-navigator/fund-navigator.component';
import { NotLoggedInComponent } from './content/not-logged-in/not-logged-in.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    NavbarComponent,
    ContentComponent,
    LoginComponent,
    BannerComponent,
    ProfileCardComponent,
    ConnectComponent,
    CustomerConsentComponent,
    FundNavigatorComponent,
    NotLoggedInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    MessageCommunicationService,
    RecorderService,
    SharepointService,
    UserService,
    NavigationService,
    CanActivateViaAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }