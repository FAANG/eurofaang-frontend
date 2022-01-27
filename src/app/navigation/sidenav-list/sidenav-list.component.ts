import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {IsActiveMatchOptions, Router} from "@angular/router";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  readonly myMatchOptions: IsActiveMatchOptions = {
    queryParams: 'subset',
    matrixParams: 'ignored',
    paths: 'subset',
    fragment: 'ignored',
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  isProjectSelected() {
    return this.router.isActive('projects', this.myMatchOptions);
  }

}

