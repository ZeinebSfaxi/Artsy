import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Art} from '../model/art';
import {ArtService} from '../services/art.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {
  arts: Observable<Art[]>;

  constructor(private artService: ArtService, public authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.arts = this.artService.getArtsList();
  }

  deleteArt(id: number) {
    this.artService.deleteArt(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  artDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateArt(id: number){
    this.router.navigate(['update', id]);
  }
}
