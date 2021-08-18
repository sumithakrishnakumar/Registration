import { Component} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown'
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
import { FormBuilder } from '@angular/forms';
import { FormControl,FormGroup, Validators } from "@angular/forms";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

imports: [
    BrowserModule,NgModule,FormsModule,
    NgMultiSelectDropDownModule.forRoot()
]

@Component({
selector:'app-register',
templateUrl:'./register.component.html',
styleUrls:['./register.component.css']
})


export class RegisterComponent {
alert:boolean=false
alertview:boolean=false
alertedit:boolean=false
Registerstatus='';
isDisplayed = false;
isDisplayedview = false;
alertdepend:boolean=false;
alertdepedendextra:boolean=false;
depedent2:boolean=false
depedent1:boolean=false
buttonAlert:boolean=false
ishiddenform:boolean=false;
closeedit:boolean=false;
ishideadd:boolean=false;
spanage:boolean=false;
hideclaimdependent1:boolean=false;
hideclaimdependent2:boolean=false;
savedepedentclaimsuccess:boolean=false;
// registermembername='';
result='';
heading='';
dobYear='';
registermemberdob:any;
// age='';
registermembername: string = '';
registermemberaddress: string = '';
registermembercity: string = '';
registermemberpan: string = '';
registermembernumber: string = '';
registeremail:any;
secret:any;
registermembercountry: string = '';
registermemberage: any;
emailid:any;
emailvalue:any;
showAge:any;
showAgevalue:any;
closedepedent:boolean =false
value:any;
message:any;
india:any;
spain:any;
text:any;
city:any;
country: string ='';
depedentname:any;
depedentrelation:any;
depedentname2:any;
depedentrelation2:any;
dependent: string='Add Depedent';
myDate:any;
errorAge:any;
State1:any;
state2:any;
claimId:any;
claimId2:any;
errorvisible:boolean=false;
len:any;
validnumber:any;
city1:any;
city2:any;
mobileNumber:any;
claimsadd:any;
ishideclaim:any;
saveclaim:any;
claimIfinal:any;
claimIdependebtfinal:any;
ishideclaimform:any;
claimmembername:any;
claimmemberdob:any;
claimmemberdoa:any;
claimmemberdod:any;
providername:any;
TotalBillamt:any;
claimmemberdob2:any;
claimmemberdoa2:any;
claimmemberdod2:any;
providername2:any;
TotalBillamt2:any;
isDisplayedcliam:boolean=false
ishideclaims:boolean=false
emaildata:any;
shoeviewdependent:boolean=true;
ishidedependentbtn:boolean=false;
showclaimdepedent:boolean=true;
editdepedent:boolean=false;
viewdepedent2enable:boolean=false;
editdependent2:boolean=false;
ishideeditdependent2:boolean=false;
hideviewdepemdent:boolean=false;
editviewdependent1:boolean=false;
submiteditviewdependentg2=false;
adddependentclaim:boolean=false;
showclaimdepedent2:boolean=true;
claimdependentdetails2:boolean=false;
dependentclaimname:any;
hideviewdepemdent2:boolean=false;
TotalBillamtdependent2:any;
providernamedependent2:any;
claimmemberdependentdod2:any;
claimmemberdependentdoa2:any;
claimmemberdependentdob2:any;
claimmdepedent:any;
claimmemberdependentname:any;
claimmemberdependentdob:any;

claimmemberdependentdoa:any;
claimmemberdepedentdod:any;
providerdependent1name:any;
TotalBillamtdependent1:any;

public map = new Map<string, string[]>([
    ['Poland', ['Warszawa', 'Krakow']],
    ['USA', ['New York', 'Austin']],

  ])

datefunction(myDate:Date) {
  this.myDate = new Date();
  console.log('scope is ' + myDate);

}

