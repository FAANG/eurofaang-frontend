import { Component, OnInit } from '@angular/core';
import  setting  from  '../../../assets/config/project-details.json';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bovreg',
  templateUrl: './bovreg.component.html',
  styleUrls: ['./bovreg.component.css']
})
export class BovregComponent implements OnInit {
  setting: any;
  project: string = 'BovReg';

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (setting.hasOwnProperty(this.project)) {
      this.setting = setting['BovReg'];
    } else {
      this.router.navigate(['404']);
    }
  }

}
