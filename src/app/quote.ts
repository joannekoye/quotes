export class Quote {
  showDescription : boolean

  constructor(public quote: string, public author: string, public submitPerson: string){
    this.showDescription = false;
  }
}
