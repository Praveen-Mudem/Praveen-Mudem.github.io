import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { faBriefcase, faInfoCircle,faCode, faMobileScreen, faVideo, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-videopop',
  templateUrl: './videopop.component.html',
  styleUrls: ['./videopop.component.scss']
})
export class VideopopComponent 
implements OnInit {
  list: any[];
  docUrl: string = '';
  urlSafe: SafeResourceUrl;
  btnClose=faClose;
  constructor(public bsModalHref: BsModalRef, public bsModalSer: BsModalService, public sanitizer: DomSanitizer) {

  }
  ngOnInit() {
    if (this.list[0].id == 1) {
      this.docUrl = '../../../assets/videos/video1.mp4';
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.docUrl);
    }
  }

   
}
