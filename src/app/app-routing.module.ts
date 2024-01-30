import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
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
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ModalDisplayComponent } from './Additional/modal-display/modal-display.component';
import { InsightsComponent } from './insight/insights/insights.component';
import { BlogComponent } from './insight/blog/blog.component';




const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent},
{ path: 'bodylevel', component: BodyLevelComponent },
{ path: 'bodylevel/:option', component: BodyLevelComponent },
{ path: 'leader', component: LeadersComponent },
{ path: 'product', component: ProductComponent },
{ path: 'contact', component: ContactComponent},
{ path: 'ourstory', component: OurstoryComponent},
{ path: 'company', component: CompanyComponent },
{ path: 'partnerShip', component: PartnerShipComponent },
{ path: 'becomePartner', component: BecomePartnerComponent},
{ path: 'brochure', component: BrochureComponent},
{ path: 'client', component: ClientComponent },
{ path: 'sidebar', component: SidebarComponent },
{ path: 'privacyPolicy' , component: PrivacyPolicyComponent },
{ path: 'modal' , component: ModalDisplayComponent},
{ path: 'insight', component: InsightsComponent},
{ path: 'blog', component: BlogComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }