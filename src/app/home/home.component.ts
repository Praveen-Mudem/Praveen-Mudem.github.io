import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { faBriefcase, faInfoCircle, faCode, faMobileScreen, faVideo, faClose, faPlayCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ImagepopupComponent } from '../components/imagepopup/imagepopup.component';
import { UploadImgVideoComponent } from '../components/upload-img-video/upload-img-video.component';
import { VideopopComponent } from '../components/videopop/videopop.component';
import { GallaryFileInfo } from '../model/common.model';
import { CommonService } from '../service/common.service';


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
  videoPlayIcon = faPlayCircle;
  uploadIcon = faUpload;
 


  currentSection: string = 'about';
  isActiveNav: string = "about";
  urlSafe: SafeResourceUrl;
  docUrl: string = '../../assets/videos/video1.mp4';
  bsModalHref: BsModalRef;


  list:any[];
  imageUrl:any;
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api",
    }
};
fileUploading:boolean;
url:any;
  format:any;
FileInfo:GallaryFileInfo = new GallaryFileInfo();

handleFileInput(event){

}
OnSubmit(filedata:any){

}

  constructor(public sanitizer: DomSanitizer, public bsModalSer: BsModalService,  public commonSer:CommonService) {
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
   
    const initialState = {
      list: [
        { id: id }
      ]

    };
    this.bsModalHref = this.bsModalSer.show(ImagepopupComponent, { id: 1, initialState, class: 'modal-xl', ignoreBackdropClick: true });
  }
  openUploadImgVideo(id) {
    
    const initialState = {
      list: [
        { id: id }
      ]

    };
    this.bsModalHref = this.bsModalSer.show(UploadImgVideoComponent, { id: 1, initialState, class: 'modal-xl', ignoreBackdropClick: true });
  }

  largefileschange(event){
    
  }

  filesuploaded(fileInfo){
    if(fileInfo && fileInfo.IsSaved){
      this.commonSer.formData.FileInfo = fileInfo;
    }
    

  }

  onSelectFile(event) { 
    this.fileUploading = true;
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
        this.FileInfo.FileName = file.name;
        this.FileInfo.OriginalContentString = this.url;
        this.FileInfo.FileSize = file.size;
        this.FileInfo.FileType = file.type;
        this.fileUploading = false;
      }
    }
  }
}
