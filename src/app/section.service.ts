import { Injectable } from '@angular/core';
import {Sectionlocation} from "./sectionlocation";

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  sectionLocationList : Sectionlocation[]=[
    {
      id: 1,
      name: "Nutons",
      local: "Eglise de Stockel",
      AgeMin: 5,
      AgeMax: 8,
      photo: "../assets/logo-nuton-les-guides.jpg",
      slogan:"À la ribambelle,\n" +
        "je prends confiance.",
      description: "La première étape du parcours\n" +
        "scout est l’occasion pour l’enfant\n" +
        "de prendre confiance en lui, en les\n" +
        "autres et en le monde.\n" +
        "Grâce aux activités mises en place à la ribambelle, le baladin\n" +
        "ou la baladine part à la rencontre des autres, découvre, essaie\n" +
        "et s’émerveille.",
      sex: "Filles et Garçons",
      nextMeet: "Plus ou moins toutes les deux semaines ainsi que deux weekends par ans et un grand camp de 5 jours fin juillet",
      federation: "Les Guides",
    },
    {
      id: 2,
      name: "Lutins",
      local: "Eglise de Stockel",
      AgeMin: 8,
      AgeMax: 12,
      photo: "../assets/logo-nuton-les-guides.jpg",
      slogan:"L'accueil des autres. La Ronde, c’est le groupe formé par l’ensemble des Lutins.",
      description: "Un univers imaginaire\n" +
        "\n" +
        "Tu découvres la vie chez les Lutins grâce au conte Les Lutins de la Ronde." +
        " Tu y rencontreras Lunila, Galos, Perlouette, " +
        "Jodeau, Touvel et Tricoline. Chaque année chez les Lutins est" +
        " représentée par un élément (Terre, Eau, Feu et Air) " +
        "du Sentier qui te mènera chez les Aventures.",
      sex: "Filles",
      nextMeet: "Unknown",
      federation: "Les Guides",
    },
    {
      id: 3,
      name: "Guides Aventures",
      local: "Eglise de Stockel",
      AgeMin: 12,
      AgeMax: 16,
      photo: "../assets/logo-nuton-les-guides.jpg",
      slogan:"Vivre l’amitié dans une Patrouille et y assumer une responsabilité",
      description: "Au fil des réunions, weekends et camps, par les jeux et les activités, tu vas apprendre et connaitre une foule de choses.\n" +
        "\n" +
        "Mais ce qui est important, c’est que tu vas vivre quelque chose d’unique et tout cela à ton rythme.",
      sex: "Filles",
      nextMeet: "Le dimanche, toutes les 2 semaines ainsi que deux weekends par ans et un grand camp de plus ou moins 15 jours.",
      federation: "Les Guides",
    },
    {
      id: 4,
      name: "Guides Horizon",
      local: "Eglise de Stockel",
      AgeMin: 16,
      AgeMax: 18,
      photo: "../assets/logo-nuton-les-guides.jpg",
      slogan:"Entreprendre pour des souvenirs intemporels.",
      description: "Le projet est l’élément central chez les Horizons, il s’appelle l’Entreprise." +
        " Chaque Chaine Horizon réalise une série d’Entreprises pendant l’année (mise sur pied d’une pièce de théâtre, organisation d’une soirée, par exemple).\n" +
        "\n" +
        "Chacune d’elles est choisie en consensus et portée par l’ensemble des membres du Groupe." +
        " Celles-ci permettent de mieux se connaitre pour pouvoir mener l’Entreprise la plus vaste : le camp.",
      sex: "Filles",
      nextMeet: "Unknown",
      federation: "Les Guides",
    },
    {
      id: 5,
      name: "Louveteaux",
      local: "Eglise de Stockel",
      AgeMin: 8,
      AgeMax: 12,
      photo: "../assets/logo-nuton-les-guides.jpg",
      slogan: "À la meute, je vis pleinement\n" +"avec les autres.\n",
      description: "Chez les Louveteaux, l’enfant expé-\n" +
        "rimente la vie en communauté et\n" +
        "approfondit sa relation aux autres.\n" +
        "Il prend des responsabilités adap-\n" +
        "tées à son âge, apprend à parta-\n" +
        "ger, à coopérer et à écouter.",
      sex: "Garçons",
      nextMeet: "Unknown",
      federation: "Les Scoutes",
    },
    {
      id: 6,
      name: "Eclaireurs",
      local: "Bas de la Cité de l'amitié",
      AgeMin: 12,
      AgeMax: 16,
      photo: "../assets/logo-nuton-les-guides.jpg",
      slogan: "À la troupe, je construis\n" +
        "avec les autres",
      description: "À la troupe, et particulièrement au sein du petit groupe qu’est\n" +
        "la patrouille, l’éclaireur ou l’éclaireuse participe à la construc-\n" +
        "tion collective de projets, dans un esprit de solidarité.\n" +
        "Il ou elle fait des plans, rêve, se responsabilise et agit pour le\n" +
        "groupe",
      sex: "Garçons",
      nextMeet: "Unknown",
      federation: "Les Scoutes",
    },
    {
      id: 7,
      name: "Pionniers",
      local: "Eglise de Stockel",
      AgeMin: 16,
      AgeMax: 18,
      photo: "../assets/logo-nuton-les-guides.jpg",
      slogan: "Au poste, je m’engage.",
      description: "Au poste, le pionnier ou la pionnière se découvre\n" +
        "citoyen-ne du monde : il met ses compétences au service des\n" +
        "autres et de ses convictions.\n" +
        "Il ou elle réfléchit à son avenir et tente d’agir en cohérence avec\n" +
        "ce en quoi il ou elle croit.",
      sex: "Garçons",
      nextMeet: "Unknown",
      federation: "Les Scoutes",
    },
    {
      id: 8,
      name: "Routes",
      local: "Eglise de Stockel",
      AgeMin: 18,
      AgeMax: 99,
      photo: "../assets/logo-nuton-les-guides.jpg",
      slogan: "Garder un pied dans l'unité et l'aider a évoluer.",
      description: "Anciens chefs de l'unité qui veulent rester dans le scoutisme et apporter leur \n"+
      "touche à la 90ème ainsi que à ces animés.",
      sex: "Filles et Garçons",
      nextMeet: "Unknown",
      federation: "Les Guides",
    }
  ];
  constructor() {}

  getAllSecties() : Sectionlocation[]{
    return this.sectionLocationList.sort((sectA,sectB) =>  sectA.AgeMin-sectB.AgeMin)
  }

  getSectieById(id: number): Sectionlocation | undefined{
    return this.sectionLocationList.find(sectionlocation=>sectionlocation.id === id);
  }
}
