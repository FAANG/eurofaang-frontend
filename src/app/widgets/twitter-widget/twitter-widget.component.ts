// @ts-nocheck
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WidgetService} from "../../services/widget.service";

@Component({
  selector: 'app-twitter-widget',
  templateUrl: './twitter-widget.component.html',
  styleUrls: ['./twitter-widget.component.css'],
  providers: [WidgetService]
})
export class TwitterWidgetComponent implements OnInit, OnDestroy {
  @Input() url:String;
  test = 'EuroFaang';

  constructor(private widgetService: WidgetService) {
    this.widgetService.initTwitterWidget();
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.widgetService.unsubscribeTwitterWidget()
  }

}
