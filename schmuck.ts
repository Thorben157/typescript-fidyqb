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
  

  toString(): string {
    /**
     * Datentyp der Variablen 'text' muss nicht zwangsläufig festgelegt werden.
     * Er ergibt sich andernfalls auch durch die Zuweisung.
     */
    let text: string = "\n\nSchmuck"; // ("let" erstellt, "text" ist der name, "string" macht den Datentyp, "\n" macht einen Zeilenumbruch, "Schmuck" ist der die Überschrieft die in der Konsole ausgeben werden) 
    text += "\nBezeinung: " + this.bezeichnung; //("text +=" sagt was dazu Kopiert wird, "\nBezeichnung" macht einen Zeilen umbruch und schreibt Bezeichnung, "+ this.bezeichnung" fügt danach die Bezeichnung ein)
    text += super.toString();
    return text;
  }
}