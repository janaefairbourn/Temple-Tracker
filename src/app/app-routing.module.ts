import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplesComponent } from './temples/temples.component';
import { TempleStartComponent } from './temples/temple-start/temple-start.component';
import { TempleDetailComponent } from './temples/temple-detail/temple-detail.component';
import { TempleEditComponent } from './temples/temple-edit/temple-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/temples', pathMatch: 'full' },
    { path: 'temples', component: TemplesComponent, children: [
        { path: '', component: TempleStartComponent },
        { path: 'new', component: TempleEditComponent },
        { path: ':id', component: TempleDetailComponent },
        { path: ':id/edit', component: TempleEditComponent },
    ] }  
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}