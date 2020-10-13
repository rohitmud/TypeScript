//to use decorators enable "experimentalDecoraters : true" in tsconfig.
//decorators are widely used in angular.
//decoator is a special type of declarataion that can be attached to classe methods or properties.
//decorators gets evaluated to a function that will be called at run time
//decorater is specified by declaring it right above the class
//notice there should n ot be a semi column after @component({})
@Component ({
    selector : "my-app",//a selector is a custom htmk tag
    template : `<h1> Hello world </h1>`// the slector tag is replaced by template html
})
export class AppComponent {

}

//for furthur advanced reading in ts
//Read Promises, reflection and proxy in es2015 and type defination in ts
