import { Routes } from '@angular/router';
import {NewPackageComponent} from "./new-package/new-package.component";
import {HolidaysComponent} from "./holidays/holidays.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'packages',
    pathMatch: 'full'
  },
  {
    path: 'new-package',
    component: NewPackageComponent
  },
  {
    path: 'holiday-packages',
    component: HolidaysComponent
  }
];
