import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-editlisting',
  templateUrl: './editlisting.component.html',
  styleUrls: ['./editlisting.component.css']
})
export class EditlistingComponent implements OnInit {
  id;
  title;
  responseowner;
  city;
  incidentid;
  price;
  image;
  type;
  
  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['incidentid'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
    this.title = listing.title;
      this.responseowner = listing.responseowner;
      this.city = listing.city;
      this.incidentid = listing.incidentid;
      this.price = listing.price;
      this.type = listing.type;
      
      });
  }
   onEditSubmit(){
    let listing = {
        title: this.title,
        responseowner: this.responseowner,
        city: this.city,
        incidentid: this.incidentid,
        price: this.price,
        type: this.type
    }

    this.firebaseService.updateListing(this.id, listing);

    this.router.navigate(['/listings']);
  }

}
