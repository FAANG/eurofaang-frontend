import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import  setting  from  '../../../assets/config/project-details.json';

@Component({
  selector: 'app-aquafaang',
  templateUrl: './aquafaang.component.html',
  styleUrls: ['./aquafaang.component.css']
})
export class AquafaangComponent implements OnInit {
  setting: any;
  project: string = 'AQUA-FAANG';

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (setting.hasOwnProperty(this.project)) {
      this.setting = setting['AQUA-FAANG'];
    } else {
       this.router.navigate(['404']);
    }
  }

}
