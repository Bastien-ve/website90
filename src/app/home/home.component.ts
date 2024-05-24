import { Component , inject } from '@angular/core';
import {SectionLocationComponent} from "../section-location/section-location.component";
import {Sectionlocation} from "../sectionlocation";
import {SectionService} from "../section.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionLocationComponent, NgForOf],
  template: `
    <section>
        <form class="search-container">
          <input type="text" placeholder="Filter by Section" class="search-bar" >
        </form>
    </section>
    <section class="results">
      <app-section-location  *ngFor="let sectionlocation of sectionlocationList" [sectionlocation]="sectionlocation"></app-section-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sectionlocationList: Sectionlocation[] = [];
  sectionService: SectionService = inject(SectionService);
  constructor() {
    this.sectionlocationList=this.sectionService.getAllSecties();
  }

}
