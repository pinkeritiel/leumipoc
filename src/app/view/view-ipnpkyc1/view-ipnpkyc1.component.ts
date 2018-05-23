import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvolvedParty} from '../../interfaces/involved-party.class';

@Component({
  selector: 'app-view-ipnpkyc1',
  templateUrl: './view-ipnpkyc1.component.html',
  styleUrls: ['./view-ipnpkyc1.component.css']
})
export class ViewIpnpkyc1Component implements OnInit {
  @Input() ip: InvolvedParty;
  @Output() notify: EventEmitter<object> = new EventEmitter<object>();
  

  ListPlaceOfId = ['סניף','בקונסוליה','סניף אחר'];
  ListOtherCitizenship = ['כן', 'לא'];
  ListCountryOfBirth=['אוגנדה','אוזבקיסטן','אוסטריה'];
  ListIsUSPerson= ['כן', 'לא'];
  ngOnInit() {
  }
  nextScreen(){
    //alert('next');
  this.notify.emit({ip:this.ip,direction:"next"});
  }
  prevScreen(){
  this.notify.emit({ip:this.ip,direction:"prev"});
  }
}
