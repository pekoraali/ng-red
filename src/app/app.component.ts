import {Component} from "@angular/core";
import {Http} from "@angular/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  spaceScreens: Array<any>;

  constructor(private http: Http) {
    this.http.get('./assets/data.json')
        .map(response => response.json().screenshots)
        .subscribe(res => this.spaceScreens = res);
  }
  
}
