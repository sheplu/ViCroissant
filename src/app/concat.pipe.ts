import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(value: any, arg1: any): any {
    let tmp = value.name + arg1
    return tmp;
  }

}
