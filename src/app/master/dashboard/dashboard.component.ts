import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {DashboardService} from '../../Service/Dashboard/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('fileInput') fileInput;

  constructor(private _dashboard:DashboardService) { }

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


    myFiles: string[] = []; 
FileNames: any = []; 
myFilesWithOnlyFileName: string[] = []; 
JsonFileNames:any = '';
ActivityIdImage:any;
IsOneThird:boolean;
// UploadFilechangeevent(e,val)
// {
//   var files = e.target.files

//   // for (var i = 0; i < e.target.files.length; i++) {  
//   //   this.myFiles1.push({
//   //     FileName:e.target.files[i].name
//   //   });

//   //   this.myFiles.push(
//   //     e.target.files[i]
//   //   );

//   // }  

//   if(val == 1){
// this.IsOneThird=true;
//   }
//   else if(val == 0){
//     this.IsOneThird=false;
//   }


//   for (var i = 0; i < files.length; i++) {
//     if (files[i].type != "image/jpeg") {
//       //e.preventDefault();
//       alert("Not a valid file");
//      }
//     // else if (files[i].size > (1048576 * 3)) {
//     //   //e.preventDefault();					
//     //  // var txt = "Maximum allowed Indivisual file size: 3MB.";					
//     //   //warnpopup(txt);
//     //  // alert(txt);
//     //  this.PopupText='Maximum allowed Indivisual file size: 3MB.'
//     //   this.showModalSuccessImage=true;
//     //   return false;
//     // }
//      else if (files[i].type == "image/jpeg") {
//       //TotalImages += 1;
//       this.myFiles.push(files[i]);
//       this.myFilesWithOnlyFileName.push(files[i].name);
//       this.FileNames.push({
//         FileName: files[i].name
//       });
//       // myFiles.push({
//       // 	File: files[i].name
//       // });
//     }
//   }




// //   console.log('jasonupload')
// // console.log(this.myFiles1)
// //   let formData=new FormData();
// //   for (var i = 0; i < this.myFiles.length; i++) {  
// //     formData.append("fileUpload", this.myFiles[i]);  
// //     //if (i == 0) {  
// //       formData.append("remark",this.myFiles1[i]);  
// //    // }  
// //   }  

 
// this.JsonFileNames = JSON.stringify(this.FileNames);
//     let Sessionvalue = JSON.parse(sessionStorage.getItem('User'));
//     let _apipostdata = new UserDetails();
//    // _apipostdata.EntityId=Sessionvalue.ReferenceId;
//     _apipostdata.UserId=Sessionvalue.UserId;
//     // console.log (this.myFiles); 


//   //  let formData=new FormData();
//   //  formData.append('files', this.fileInput.nativeElement.files[0]);


//     const formData = new FormData();  
//     //formData.append('upload', this.myFiles);
//     // formData.append('upload', this.fileInput.nativeElement.files[0]);

//     for (var i = 0; i < this.myFiles.length; i++) {  
//       formData.append("files", this.myFiles[i]);  
      
//       if (i == 0) {  
//         //formData.append("EntityId", this.remark);  

//        formData.append("ActivityId", this.ActivityIdImage);  
//        formData.append("UserId", _apipostdata.UserId);  
//       formData.append("JsonFileNames", this.JsonFileNames);  
      
//       }  
//     }  
//     formData.append("TotalImages", this.myFiles.length.toString());  

//  this._bulkimagebulkdata.UploadMultipleImage(formData).
//  subscribe((data) => {
//    console.log(data);

//  })

// }


fileToupload1:any;
imageurl1:any;

// UploadFilechangeevent1(file: FileList) {


// 	let formData = new FormData();
// 	console.log('upload image File')
// 	console.log(this.fileInput.nativeElement);
// 	formData.append('upload', this.fileInput.nativeElement.files[0]);

// 	this._dashboard.UploadImage(formData).
// 	subscribe((data) => {
// 		console.log('upload image')
// 		console.log(data)
	
