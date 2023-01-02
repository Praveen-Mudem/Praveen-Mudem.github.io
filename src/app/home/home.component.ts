import { Component } from '@angular/core';
import { faBriefcase, faInfoCircle,faCode, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent { 
 
  briefCaseIcon = faBriefcase;
  infoIcon=faInfoCircle;
  codeIcon=faCode;
  mobileIcon=faMobileScreen;
 
  currentSection:string = 'about';
  isActiveNav:string="about";
  
  
  scrollTo(sectionId:string){
    let parentelement = document.getElementById('parentDiv');
    let element = document.querySelector('#' + sectionId);
    let headerOffset = 56;
    let elementPosition = element!.getBoundingClientRect().top;
    let offsetPosition = elementPosition + parentelement!.scrollTop - headerOffset;
    
    parentelement!.scroll({
      top : offsetPosition,
      behavior: "smooth",
    });
    
    this.isActiveNav = sectionId;
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    this.isActiveNav = sectionId;
    console.log(sectionId);
    
  }
}
