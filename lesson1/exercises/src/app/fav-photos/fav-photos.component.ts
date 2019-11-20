import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here are some random photos!';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.kym-cdn.com/photos/images/newsfeed/000/100/097/business-cat-19.jpg';
  image3 = 'https://i.kym-cdn.com/photos/images/newsfeed/000/100/156/WkIrI.jpg';

  constructor() { }

  ngOnInit() {
  }

}