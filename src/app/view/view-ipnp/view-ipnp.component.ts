import { Component, OnInit } from '@angular/core';
import { InvolvedParty} from '../../interfaces/involved-party.class';
@Component({
  selector: 'app-view-ipnp',
  templateUrl: './view-ipnp.component.html',
  styleUrls: ['./view-ipnp.component.css']
})
export class ViewIpnpComponent implements OnInit {
	ip: InvolvedParty;
	selectedIPNPDetails:boolean;
	selectedIPNPKYC1:boolean;
	selectedButton: string;
    navCurrentScreen: number;

  constructor() { }

  ngOnInit() {
  	this.selectedIPNPDetails = true;
	this.selectedIPNPKYC1 = false;
	this.ip = new InvolvedParty("","","","","","","","","","","",null,"",null,"","","","");
	this.navCurrentScreen = 0;
  }

  onNotify(message: string): void {
  	//https://blogs.msmvps.com/deborahk/passing-data-to-and-raising-an-event-from-a-nested-component/
  	this.selectedButton=message;
  	switch(message) {
    case "btn1":
        this.selectedIPNPDetails =true;
        this.selectedIPNPKYC1 = false;
        break;
    case "btn2":
        this.selectedIPNPDetails =false;
        this.selectedIPNPKYC1 = true;
        break;
    case "btn3":
        this.selectedIPNPDetails =true;
        this.selectedIPNPKYC1 = false;
        break;
    case "btn4":
        this.selectedIPNPDetails =true;
        this.selectedIPNPKYC1 = false;
        break;
    default:
        this.selectedIPNPDetails =true;
        this.selectedIPNPKYC1 = false;
	}
  }
  
  onScreenNext(tempNestedObj: object){
		this.ip = tempNestedObj["ip"];
		if ("next" == tempNestedObj["direction"]){
			//alert("next");
			this.navCurrentScreen++;
		}else {
		//	alert("prev");
			this.navCurrentScreen--;	
		}
		
		
		//alert(this.navCurrentScreen);
  }

}
