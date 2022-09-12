import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace'
})
export class ReplaceSpacePipe implements PipeTransform {

  //nickname replacespace
  transform(value: string, args: string): string {
    value=value.split(' ').join(args).toLocaleLowerCase();
    return value;
  }

}
