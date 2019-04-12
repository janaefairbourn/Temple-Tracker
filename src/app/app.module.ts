import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplesComponent } from './temples/temples.component';
import { HeaderComponent } from './header.component';
import { TempleListComponent } from './temples/temple-list/temple-list.component';
import { TempleItemComponent } from './temples/temple-list/temple-item/temple-item.component';
import { TempleEditComponent } from './temples/temple-edit/temple-edit.component';
import { TempleDetailComponent } from './temples/temple-detail/temple-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { TempleStartComponent } from './temples/temple-start/temple-start.component';
import { WindRefService } from './wind-ref.service';
import { TempleService } from './temples/temple.service';
import { DataStorageService } from './shared/data-storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TemplesComponent,
    HeaderComponent,
    TempleListComponent,
    TempleItemComponent,
    TempleEditComponent,
    TempleDetailComponent,
    DropdownDirective,
    TempleStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [WindRefService, TempleService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
