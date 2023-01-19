import { Gegenstand } from "./gegenstand";

export class aktie extends Gegenstand{
  constructor( id:number, wert: number, public Unternehmen: string, public nennwert: number){
    super(id,wert)
  }

  get unternehmen(){
    return this.unternehmen;
  }

  set unternehmen(){
    this.Unternehmen=this.Unternehmen;
  }

  get nennwert(){
    return this.nennwert;
  }

  set nennwert(nennwert:number){
    this.nennwert=this.nennwert;
  }
}