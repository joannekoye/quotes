export class Quote {
  showDescription : boolean
  showUpvotes: boolean
  showDownvotes: boolean

  constructor(public quote: string, public author: string, public submitPerson: string,public upvotes: number, public downvotes: number, public date: Date){
    this.showDescription = false;
    this.showUpvotes= true;
    this.showDownvotes=true;
  }
  
}
