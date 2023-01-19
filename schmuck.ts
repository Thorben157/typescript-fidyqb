import { Gegenstand } from "./gegenstand"; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {

  constructor(id: number, wert: number, public bezeichnung: string) {
	super(id, wert);
  }
  
  getbezeichnung(){
    return this.bezeichnung
  }

  setbezeichnung(String, bezeichnung){
    this.bezeichnung = bezeichnung
  }
  toString(): any{
    let text : string = ""
  }
}