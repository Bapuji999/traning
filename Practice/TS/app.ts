

interface abc {
    name: string;
    roll: number;
}

let arr: number[] = [1, 2, 3, 4, 5];
arr.push(120);
console.warn(arr);

let obj: Array<abc> = [];

obj.push(
    { name: 'bapuji', roll: 101 }
);

obj.push(
    { name: 'bapuji1', roll: 1011 }
);

obj.push(
    { name: 'bapuji11', roll: 10111 }
);

console.warn(obj);

function cal(num:number):number{
    num = num*10;
    return num;
}

console.warn(cal(10));

class App{
    private name:string;
    constructor(name:string){
        this.name=name;
    }
    public getName():string{
        console.warn(this.name);
        return this.name;
    }
}

let a1 = new App('bapuji');
a1.getName();

class Parent{
    protected name:string;
    setName(name:string){
        this.name=name;
    }
}

class child extends Parent{
    getName():string{
        return this.name;
    }
}

let c1 = new child();
c1.setName('Bapuji');
console.log(c1.getName());

///<reference path="Utils.ts" />

namespace UserUtils{
    export class Users extends Parent{
        getName():string{
            return this.name;
        }
    }
}

let u2 = new UserUtils.Users();
u2.setName('ragadi');
console.warn(u2.getName());

import sLogin from './Student';
import tLogin from './Teacher';

let teacher = new tLogin();
console.warn(teacher.data);

let student = new sLogin();
console.warn(student.data);