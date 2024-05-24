import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from '../section.service';
import { Sectionlocation } from '../sectionlocation';
@Component({
  selector: 'app-sectiondetails',
  standalone: true,
  imports: [],
  template:  `
    <article>
      <img class="listing-photo" [src]="sectionLocation?.photo"
           alt="Exterior photo of {{sectionLocation?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{ sectionLocation?.name }} </h2>
        <p class="listing-location">{{ sectionLocation?.description }} </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Caractéristiques</h2>
        <ul>
          <li> Age: {{ sectionLocation?.AgeMin }}-{{ sectionLocation?.AgeMax }} ans</li>
          <li> Sexe :  {{ sectionLocation?.sex }}</li>
          <li> Fédération : {{ sectionLocation?.federation }}</li>
          <li> Local : {{ sectionLocation?.local }}</li>
          <li> recurrence des réunions: {{ sectionLocation?.nextMeet }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './sectiondetails.component.css'
})
export class SectiondetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  sectionService = inject(SectionService);
  sectionLocationId=-1;
  sectionLocation : Sectionlocation | undefined;

  constructor() {
        this.sectionLocationId= Number(this.route.snapshot.params['id']);
      this.sectionLocation = this.sectionService.getSectieById(this.sectionLocationId);
  }


}
