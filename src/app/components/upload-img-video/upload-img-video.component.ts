import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GallaryFileInfo } from 'src/app/model/common.model';
import { CommonService } from 'src/app/service/common.service';

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
fileUploading:boolean;
url:any;
  format:any;
FileInfo:GallaryFileInfo = new GallaryFileInfo();
  constructor(public bsModalSer:BsModalService, public bsModalHref:BsModalRef, public commonSer:CommonService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  handleFileInput(event){

  }
  OnSubmit(filedata:any){

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
