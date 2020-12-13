import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArtService} from '../services/art.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Art} from '../model/art';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  @Input() art: Art;
  @Output() notification = new EventEmitter<number>();
  @Output() notification3 = new EventEmitter<number>();
  @Output() notification4 = new EventEmitter<number>();
  @Output() notification2 = new EventEmitter<Art>();

  constructor(private artService: ArtService, public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  sendNotif() {
    this.notification.emit(this.art.id);
  }
  sendNotif3() {
    this.notification3.emit(this.art.id);
  }
  sendNotif4() {
    this.notification4.emit(this.art.id);
  }
  sendNotif2() {
    this.notification2.emit(this.art);
  }

}
