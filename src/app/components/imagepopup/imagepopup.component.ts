import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/service/common.service';


@Component({
  selector: 'app-imagepopup',
  templateUrl: './imagepopup.component.html',
  styleUrls: ['./imagepopup.component.scss']
})
export class ImagepopupComponent implements OnInit {
list:any[];
imgList:any[];
constructor(public bsModalSer:BsModalService, public bsModalHref:BsModalRef, public commonSer:CommonService){}
ngOnInit() {
  this.getimage();
}
getimage(){
  this.commonSer.getmyimagefiles().subscribe((res:any)=>{
    this.imgList=res
  })
}
}
