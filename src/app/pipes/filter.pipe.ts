import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], 
    texto: string,
    columna: string
    ): any[] {
    if(texto == ''){
      return array;
    }

    //texto = texto.toLowerCase();

    return array.filter(item => {
      return item[columna].includes(texto);
    })
    

  }
  
  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

}
