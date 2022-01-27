// @ts-nocheck
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from "../services/widget.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WidgetService]
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
              private title: Title,
              private router: Router,
              private widgetService: WidgetService) {
    this.widgetService.initTwitterWidget();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.widgetService.unsubscribeTwitterWidget()
  }

}
