import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-castegory-based',
  templateUrl: './castegory-based.component.html',
  styleUrls: ['./castegory-based.component.css']
})
export class CastegoryBasedComponent implements OnInit {
  casteCtg = [
    {id: 1, text: 'General'},
    {id: 2, text: 'Scheduled Caste (SC)'},
    {id: 3, text: 'Scheduled Tribe (ST)'},
    {id: 4, text: 'Other Backward class (OBC)'},
  ];
  presentOrNot:any;
  statusCode=0;


  constructor(private route:Router) {  }
  
  ngOnInit(): void {
  }

  changeLanguage($event:any) {
    // if($event.target.value===null){
     this.presentOrNot=$event.target.value;
     console.log(this.presentOrNot);

     if($event.target.value==' '){
          alert("d");
        }
        
        localStorage.setItem("Caste",$event.target.value);
  }

  onNext(){

    // if(localStorage.getItem("Caste")==null) { 
    //   alert("please")
    // }


  if (this.statusCode == 102) {
        

            alert("kya");
            this.route.navigate(['/login']);
          
          }

          // if(this.presentOrNot==null) { 
          //   alert("please")
          // }
          //   else {
          //        this.route.navigate(['/categoryBased']);
          //   }



         else if (this.statusCode > 0) {

            alert("this.Resp.description");
            // this.eMsg = this.Resp.description;

          }

          else if(this.presentOrNot==null)
          { 
            alert("please")
          }

          else {

            this.route.navigate(['/categoryBased']);
          


          }


  }
}

