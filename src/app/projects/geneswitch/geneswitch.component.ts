import {Component, OnDestroy, OnInit} from '@angular/core';
import  setting  from  '../../../assets/config/project-details.json';
import {WidgetService} from "../../services/widget.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-geneswitch',
  templateUrl: './geneswitch.component.html',
  styleUrls: ['./geneswitch.component.css'],
  providers: [WidgetService]
})
export class GeneswitchComponent implements OnInit, OnDestroy {
  setting: any;
  project: string = 'GENE-SWitCH';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {
    this.widgetService.initTwitterWidget();
  }

  ngOnInit(): void {
    if (setting.hasOwnProperty(this.project)) {
      this.setting = setting['GENE-SWitCH'];
    } else {
      this.router.navigate(['404']);
    }
  }

  ngOnDestroy() {
    this.widgetService.unsubscribeTwitterWidget();
  }

}
