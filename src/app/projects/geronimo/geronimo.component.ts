import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import  setting  from  '../../../assets/config/project-details.json';

@Component({
  selector: 'app-geronimo',
  templateUrl: './geronimo.component.html',
  styleUrls: ['./geronimo.component.css']
})
export class GeronimoComponent implements OnInit {
  setting: any;
  project: string = 'GEroNIMO';

  constructor(private route: ActivatedRoute,
              private router: Router) {
    // twitter js
    (<any>window).twttr.widgets.load();
  }

  ngOnInit(): void {
    if (setting.hasOwnProperty(this.project)) {
      this.setting = setting['GEroNIMO'];
    } else {
      this.router.navigate(['404']);
    }
  }

}
