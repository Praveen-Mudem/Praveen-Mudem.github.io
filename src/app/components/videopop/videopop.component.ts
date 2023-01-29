import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { faBriefcase, faInfoCircle,faCode, faMobileScreen, faVideo, faClose } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/service/common.service';

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
  constructor(public bsModalHref: BsModalRef, public bsModalSer: BsModalService,
     public sanitizer: DomSanitizer,public commonSer:CommonService) {

  }
  ngOnInit() {
    this.getmyvideofiles();
    if (this.list[0].id == 1) {
      this.docUrl = '../../../assets/videos/video1.mp4';
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.docUrl);
    }
  }
  getmyvideofiles(){
    this.commonSer.getmyvideofiles().subscribe(res=>{
      console.log(res);
      
    })
  }
   
}
