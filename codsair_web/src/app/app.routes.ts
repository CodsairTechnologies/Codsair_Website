import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { SingleviewProductsComponent } from './singleview-products/singleview-products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },

    { path: 'footer', component: CommonFooterComponent },
    { path: 'feature-section', component: FeatureSectionComponent },
    { path: 'service-section', component: ServiceSectionComponent },
    { path: 'product/:id', component: SingleviewProductsComponent }




]
