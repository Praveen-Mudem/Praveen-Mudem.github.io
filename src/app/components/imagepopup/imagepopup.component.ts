import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-imagepopup',
  templateUrl: './imagepopup.component.html',
  styleUrls: ['./imagepopup.component.scss']
})
export class ImagepopupComponent implements OnInit {
list:any[];
constructor(public bsModalSer:BsModalService, public bsModalHref:BsModalRef){}
ngOnInit() {
  
}
}
