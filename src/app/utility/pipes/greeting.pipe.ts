import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let currentDate: Date = new Date();
    let currentHour: number = currentDate.getHours();
    if (currentHour < 12)
      return 'Good Morning, ' + args + value;
    if (currentHour < 18)
      return 'Good Afternoon, ' + args + value ;
    return 'Good Evening, ' + args + value;
  }



}
