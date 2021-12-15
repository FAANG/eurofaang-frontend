import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imageHost: string = environment.relatedProjectsHost;
  constructor() { }

  ngOnInit(): void {
  }

  imgUrl(relative_path: String) {
    return (this.imageHost + 'eurofaang/' + relative_path);
  }
}
