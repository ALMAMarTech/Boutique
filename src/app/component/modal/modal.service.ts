import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modal = false;
  public modal1 = false;
  public modal2 = false;
  public modal3 = false;
  private _abrirModal = new EventEmitter<any>();
  get abrirModalEvent():EventEmitter<any>{
    return  this._abrirModal;
  }
  set abrirModalEvent(value:EventEmitter<any>){
    this._abrirModal = value;
  }
  abrirModal(){
    this.modal = true;
    this.abrirModalEvent.emit(true);
  }
  cerrarModal(){
    this.modal = false;
  }
  constructor() { }

  /*Modal Microinversión*/
  private _abrirModal1 = new EventEmitter<any>();
  get abrirModalEvent1():EventEmitter<any>{
    return  this._abrirModal1;
  }
  set abrirModalEvent1(value:EventEmitter<any>){
    this._abrirModal1 = value;
  }
  abrirModal1(){
    this.modal1 = true;
    this.abrirModalEvent1.emit(true);
  }
  cerrarModal1(){
    this.modal1 = false;
  }
  /*Modal CO*/
  private _abrirModal2 = new EventEmitter<any>();
  get abrirModalEvent2():EventEmitter<any>{
    return  this._abrirModal2;
  }
  set abrirModalEvent2(value:EventEmitter<any>){
    this._abrirModal2 = value;
  }
  abrirModal2(){
    this.modal2 = true;
    this.abrirModalEvent2.emit(true);
  }
  cerrarModal2(){
    this.modal2 = false;
  }
  /*Premium*/
  private _abrirModal3 = new EventEmitter<any>();
  get abrirModalEvent3():EventEmitter<any>{
    return  this._abrirModal3;
  }
  set abrirModalEvent3(value:EventEmitter<any>){
    this._abrirModal3 = value;
  }
  abrirModal3(){
    this.modal3 = true;
    this.abrirModalEvent3.emit(true);
  }
  cerrarModal3(){
    this.modal3 = false;
  }
}
