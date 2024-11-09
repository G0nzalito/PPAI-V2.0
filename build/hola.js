class DemoClassTest {
    constructor(...myarray) {
        if (myarray.length === 2) {
            console.log('two argument constructor called here !!');
            return;
        }
        if (myarray.length === 3) {
            console.log('three argument constructor called here !!');
            return;
        }
        if (myarray.length === 1) {
            console.log('one argument constructor called here !!');
            return;
        }
    }
}
let a = new DemoClassTest('hello', 'bye');
let b = new DemoClassTest(1);
let c = new DemoClassTest(100, 'str1');
export {};
