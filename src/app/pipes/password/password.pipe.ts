import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, mostrar: boolean): string {
    if(mostrar){
      return value;
    }else{
      let password = '';
      for(let i = 0; i < value.length; i++){
        password += '*';
      }
      return password;
    }
  }

}
