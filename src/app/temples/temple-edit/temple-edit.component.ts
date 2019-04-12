import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TempleService } from '../temple.service';

@Component({
  selector: 'app-temple-edit',
  templateUrl: './temple-edit.component.html',
  styleUrls: ['./temple-edit.component.css']
})
export class TempleEditComponent implements OnInit {
  id: string;
  editMode = false;
  templeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private templeService: TempleService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit(){
    if (this.editMode) {
      this.templeService.updateTemple(this.id, this.templeForm.value);
    } else {
      this.templeService.addTemple(this.templeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let templeName = '';
    let templeImagePath= '';
    let templeLocation = '';
    let templeExperience = '';
    let templeAttended = '';

    if (this.editMode) {
      const temple = this.templeService.getTemple(this.id);
      templeName = temple.name;
      templeImagePath = temple.imagePath;
      templeLocation = temple.location;
      templeExperience = temple.experience;
      templeAttended = temple.attended;
    }

    this.templeForm = new FormGroup({
      'name': new FormControl(templeName, Validators.required),
      'imagePath': new FormControl(templeImagePath, Validators.required),
      'location': new FormControl(templeLocation),
      'experience': new FormControl(templeExperience),
      'attended': new FormControl(templeAttended, Validators.required)
    });
  }

}
