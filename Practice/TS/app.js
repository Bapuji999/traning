"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [1, 2, 3, 4, 5];
arr.push(120);
console.warn(arr);
var obj = [];
obj.push({ name: 'bapuji', roll: 101 });
obj.push({ name: 'bapuji1', roll: 1011 });
obj.push({ name: 'bapuji11', roll: 10111 });
console.warn(obj);
function cal(num) {
    num = num * 10;
    return num;
}
console.warn(cal(10));
var App = /** @class */ (function () {
    function App(name) {
        this.name = name;
    }
    App.prototype.getName = function () {
        console.warn(this.name);
        return this.name;
    };
    return App;
}());
var a1 = new App('bapuji');
a1.getName();
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child.prototype.getName = function () {
        return this.name;
    };
    return child;
}(Parent));
var c1 = new child();
c1.setName('Bapuji');
console.log(c1.getName());
///<reference path="Utils.ts" />
var UserUtils;
(function (UserUtils) {
    var Users = /** @class */ (function (_super) {
        __extends(Users, _super);
        function Users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Users.prototype.getName = function () {
            return this.name;
        };
        return Users;
    }(Parent));
    UserUtils.Users = Users;
})(UserUtils || (UserUtils = {}));
var u2 = new UserUtils.Users();
u2.setName('ragadi');
console.warn(u2.getName());
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var teacher = new Teacher_1.default();
console.warn(teacher.data);
var student = new Student_1.default();
console.warn(student.data);
