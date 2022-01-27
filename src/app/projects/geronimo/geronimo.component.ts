import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {WidgetService} from "../../services/widget.service";
import  setting  from  '../../../assets/config/project-details.json';

@Component({
  selector: 'app-geronimo',
  templateUrl: './geronimo.component.html',
  styleUrls: ['./geronimo.component.css'],
  providers: [WidgetService]
})
export class GeronimoComponent implements OnInit, OnDestroy {
  setting: any;
  project: string = 'GEroNIMO';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService){
    this.widgetService.initTwitterWidget();
  }

  ngOnInit(): void {
    if (setting.hasOwnProperty(this.project)) {
      this.setting = setting['GEroNIMO'];
    } else {
      this.router.navigate(['404']);
    }
  }

  ngOnDestroy() {
    this.widgetService.unsubscribeTwitterWidget();
  }

}
