// we are learning object.
// read,
// set,

var smartPhone = {
    name: 'Huawei',
    color: 'blue',
    brant: 'second',
    global: 'yes',
    price: '20000',
    ram: '4gb',
    rom: '32gb',
    camera: '18px'
}
console.log(smartPhone);

// read
console.log(smartPhone.ram)

// set the property value.
smartPhone.price = 30000;
console.log(smartPhone);
// or
smartPhone['price'] = 50000;
console.log(smartPhone);
// or
var smartPhonePrice = 'price';
smartPhone[smartPhonePrice] = 77777777;
console.log(smartPhone);