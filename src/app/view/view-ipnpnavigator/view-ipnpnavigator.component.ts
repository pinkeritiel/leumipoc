import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-ipnpnavigator',
  templateUrl: './view-ipnpnavigator.component.html',
  styleUrls: ['./view-ipnpnavigator.component.css']
})
export class ViewIpnpnavigatorComponent implements OnInit {
  activeButton: string;
  buttonNames: any[];
  @Input() navCurrentScreen: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.buttonNames = ["btn1","btn2","btn3","btn4"];
  }

  ngOnChanges() {
    if (this.navCurrentScreen != null && this.buttonNames != null){
      this.activeButton = this.buttonNames[this.navCurrentScreen];
    //  alert(this.activeButton);
      this.setActive(this.activeButton);
      }
  }

  setActive (buttonName){
    this.activeButton = buttonName;
    this.notify.emit(this.activeButton);  
  }

  isActive (buttonName): boolean{
    return this.activeButton === buttonName;
  }

}