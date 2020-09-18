import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }

 
    public imagePath;
    imgURL: any;
    imgURL1: any;
    imgURL2: any;
    public message: string;
   
    preview(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
        
      }
    }


    preview1(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imagePath = files;
      console.log('preview1')
      console.log(this.imagePath)
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL1 = reader.result; 
        
      }
    }
    preview2(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imagePath = files;
      console.log('preview2')
      console.log(this.imagePath)
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL2 = reader.result; 
        
      }
    }


  }
  
  

