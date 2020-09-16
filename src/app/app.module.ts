import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompactDiskComponent } from './compact-disk/compact-disk.component';
import { CompactDisksComponent } from './compact-disks/compact-disks.component';
import { CompactDiskAddEditComponent } from './compact-disk-add-edit/compact-disk-add-edit.component';
import { CompactDiskService } from './compact-disk.service';
import { CompactDiskAddComponent } from './compact-disk-add/compact-disk-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CompactDiskComponent,
    CompactDisksComponent,
    CompactDiskAddEditComponent,
    CompactDiskAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CompactDiskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
