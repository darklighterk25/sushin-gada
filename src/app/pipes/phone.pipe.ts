import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    // Si la entrada tiene una longitud de 10 y se conforma exclusivamente de números.
    if (value.length == 10 && /^\d+$/.test(value)) {
      return "(" + value.substring(0, 3) + ")" + value.substring(3, 6) + "-" + value.substring(6);
    } else {
      return "Error";
    }
  }
}
