import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthServiceService } from './auth-service.service';
import { PartnerService } from './partner.service';
import { BodyLevelComponent } from './body-level/body-level.component';
import { LeadersComponent } from './leaders/leaders.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { OurstoryComponent } from './about/ourstory/ourstory.component';
import { CompanyComponent } from './about/company/company.component';
import { PartnerShipComponent } from './partner/partner-ship/partner-ship.component';
import { BecomePartnerComponent } from './partner/become-partner/become-partner.component';
import { BrochureComponent } from './brochure/brochure.component';
import { ClientComponent } from './client/client.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlertComponent } from './Additional/alert/alert.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ScrollIndicatorComponent } from './Additional/scroll-indicator/scroll-indicator.component';
import { LoaderComponent } from './Additional/loader/loader.component';
import { CommonModule } from '@angular/common';
import { LoaderService } from './loader.service';
import { FormComponent } from './Additional/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalDisplayComponent } from './Additional/modal-display/modal-display.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InsightsComponent } from './insight/insights/insights.component';
import { BlogComponent } from './insight/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    BodyLevelComponent,
    LeadersComponent,
    ProductComponent,
    ContactComponent,
    OurstoryComponent,
    CompanyComponent,
    PartnerShipComponent,
    BecomePartnerComponent,
    BrochureComponent,
    ClientComponent,
    SidebarComponent,
    AlertComponent,
    PrivacyPolicyComponent,
    ScrollIndicatorComponent,
    LoaderComponent,
    FormComponent,
    ModalDisplayComponent,
    InsightsComponent,
    BlogComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    ModalModule.forRoot()
  ],

  entryComponents: [
AlertComponent
  ],
  providers: [AuthServiceService,PartnerService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
