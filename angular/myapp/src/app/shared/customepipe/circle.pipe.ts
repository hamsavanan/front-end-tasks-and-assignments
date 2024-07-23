import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'circle'
})
export class CirclePipe implements PipeTransform {

  transform(value: number): number {
    return 3.14*value**2;
  }

}
