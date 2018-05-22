import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvolvedParty} from '../../interfaces/involved-party.class';

@Component({
  selector: 'app-view-ipnpdetails',
  templateUrl: './view-ipnpdetails.component.html',
  styleUrls: ['./view-ipnpdetails.component.css']
})
export class ViewIpnpdetailsComponent implements OnInit {
  @Input() ip: InvolvedParty;
  @Output() notify: EventEmitter<object> = new EventEmitter<object>();
  idTypes  = ['ת.ז.','דרכון','תעודת מסע/מעבר','תושב רש"פ'];
  genders = ['זכר','נקבה'];
  maritalStatus = ['רווק', 'נשוי','גרוש'];
  constructor() { }

  ngOnInit() {
  }
  nextScreen(){
  	//alert('next');
	this.notify.emit({ip:this.ip,direction:"next"});
  }
  prevScreen(){
  	alert('next');
	this.notify.emit({ip:this.ip,direction:"prev"});
  }
}
