import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../services/widget.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WidgetService]
})
export class HomeComponent implements OnInit {
  twitterUrl: string = 'https://twitter.com/EuroFaang';

  constructor(private widgetService: WidgetService) {
    this.widgetService.initTwitterWidget();
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.widgetService.unsubscribeTwitterWidget()
  }



}
