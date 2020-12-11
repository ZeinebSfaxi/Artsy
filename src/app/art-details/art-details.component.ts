import { Component, OnInit } from '@angular/core';
import {Art} from '../model/art';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtService} from '../services/art.service';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.css']
})
export class ArtDetailsComponent implements OnInit {

  id: number;
  art: Art;

  constructor(private route: ActivatedRoute, private router: Router,
              private artService: ArtService) { }

  ngOnInit() {
    this.art = new Art();

    this.id = this.route.snapshot.params['id'];

    this.artService.getArt(this.id)
      .subscribe(data => {
        console.log(data)
        this.art = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['arts']);
  }
}
