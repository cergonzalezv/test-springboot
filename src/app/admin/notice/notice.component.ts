import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";


import { GenericService } from 'src/app/services/generic.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  bsModalRef: BsModalRef;

  fetching = false;

  returnedArray: any[] = [];

  url = "notice";

  constructor(private bsModalService: BsModalService,
    private toast: ToastrService,
    private genericService: GenericService) { }

  ngOnInit(): void {
    this.fetchNotices();
  }

  fetchNotices(){
    this.fetching = true;
    this.genericService.getNotices(this.url).subscribe(data => {
      Object.assign(this.returnedArray, data[2]);
      this.fetching = false
    }, error => {
      console.log("userAdmin", error)
      this.toast.error("Error while getting users admin data")
    });
  }

}
