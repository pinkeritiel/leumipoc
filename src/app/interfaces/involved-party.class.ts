class ListOfAddress {
    AddressType: string; 
    Address: string;
    Country: string; 
    Main: boolean; 
    SpamAccept: boolean;
    Validated: boolean;


  };

class  ListOfTaxCountry {
    Country: string; 
    TIN: string; 
};

export class InvolvedParty {
IPType: string;
IPId: string;
Country: string;
LastName: string;
FirstName: string;
DOB: string;
MaritialStatus: string;
Gender: string;
NumChildren: string;
EnglishLastName: string;
EnglishFirstName: string;
TaxCountries: ListOfTaxCountry[];
PostAddress: string;
ContactAddress: ListOfAddress[];
constructor(IPType: string,IPId: string,Country: string,LastName: string,FirstName: string,DOB: string,MaritialStatus: string,
			Gender: string,	NumChildren: string,EnglishLastName: string,EnglishFirstName: string,TaxCountries: ListOfTaxCountry[],
			PostAddress: string,ContactAddress: ListOfAddress[]
	) {
	this.IPType=IPType;
	this.IPId=IPId;
	this.Country=Country;
	this.LastName=LastName;
	this.FirstName=FirstName;
	this.DOB=DOB;
	this.MaritialStatus=MaritialStatus;
	this.Gender=Gender;
	this.NumChildren=NumChildren;
	this.EnglishLastName=EnglishLastName;
	this.EnglishFirstName=EnglishFirstName;
	this.TaxCountries=TaxCountries;
	this.PostAddress=PostAddress;
	this.ContactAddress=ContactAddress;

    }
}
