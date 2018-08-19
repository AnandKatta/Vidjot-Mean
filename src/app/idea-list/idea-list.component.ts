import { Component, OnInit } from '@angular/core';
import {FormArray,FormBuilder,FormGroup,FormControl} from "@angular/forms"
import {VidjotService} from "../vidjot.service";
import {IVidjot} from "../Interfaces/IVidjot";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {

  constructor(private vidjotService:VidjotService,private fb:FormBuilder,private router:Router) { }
  public VidjotIdeasForm:FormGroup;
  public displayDialogVidjot:boolean=false;
  public registerForm:FormGroup;

  ngOnInit() 
  {
      
      this.VidjotIdeasForm=this.fb.group(
        {
           Name:this.fb.control("anand"),
            vidjotArray:this.fb.array([])
        }
      );
      

      this.registerForm=this.fb.group(
        {
          Title:[""],
          Details:[""],
          Id:[""]
        }
      )
      this.vidjotService.GetVidjotIdeas().subscribe(data=>
        {
          data.forEach(element => {

         let CurrentGroup = this.fb.group(
               {
                 Date:element.Date,
                 Title:element.Title,
                 Details:element.Detail,
                 Id:element._id
               }
             )            
           // this.VidjotIdeasForm.setValue(CurrentGroup);
           const FormArrays = <FormArray>this.VidjotIdeasForm.controls["vidjotArray"];

           FormArrays.push(CurrentGroup);
           FormArrays.controls.forEach(element => {
            
           });
           let forms=this.VidjotIdeasForm;
          });
           
        });
  }

  EditVidjotIdea(Id:String)
  {
   
     this.vidjotService.GetVidjotIdea(Id).subscribe(data=>
    {
         if(data!=null && data!=undefined && typeof data == "object"  )
         {
           this.registerForm.controls["Title"].setValue(data.Title);
           this.registerForm.controls["Details"].setValue(data.Detail);
           this.registerForm.controls["Id"].setValue(Id);
         }
    });

  }

  UpdateVidjotIdea()
  {
    let obj= <IVidjot>{};
    obj.Title=this.registerForm.value.Title;
    obj.Details =  this.registerForm.value.Details;
     obj.Id=this.registerForm.value.Id;
     this.vidjotService.PutVidjotIdea(obj).subscribe(data=>
     {
   Swal({
  //title: 'Are you sure?',
  text: 'Updated Successfully..',
  type: 'success',
  //showCancelButton: true,
  confirmButtonText: 'Ok',
//  cancelButtonText: 'No, keep it'
}).then((result) => {
  if (result.value) {
    this.displayDialogVidjot=false;
    this.ngOnInit();
    // Swal(
    //   'Deleted!',
    //   'Your imaginary file has been deleted.',
    //   'success'
    // )
  // For more information about handling dismissals please visit
  // https://sweetalert2.github.io/#handling-dismissals
  } 
  // else if (result.dismiss === Swal.DismissReason.cancel) {
  //   Swal(
  //     'Cancelled',
  //     'Your imaginary file is safe :)',
  //     'error'
  //   )
  // }
})
   // this.router.navigate(['/Addidea']);
//sSwal('Sucess..','Updated Successfully','success');
     });
  }
DeleteIdea(Id:string)
{
  this.vidjotService.DeleteVidjotIdea(Id).subscribe(data=>
     {

     this.ngOnInit();
  })
}

}
