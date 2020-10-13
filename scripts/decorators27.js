"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
//to use decorators enable "experimentalDecoraters : true" in tsconfig.
//decorators are widely used in angular.
//decoator is a special type of declarataion that can be attached to classe methods or properties.
//decorators gets evaluated to a function that will be called at run time
//decorater is specified by declaring it right above the class
//notice there should n ot be a semi column after @component({})
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Component({
        selector: "my-app",
        template: `<h1> Hello world </h1>` // the slector tag is replaced by template html
    })
], AppComponent);
exports.AppComponent = AppComponent;
//for furthur advanced reading in ts
//Read Promises, reflection and proxy in es2015 and type defination in ts
//# sourceMappingURL=decorators27.js.map