 close(){
     setInterval(()=> {
        this.isDisplayedview =true;
    },4000)
 }



onCreateMember(){
  
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    
    for ( var i = 0; i < 3; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    this.Registerstatus='Member ID=>R-'+result  +'    Registered Successfully';
    setInterval(()=> {
        this.Registerstatus = '';
    },4000)

  this.alert=true;
  this.buttonAlert=true;
  this.ishiddenform=true;
  this.heading="Member ID   R-"+result;
}

onViewpanel(){
this.alertview=true;
}
onCreateEdit(){
  this.alertedit=true;
  setInterval(()=> {
        this.isDisplayed =true;
    },4000)
}

onCloseEdit(){
  this.closeedit=true;
   setInterval(()=> {
        this.isDisplayed =true;
    },1000)
}

onClosedepedent(){
  this.closedepedent=true;
   setInterval(()=> {
        this.isDisplayedview =true;
    },1000)
  this.ishidedependentbtn=true;
  this.shoeviewdependent=false;
 this.showclaimdepedent=false;
}

onadddepend(){
  this.alertdepend=true;
  this.viewdepedent2enable=true;

}

oncreateAdddepedentextra(){
  this.alertdepedendextra=true;
  this.ishideadd=true;
}

submitdependent2(){
  this.depedent2=true;
 

  this.claimId2="Dependent2 added successfully"
   setInterval(()=> {
        this.depedent2 =true;
    },4000)
        this.dependent="Depedent Added";
    this.viewdepedent2enable=false;

    this.showclaimdepedent2=false;
}
submitdependent1(){

   this.depedent1 =true;
   

   this.claimId="Dependent1 added successfully"
  setInterval(()=> {
       this.depedent1 =true;
    },4000)
    this.dependent="Depedent Added";
    this.dependentclaimname=this.depedentname;

}
onCreateAge(registermemberdob:any){
 
    if(this.registermemberdob){
        const convertAge = new Date(this.registermemberdob);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
     this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    if(this.showAge>18){
      this.showAgevalue=this.showAge;
      
    }else{
    this.errorvisible=true;
    this.errorAge="Age must greater than 18"
    setInterval(()=> {
    this.errorvisible =false;
    },3000)
   }
      }
}

onValidatenumber(registermembernumber:any){

 this. len=this.registermembernumber.length;
  if(this.len>10){

    this.validnumber=false;
   
  }
else{
  this.validnumber=true;
  setInterval(()=> {
    this.validnumber =false;
  },1000)
}
}


onUpdateMemberName(event :Event){
    this.registermembername=(<HTMLInputElement>event?.target).value;
}
title = 'materialApp';
   emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
  ]);


  showMsg: boolean = false;


  keyPressNumbers(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  keyPressAlphanumeric(event:any) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressAlphaspace(event:any) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z\s]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  
 
 statelist(country:any){
   if(this.country.startsWith("I",0)){
   
    this.State1="Tamilnadu"
    this.state2="kerala"

   }else{
    this.State1="california"
    this.state2="washington"
   }
 }

 citylist(secret:any){
  if(this.secret.startsWith("T",0)){
  
   this.city1="chennai"
   this.city2="coimbatore"

  }else if(this.secret.startsWith("k",0)){
   this.city1="cochin"
   this.city2="wayanad"
  }
  else if(this.secret.startsWith("c",0)){
    this.city1="hare"
    this.city2="calif"
   }
   else if(this.secret.startsWith("w",0)){
    this.city1="winshin"
    this.city2="maxo"
   }

}
form: FormGroup = new FormGroup({});  
   constructor(private fb: FormBuilder) {  
    this.form = fb.group({  
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]], 
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]], 
      email: ['', [Validators.required, Validators.email]],
    })  
  }  
get f(){  
    return this.form.controls;  
  }  
submit(){  
    console.log(this.form.value);  
  }  
  onaddclaims(){
    this.claimsadd=true;
   
  }
  onSaveclaim(){
    this.saveclaim=true;
    var randomChars = '0123456789';
    var result = '';
    
    for ( var i = 0; i < 10; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
 
    this.claimIfinal="claimId- "+result+" Member claimed successfully"
    setInterval(()=> {
      this.isDisplayedcliam =true;
    },3000)
    this.ishideclaims=true;
  }


  oneditdepedent(){
      this.editdepedent=true;
  }

  onviewdependet2(){
    this.editdependent2=true;
  }
  onCloseviewdepedent(){
    this.hideviewdepemdent=true;
  }
  onCloseviewdepedent2(){
    this.hideviewdepemdent2=true;
  }
  editdependent1(){

    this.editviewdependent1=true;
  }
  submiteditdependent2(){
    this.submiteditviewdependentg2=true;
  }
  onaddclaimsdeendent(){
    this.adddependentclaim=true;

  }

  claimdependent2(){
    this.claimdependentdetails2=true;
  }
  onCloseclaimdependent1(){
    this.hideclaimdependent1=true;
  }
  onCloseclaimdependent2(){
    this.hideclaimdependent2=true;
  }
  onSavedepedentclaim(){
    this.savedepedentclaimsuccess=true;
    var randomChars = '0123456789';
    var result = '';
    
    for ( var i = 0; i < 10; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
 
    this.claimIdependebtfinal="claimId- "+result+" Member claimed successfully"
  }
}