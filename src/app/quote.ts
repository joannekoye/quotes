export class Quote {
  showDescription : boolean

  constructor(public quote: string, public author: string, public submitPerson: string, public date: Date){
    this.showDescription = false;
  }
}
