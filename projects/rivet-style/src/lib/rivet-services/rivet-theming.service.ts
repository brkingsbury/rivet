import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class RivetThemingService {

    setDarkMode(dark): void {
        console.log("set dark mode - " + dark)
        localStorage.setItem('darkmode', dark);
        if (JSON.parse(dark)) {
            document.body.setAttribute('data-theme', 'dark')
        } else {
            document.body.removeAttribute('data-theme')
        }
    }

    setColorVariable(variable, value): void {
        document.documentElement.style.setProperty(variable, value);
    }

    setColorGroup(obj): void {
        for (let [key, value] of obj) {
            console.log(key);
            document.documentElement.style.setProperty(key, value);
        }
    }

    getCurrentMode(): boolean {
        console.log("Get current mode - " + localStorage.getItem('darkmode'));
        if (localStorage.getItem('darkmode') != undefined && localStorage.getItem('darkmode') != null) {
            return JSON.parse(localStorage.getItem('darkmode'));
        } else {
            return false;
        }
    }

    initTheme(): void {
        console.log("Init theme - " + localStorage.getItem('darkmode'));
        if (this.getCurrentMode() != undefined && localStorage.getItem('darkmode') != null) {
            this.setDarkMode(localStorage.getItem('darkmode'));
        } else {
            this.setDarkMode('false');
        }
    }

}
