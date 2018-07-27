import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-actionitem',
  templateUrl: './actionitem.component.html',
  styles: [ `.backdrop{ 
    background-color:rgba(0,0,0,0.6);    
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;    
}`]
})
export class ActionitemComponent implements OnInit {

  display = 'none';

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.display = 'block';
  }

  onCloseHandled(){
    this.display='none'; 
 }

}
