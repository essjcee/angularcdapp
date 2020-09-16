import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompactDiskComponent } from './compact-disk/compact-disk.component';
import { CompactDisksComponent } from './compact-disks/compact-disks.component';
import { CompactDiskAddEditComponent } from './compact-disk-add-edit/compact-disk-add-edit.component';
import { CompactDiskAddComponent } from './compact-disk-add/compact-disk-add.component';

const routes: Routes = [
  { path: '', component: CompactDisksComponent, pathMatch: 'full'},
  { path: 'compactdisk/:id', component: CompactDiskComponent },
  { path: 'add', component: CompactDiskAddEditComponent },
  { path: 'compactdisk/edit/:id', component: CompactDiskAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
