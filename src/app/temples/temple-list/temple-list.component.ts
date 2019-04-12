import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Temple } from '../temple.model';
import { TempleService } from '../temple.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-temple-list',
  templateUrl: './temple-list.component.html',
  styleUrls: ['./temple-list.component.css']
})
export class TempleListComponent implements OnInit, OnDestroy {
  temples: Temple[] = [];
  private subscription: Subscription;

  constructor(private templeService: TempleService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.templeService.templesChanged
      .subscribe(
        (temples: Temple[]) => {
          this.temples = temples;
        }
      );
    this.temples = this.templeService.getTemples(); 
  }

  onNewTemple() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
