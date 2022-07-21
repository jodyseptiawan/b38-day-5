// Data Type => Object & Array

// -------------------- OBJECT --------------------

// {
//     _properties_: _value_
// }

// Declare
// const car = {
//     name: 'Fiat',
//     weight: 750,
//     color: 'red',
//     chair: {
//         color: 'gray',
//         model: 'xxxx10'
//     }
// }

// Object.freeze(car);
// Object.freeze(car.chair);

// add property
// car.year = '2002'
// car.owner = 'Agus'

// get by property
    // console.log(car.color); // #1
    // console.log(car['color']); // #2

// delete property
// delete car.weight;

// Update/Edit value on property
// car.color = 'blue'

// car.chair.color = 'yellow'

// console.log(car);


// -------------------- ARRAY --------------------

// const car1 = 'ducati';
// const car2 = 'ferrari';

// const cars = [ 'ferrari' , 'ducati' , 'lambo' ]
// const colors = ['red','blue','yellow','gray','black','white']
// const numbers = [7,4,9,2,6,3,1,8]

// Add value
// colors.push('green', 'purple')
// colors.push('pink')
// cars.push('fiat')

// Get data by index
// console.log(colors[-2]);

// Delete data
// colors.splice(1,1)

// console.log(colors);

// sort
// numbers.sort()
// colors.sort()

// console.log(cars);
// console.log(colors);
// console.log(numbers);



// -------------------- ARRAY OF OBJECT --------------------

const arr = [ 
                {
                    name: 'Khoirul',
                    address: 'bekasi'
                }, 
                {
                    name: 'Pebry',
                    address: 'Bogor'
                }, 
                { 
                    name: 'Irma',
                    address: 'Jakarta Selatan'
                }
            ]
