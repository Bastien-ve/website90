import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sectionlocation } from '../sectionlocation';
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-section-location',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <section class="listing" [routerLink]="['/details',sectionlocation.id]">
      <img class="listing-photo" [src]="sectionlocation.photo" alt="Logo of {{sectionlocation.name}}" >
      <h2 class="listing-heading">{{sectionlocation.name}} ({{ sectionlocation.AgeMin }}-{{sectionlocation.AgeMax}}ans)</h2>
      <p class="listing-heading">{{sectionlocation.slogan}}</p>
    </section>
  `,
  styleUrl: './section-location.component.css'
})
export class SectionLocationComponent {
  @Input() sectionlocation!: Sectionlocation;
}
