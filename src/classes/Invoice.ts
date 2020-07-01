import { HasFormatter } from "../interfaces/HasFormatter";

//==========================================================
// Class
//==========================================================
export class Invoice implements HasFormatter {
  constructor(readonly c: string, private m: number, public d: string) {}

  format() {
    return `Formated String ${this.c}`;
  }
}
