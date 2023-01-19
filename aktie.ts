import { Gegenstand } from "./gegenstand";

export class aktie extends Gegenstand{
  constructor( id:number, wert: number, public Unternehmen: string, public nennwert: number){
    super(id,wert)
  }

  
}