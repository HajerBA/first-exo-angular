import { Component } from "@angular/core";



@Component({
    selector: 'app-root',
    template: `<h1 style="color:red;">  {{maVariable}}</h1>
                <app-person-list></app-person-list>
               `
})
export class AppComponent {
    maVariable:string = 'First code with Angular';
}