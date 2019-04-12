import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Temple } from '../temple.model';
import { TempleService } from '../temple.service';
import { WindRefService } from 'src/app/wind-ref.service';

@Component({
  selector: 'app-temple-detail',
  templateUrl: './temple-detail.component.html',
  styleUrls: ['./temple-detail.component.css']
})
export class TempleDetailComponent implements OnInit {
  nativeWindow: any;
  temple: Temple;
  id: string;

  constructor(private windowRefService: WindRefService,
              private templeService: TempleService,
              private route: ActivatedRoute,
              private router: Router) {
    this.nativeWindow = windowRefService.getNativeWindow();
               }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.temple = this.templeService.getTemple(this.id);
        }
      );
  }

  onEditTemple() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  // onView(){
  //   if (this.temple.imagePath) {
  //     this.nativeWindow.open(this.temple.imagePath);
  //   }
  // }

  onDeleteTemple() {
    this.templeService.deleteTemple(this.temple);
    this.router.navigate(['/temples']);
  }

}
