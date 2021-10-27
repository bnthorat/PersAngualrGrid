import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  
  @ViewChild('myModal', {static: false}) modal: ElementRef;
  open() {
    this.modal.nativeElement.style.display = 'block';
  }
  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
