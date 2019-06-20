/********************************************************************************
Remove value from array
******************************************************************************* */
export const arrayRemove = (arr, value) => {
  return arr.filter(function(ele) {
    return ele !== value;
  });
};

// e.g.: var result = arrayRemove(array, 6);
// result = [1, 2, 3, 4, 5, 7, 8, 9, 0]

/********************************************************************************
Flatten an array
******************************************************************************* */

export const arrayFlatten = list =>
  list.reduce((a, b) => a.concat(Array.isArray(b) ? arrayFlatten(b) : b), []);

/*

Example Structure

export const func1=()=>{
    // do stuff
}
export const func2=()=>{
    // do stuff 
}

// How we can access from components

import {func1,func2} from '..utils';

*/
