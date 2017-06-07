import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from './recipe.model';

@Pipe({
  name: "completeness",
  pure: false
})


export class CompletenessPipe implements PipeTransform {
  transform(input: Recipe[]) {
    var output: Recipe[] = [];
    for (var i=0; i<input.length; i++) {
      if (input[i].status === false) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
