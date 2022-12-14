import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalizePhillips'
})
export class CaptalizePhillipsPipe implements PipeTransform {

  transform(frase: string): string {
    let palavras = frase.split(" ");
    let fraseFinal = '';
    for(let i = 0; i < palavras.length; i++){
      palavras[i] = palavras[i].substring(0,1).toUpperCase() + palavras[i].substring(1);
    }
    fraseFinal = palavras.join(" ");
    return fraseFinal;
  }

}
