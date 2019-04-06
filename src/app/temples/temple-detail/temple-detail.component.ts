import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Temple } from '../temple.model';
import { TempleService } from '../temple.service';

@Component({
  selector: 'app-temple-detail',
  templateUrl: './temple-detail.component.html',
  styleUrls: ['./temple-detail.component.css']
})
export class TempleDetailComponent implements OnInit {
  temple: Temple;
  id: number;

  constructor(private templeService: TempleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.temple = this.templeService.getTemple(this.id);
        }
      );
  }

  onEditTemple() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteTemple() {
    this.templeService.deleteTemple(this.id);
    this.router.navigate(['/temples']);
  }

}
