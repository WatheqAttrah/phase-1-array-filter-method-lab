// Code your solution here
//`findMatching`- This function takes an array of drivers' names and a `string`
//as arguments, and returns the matching list of drivers. The function should be
//case insensitive.
function findMatching(drivers,string) {
    const newDriversList=drivers.filter(driver=> string.toLowerCase()===driver.toLowerCase());
    return newDriversList;
}
console.log(newDriversList);

//`fuzzyMatch` - This function takes an array of drivers' names and a `string`
//as arguments for querying the array, and returns all drivers whose names begin
//with the provided letters.
function fuzzyMatch(drivers,string){
    const driverLenght=string.length;
    const newDriversList=drivers.filter(driver=> string.toLowerCase()===driver.toLowerCase().substr(0,driverLenght));
    return newDriversList;
}
console.log(newDriversList)


//`matchName` - This function takes an array of `driver` objects and a `string`
//as arguments. Each `driver` object has two properties: `name` and `hometown`.
//The function should return each element whose `name` property matches the
//provided `string` argument.
function matchName(drivers,name) { // Accessing the name to the driver
    const newDriversList=drivers.filter(driver=> driver.name.toLowerCase()===name.toLowerCase());
    return newDriversList;

}
console.log(matchName)