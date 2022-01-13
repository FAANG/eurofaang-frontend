import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import  setting  from  '../../../assets/config/project-details.json';

@Component({
  selector: 'app-rumigen',
  templateUrl: './rumigen.component.html',
  styleUrls: ['./rumigen.component.css']
})
export class RumigenComponent implements OnInit {
  setting: any;
  project: string = 'GEroNIMO';

  constructor(private route: ActivatedRoute,
              private router: Router) {
    // twitter js
    (<any>window).twttr.widgets.load();
  }

  ngOnInit(): void {
    if (setting.hasOwnProperty(this.project)) {
      this.setting = setting['RUMIGEN'];
    } else {
      this.router.navigate(['404']);
    }
  }
}
