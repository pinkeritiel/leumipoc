import { Component, Input, OnInit } from '@angular/core';
import { InvolvedParty} from '../../interfaces/involved-party.class';

@Component({
  selector: 'app-current-ip',
  templateUrl: './current-ip.component.html',
  styleUrls: ['./current-ip.component.css']
})
export class CurrentIpComponent implements OnInit {
 @Input() ip: InvolvedParty;
  constructor() { }

  ngOnInit() {
  }

}
