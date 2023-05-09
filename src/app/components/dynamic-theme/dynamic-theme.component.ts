import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-theme',
  templateUrl: './dynamic-theme.component.html',
  styleUrls: ['./dynamic-theme.component.scss']
})
export class DynamicThemeComponent {
  public isExpanded: boolean = true;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
