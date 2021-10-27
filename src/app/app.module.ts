import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { GridViewComponent } from './grid/grid-view/grid-view.component';
import { DataService } from "../app/data-service.service";
import { TableFilterPipe } from './shared/table-filter.pipe';
import { SortDirective } from './shared/sort.directive';
import { DialogComponent } from './popup/dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    TableFilterPipe,
    SortDirective,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
