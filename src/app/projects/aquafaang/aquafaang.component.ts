import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {WidgetService} from "../../services/widget.service";
import {faTwitter, faFacebook, faLinkedin, faResearchgate, faYoutube} from '@fortawesome/free-brands-svg-icons';
import  setting  from  '../../../assets/config/project-details.json';

@Component({
  selector: 'app-aquafaang',
  templateUrl: './aquafaang.component.html',
  styleUrls: ['./aquafaang.component.css'],
  providers: [WidgetService]
})
export class AquafaangComponent implements OnInit, OnDestroy {
  setting: any;
  project: string = 'AQUA-FAANG';
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faResearchgate = faResearchgate;
  faYoutube = faYoutube;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {
    this.widgetService.initTwitterWidget();
  }

  ngOnInit(): void {
    if (setting.hasOwnProperty(this.project)) {
      this.setting = setting['AQUA-FAANG'];
    } else {
       this.router.navigate(['404']);
    }
  }

  ngOnDestroy() {
    this.widgetService.unsubscribeTwitterWidget();
  }

}