// 		// this.uplooadfileFlag = data;
// 		// this.IsOneThird1 = 1;
// 		 this.fileToupload1 = file.item(0);
// 		// this.imagename = this.fileToupload1.name;
// 		// this.Filepath = '../ColouredImage/' + this.imagename
// 		// console.log(this.Filepath)

// 		if (this.fileToupload1.size < 2942439) {
// 			if (data != "1") {
// 				this.imageurl1 = null;
// 				// this.imagename=this.fileToupload1.name;
// 				let reader = new FileReader();
// 				reader.readAsDataURL(this.fileToupload1);
// 				reader.onload = (event: any) => {
// 					this.fileInput.nativeElement.files[0].type;
// 					this.imageurl1 = event.target.result;


// 				}
// 				// }
// 			}
// 		}

// 	})


// }




// myFiles: string[] = []; 
// FileNames: any = []; 
// myFilesWithOnlyFileName: string[] = []; 
// JsonFileNames:any = '';
// ActivityIdImage:any;
// IsOneThird:boolean;
newsActivity:any;

UploadFilechangeevent(e,val)
{
  var files = e.target.files

  for (var i = 0; i < e.target.files.length; i++) {  
    // this.myFiles1.push({
    //   FileName:e.target.files[i].name
    // });

    this.myFiles.push(
      e.target.files[i]
    );

  }  

  if(val == 1){
this.IsOneThird=true;
  }
  else if(val == 0){
   // this.IsOneThird=false;
   this.newsActivity='Business';
  }


  // for (var i = 0; i < files.length; i++) {
  //   if (files[i].type != "image/jpeg" &&files[i].type != "image/jpg"&&files[i].type != "image/png") {
  //     //e.preventDefault();
  //     alert("Not a valid file");
  //   } else if (files[i].size > (1048576 * 3)) {
  //     //e.preventDefault();					
  //     var txt = "Maximum allowed Indivisual file size: 3MB.";					
  //     //warnpopup(txt);
  //     alert(txt);
  //   //  this.PopupText='Maximum allowed Indivisual file size: 3MB.'
  //   //   this.showModalSuccessImage=true;
  //     return false;
  //    } //else if (files[i].type == "image/jpeg") {
  //      else{
    
  //     this.myFiles.push(files[i]);
  //   //   this.myFilesWithOnlyFileName.push(files[i].name);
  //   //   this.FileNames.push({
  //   //     FileName: files[i].name
  //   //   });
     
  // }




//   console.log('jasonupload')
// console.log(this.myFiles1)
//   let formData=new FormData();
//   for (var i = 0; i < this.myFiles.length; i++) {  
//     formData.append("fileUpload", this.myFiles[i]);  
//     //if (i == 0) {  
//       formData.append("remark",this.myFiles1[i]);  
//    // }  
//   }  

 
//this.JsonFileNames = JSON.stringify(this.FileNames);
  //   let Sessionvalue = JSON.parse(sessionStorage.getItem('User'));
  //   let _apipostdata = new UserDetails();
  //  // _apipostdata.EntityId=Sessionvalue.ReferenceId;
  //   _apipostdata.UserId=Sessionvalue.UserId;


    const formData = new FormData();  

console.log(this.myFiles.length)

    for (var i = 0; i < this.myFiles.length; i++) {  
      formData.append("files", this.myFiles[i]);  
      
      if (i == 0) {  
       formData.append("NewsActivity", this.newsActivity);  
      //  formData.append("UserId", _apipostdata.UserId);  
      // formData.append("JsonFileNames", this.JsonFileNames);  
      
      }  
    }  
    formData.append("TotalImages", this.myFiles.length.toString());  

 this._dashboard.UploadMultipleImage(formData).
 subscribe((data) => {
   console.log(data);
  //  this.Preloader=false;
  //  this.showdblclickgrid=true;
  // this.showSyncbtn=true;
  

 })

}
  
}
