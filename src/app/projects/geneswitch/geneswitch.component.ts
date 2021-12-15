import { Component, OnInit } from '@angular/core';
import  setting  from  '../../../assets/config/project-details.json';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-geneswitch',
  templateUrl: './geneswitch.component.html',
  styleUrls: ['./geneswitch.component.css']
})
export class GeneswitchComponent implements OnInit {
  setting: any;
  project: string = 'GENE-SWitCH';

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (setting.hasOwnProperty(this.project)) {
      this.setting = setting['GENE-SWitCH'];
    } else {
      this.router.navigate(['404']);
    }
  }

}
