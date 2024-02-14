import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../component/modal/modal.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  constructor(private modalService: ModalService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Building Town System');
  }
  abrirModal(){
this.modalService.abrirModal();
  }
}
