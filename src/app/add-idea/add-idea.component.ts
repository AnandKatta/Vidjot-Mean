import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray,FormControl,FormGroup,Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {VidjotService} from "../vidjot.service";
import {IVidjot} from "../Interfaces/IVidjot"

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {

  public registerForm:FormGroup;
  constructor(private fb:FormBuilder,private vidjotService:VidjotService) { }
   public isSubmitted:boolean;
  ngOnInit() 
  {
    this.registerForm=this.fb.group(
      {
         Title:["",Validators.required],
         Details:["",Validators.required]
      }
    );
    this.isSubmitted=false;
  }

  onSubmit()
  {
    // Swal('Hello world!');
    //Swal('Oops...', 'Something went wrong!', 'error')
    this.registerForm.controls["Title"].setValue("Jurassic");
    this.isSubmitted=true;
    this.vidjotService.GetVidjot().subscribe(data=>
    {
    
      alert(data);
    });
    let objVidjot =<IVidjot>{};
    objVidjot.Title=this.registerForm.value.Title;
    objVidjot.Details=this.registerForm.controls["Details"].value;

    this.vidjotService.PostVidjotIdeas(objVidjot).subscribe(data => {
     
      alert(data.Title);
    });
    }

}
