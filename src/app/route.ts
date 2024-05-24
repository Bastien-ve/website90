import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectiondetailsComponent } from './sectiondetails/sectiondetails.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: SectiondetailsComponent,
    title: 'Section details'
  }
];

export default routeConfig;
