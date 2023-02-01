import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-upload-img-video',
  templateUrl: './upload-img-video.component.html',
  styleUrls: ['./upload-img-video.component.scss']
})
export class UploadImgVideoComponent implements OnInit {
  list:any[];
  imageUrl:any;
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};
  constructor(public bsModalSer:BsModalService, public bsModalHref:BsModalRef){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  handleFileInput(event){

  }
  OnSubmit(filedata:any){

  }
}
