
import {Component} from "@angular/core";
@Component({
    selector: 'messages',
    template: `
        <div class="row">
            <app-message-input></app-message-input>
        </div>
        <hr>
        <div class="row">
            <app-message-list></app-message-list>
        </div>
    `
})
export class MessagesComponent {

}