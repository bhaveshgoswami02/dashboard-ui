import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberMaintenanceComponent } from './member-maintenance/member-maintenance.component';
import { StoresMaintenanceComponent } from './stores-maintenance/stores-maintenance.component';

const routes: Routes = [
  {path:'',component:StoresMaintenanceComponent},
  {path:'member-maintenance',component:MemberMaintenanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
