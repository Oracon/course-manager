import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
// Criando um novo pipe para substituir chars
export class ReplacePipe implements PipeTransform {
  transform(value: string, char: string, valueToReplace: string) {
    return value.replace(char, valueToReplace);
  }
}
