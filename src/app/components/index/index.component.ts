import { Component } from "../../../../node_modules/@angular/core";
import { Util } from "../../utils/utils";

@Component({
    selector: 'index',
    templateUrl: 'index.component.html',
    styleUrls: ['']
})
export class IndexComponent {
    states: string[];
    constructor(Utils: Util){
        this.states = Utils.getStates();
    }
    public fillCitiesSelect(state: string){

    }
}