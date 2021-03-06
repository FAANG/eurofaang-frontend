import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {WidgetService} from "../../services/widget.service";
import  setting  from  '../../../assets/config/project-details.json';
import {faTwitter, faFacebook, faLinkedin, faResearchgate} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-rumigen',
  templateUrl: './rumigen.component.html',
  styleUrls: ['./rumigen.component.css'],
  providers: [WidgetService]
})
export class RumigenComponent implements OnInit, OnDestroy {
  setting: any;
  project: string = 'GEroNIMO';
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
      this.setting = setting['RUMIGEN'];
    } else {
      this.router.navigate(['404']);
    }
  }

  ngOnDestroy() {
    this.widgetService.unsubscribeTwitterWidget();
  }

}
