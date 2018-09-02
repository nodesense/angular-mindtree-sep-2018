import { Pipe, PipeTransform } from '@angular/core';

// m^n

// {{ 3 | power:2 }} ==> 9
// {{ 5 | power   }} ==> 5 (exponent default to 1)
// 3, 5 are passed values
// 2 and 1 are exponents

// 1 pipe per component / pure pipe
@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  constructor() {
    console.log('PowerPipe Created');
  }

  transform(value: number, exponent: number = 1): number {
    console.log('pipe transform ', value, exponent);
    return Math.pow(value, exponent);
  }

}
