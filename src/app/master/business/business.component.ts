import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {DashboardService} from '../../Service/Dashboard/dashboard.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _dashboard:DashboardService) { }

  ngOnInit(): void {
    this.showImages();
  }

imageUrl:any;
imageUrl1:any;
imageUrl2:any;
  showImages(){
    this._dashboard.showImages().subscribe((data)=>{
//this.imageUrl=data;
console.log(data);
let x = data.split("JFileName");
//var path = data.FillFormMandateIdWiseRes[0].JPGPath;
						
            this.imageUrl = 'data:image/jpg;base64,' +x[0];
            this.imageUrl1 = 'data:image/jpg;base64,' +x[1];
            this.imageUrl2 = 'data:image/jpg;base64,' +x[2];
    })
  }

}
