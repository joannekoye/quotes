import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any): any{

    let today:Date = new Date ()//get current date and time
    let todayWithoutTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithoutTime - value)//returns value in milliseconds
    const secondsInDay = 86400
    var dateDifferenceInSeconds = dateDifference*0.001
    var dateCounter = dateDifferenceInSeconds/secondsInDay;
    const alert = 'Invalid date'

    if (dateCounter>=1 && todayWithoutTime > value){
      return dateCounter;
    } else{
      return alert;
    }
  }
  

}
