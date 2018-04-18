import { Component } from "@angular/core";


@Component({
    selector:'app-first',
    templateUrl:'./first.component.html'
})
export class FirstComponent {
    idP:string = 'monId2';
    maVariable:string = 'bloup';
    showSection:boolean = true;
    tableau:string[] = ['ga', 'zo', 'bu', 'meu'];
    input:string;

    methode():void {
        console.log('bloup');
        this.maVariable = 'blip';
        this.showSection = !this.showSection;
    }

    add():void{
        this.tableau.push(this.input);
        this.input='';
    }
}