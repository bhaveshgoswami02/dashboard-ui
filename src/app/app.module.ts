import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresMaintenanceComponent } from './stores-maintenance/stores-maintenance.component';
import { MemberMaintenanceComponent } from './member-maintenance/member-maintenance.component';
import { ToolsMigrationComponent } from './tools-migration/tools-migration.component';
import { ModulesMaintenanceComponent } from './modules-maintenance/modules-maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    StoresMaintenanceComponent,
    MemberMaintenanceComponent,
    ToolsMigrationComponent,
    ModulesMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
