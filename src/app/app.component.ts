import { Component, ViewChild } from '@angular/core';
import { DialogComponent } from './popup/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mygrid';

  @ViewChild('modal', {static: false}) modal: DialogComponent

  openModal() {
    this.modal.open();
  }
}
