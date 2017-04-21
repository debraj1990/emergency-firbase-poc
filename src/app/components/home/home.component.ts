import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id:any;
  listings:any;
  imageUrl:any;
  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    //Get ID
    this.firebaseService.getListings().subscribe(listings =>{
      console.log(listings);
      this.listings = listings;
    });
    
  }

}
