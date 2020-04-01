import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote ('I got Flowers today', 'Ms. DSF', 'Joan Nekoye',0,0, new Date(2020,1,5))
  ]

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1
    quote.date = new Date (quote.date)
    this.quotes.push(quote)
  }
  upvote(index){
    this.quotes[index].upvotes++
  }
  downvote(index){
    this.quotes[index].downvotes++
  }

  deleteQuote(isComplete,index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)

      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
