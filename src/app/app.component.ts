import { Component } from '@angular/core';
//import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Switchboard';
  title2 = '☞スイッチボード☞';
  mySwitch = [true,false,true,false,true,false,true,false,true,false];

  clickSwitch(idx){
    if (this.mySwitch[idx] == true) {
      this.mySwitch[idx] = false;
    } else {
      this.mySwitch[idx] = true;
    }
    
    }
}