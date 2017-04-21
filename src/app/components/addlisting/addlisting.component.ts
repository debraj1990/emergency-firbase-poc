import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})
export class AddlistingComponent implements OnInit {
  title:any;
  responseowner:any;
  city:any;
  incidentId:any;
  price:any;
  type:any;
  image:any;
  
  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }
   onAddSubmit(){
    let listing = {
      title: this.title,
      city: this.city,
      responseowner: this.responseowner,
      incidentid:this.incidentId,
      price: this.price,
      type: this.type
    }

    this.firebaseService.addListing(listing);

    this.router.navigate(['listings']);
  }

}
