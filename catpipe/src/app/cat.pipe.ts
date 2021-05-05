import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cat'
})
export class CatPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/[Mm][Ee]/g, 'mew')
    .replace(/[Mm][Oo]/g, 'meow')
    .replace(/[Nn][Oo]/g, 'nyan')
    .replace(/[Mm][Yy]/g, 'myeow')
    .replace('. ', ', nya. ')
    .replace(/[Pp][Ee][Rr]/g, 'purr');
  }

}
