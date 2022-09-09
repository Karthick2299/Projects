let array: any = [];

//rowValue  => Value of the Row that you got in row input field.
//columnValue => Value of the Column that you got in column Input field

let rowValue = 3;
let columnValue = 3;

for(let i = 0; i < rowValue; i++){
    for(let j = 0; j < columnValue; j++){
            array.push([i, j]);
    }
}