import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph:boolean = false;
  log = [];

  toggleParagraph() {
    this.displayParagraph = !this.displayParagraph;
    if (this.displayParagraph) {
      this.log.push("Untoggle at " + new Date());
    }
    else {
      this.log.push("Toggle at " + new Date());
    }
  }

  getColor(i:number) {
    return i >= 4 ? "blue" : "white";
  }
}
