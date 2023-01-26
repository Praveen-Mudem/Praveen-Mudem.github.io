import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { faBriefcase, faInfoCircle, faCode, faMobileScreen, faVideo, faClose, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ImagepopupComponent } from '../components/imagepopup/imagepopup.component';
import { VideopopComponent } from '../components/videopop/videopop.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  briefCaseIcon = faBriefcase;
  infoIcon = faInfoCircle;
  videoIcon = faVideo;
  mobileIcon = faMobileScreen;
 


  currentSection: string = 'about';
  isActiveNav: string = "about";
  urlSafe: SafeResourceUrl;
  docUrl: string = '../../assets/videos/video1.mp4';
  bsModalHref: BsModalRef;
  constructor(public sanitizer: DomSanitizer, public bsModalSer: BsModalService) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.docUrl);
  }

  scrollTo(sectionId: string) {
    let parentelement = document.getElementById('parentDiv');
    let element = document.querySelector('#' + sectionId);
    let headerOffset = 56;
    let elementPosition = element!.getBoundingClientRect().top;
    let offsetPosition = elementPosition + parentelement!.scrollTop - headerOffset;

    parentelement!.scroll({
      top: offsetPosition,
      behavior: "smooth",
    });

    this.isActiveNav = sectionId;
  }
  sendMail() {

  }
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    this.isActiveNav = sectionId;
    console.log(sectionId);

  }
  openVideo(id) {
    const initialState = {
      list: [
        { id: id }
      ]

    };
    this.bsModalHref = this.bsModalSer.show(VideopopComponent, { id: 1, initialState, class: 'modal-xl', ignoreBackdropClick: true });
  }
  openImagePop(id) {
    debugger;
    const initialState = {
      list: [
        { id: id }
      ]

    };
    this.bsModalHref = this.bsModalSer.show(ImagepopupComponent, { id: 1, initialState, class: 'modal-xl', ignoreBackdropClick: true });
  }
}
