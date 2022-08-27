import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";


import { GenericService } from 'src/app/services/generic.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  bsModalRef: BsModalRef;

  fetching = false;

  returnedArray: any[] = [];

  url = "weather";

  constructor(private bsModalService: BsModalService,
    private toast: ToastrService,
    private genericService: GenericService) { }

  ngOnInit(): void {
    this.fetchWeather();
  }

  fetchWeather(){
    this.fetching = true;
    this.genericService.getWeather(this.url).subscribe(data => {
      Object.assign(this.returnedArray, data);
      console.log(this.returnedArray, 'LOL')
      this.fetching = false
    }, error => {
      console.log("userAdmin", error)
      this.toast.error("Error while getting users admin data")
    });
  }

}
