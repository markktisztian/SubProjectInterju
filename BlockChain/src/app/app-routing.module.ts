import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubComponent } from './sub/sub.component';

const routes: Routes = [{ path: '', component: SubComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
