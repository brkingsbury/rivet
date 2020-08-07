import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class RivetPopoverService {

    toggle(id) {
        console.log('id', id);
    }

}
