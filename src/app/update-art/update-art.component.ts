import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Art} from '../model/art';
import {ArtService} from '../services/art.service';

@Component({
  selector: 'app-update-art',
  templateUrl: './update-art.component.html',
  styleUrls: ['./update-art.component.css']
})
export class UpdateArtComponent implements OnInit {
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

  updateArt() {
    this.artService.updateArt(this.id, this.art)
      .subscribe(data => {
        console.log(data);
        this.art = new Art();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateArt();
  }

  gotoList() {
    this.router.navigate(['/arts']);
  }
  onFileChanged(event) {
    const file = event.target.files[0].name;
    this.art.image = file;
    console.log(file);
  }
}
