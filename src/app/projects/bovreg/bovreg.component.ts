import {Component, OnDestroy, OnInit} from '@angular/core';
import setting from '../../../assets/config/project-details.json';
import {ActivatedRoute, Router} from "@angular/router";
import {faTwitter, faFacebook, faLinkedin, faResearchgate} from '@fortawesome/free-brands-svg-icons';
import {WidgetService} from "../../services/widget.service";

@Component({
  selector: 'app-bovreg',
  templateUrl: './bovreg.component.html',
  styleUrls: ['./bovreg.component.css'],
  providers: [WidgetService]
})
export class BovregComponent implements OnInit, OnDestroy {
  setting: any;
  project: string = 'BovReg';
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faResearchgate = faResearchgate;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {
    this.widgetService.initTwitterWidget();
  }

  ngOnInit(): void {
    if (setting.hasOwnProperty(this.project)) {
      this.setting = setting['BovReg'];
    } else {
      this.router.navigate(['404']);
    }
  }

  ngOnDestroy() {
    this.widgetService.unsubscribeTwitterWidget();
  }

}
