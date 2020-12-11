import { Component, OnInit } from '@angular/core';
import {Art} from '../model/art';
import {Employee} from '../model/employee';
import {EmployeeService} from '../services/employee.service';
import {Router} from '@angular/router';
import {ArtService} from '../services/art.service';

@Component({
  selector: 'app-create-art',
  templateUrl: './create-art.component.html',
  styleUrls: ['./create-art.component.css']
})
export class CreateArtComponent implements OnInit {
  art: Art = new Art();
  submitted = false;

  constructor(private artService: ArtService, private router: Router) { }

  ngOnInit(): void {
    this.art.jaime = 0;
  }

  newArt(): void {
    this.submitted = false;
    this.art = new Art();
    this.art.jaime = 0;
  }

  save() {
    this.artService
      .createArt(this.art).subscribe(data => {
        console.log(data);
        this.art = new Art();
        this.art.jaime = 0;
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/arts']);
  }


}
