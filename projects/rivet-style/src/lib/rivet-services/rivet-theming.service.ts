import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class RivetThemingService {

    // Apply a dark mode flag to the body element for Rivet to base styling off of.
    setDarkMode(dark): void {
        localStorage.setItem('darkmode', dark);
        if (JSON.parse(dark)) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
    }

    // re-assign specific css color variable in Rivet
    setColorVariable(variable, value): void {
        document.documentElement.style.setProperty(variable, value);
    }

    // loop through and re-assign a group of css color variables in Rivet
    setColorGroup(obj): void {
        for (const [key, value] of obj) {
            console.log(key);
            // TODO: this doesn't work yet
            document.documentElement.style.setProperty(key, value);
        }
    }

    // return a bool from localstorage, if it exists, that indicates current dark mode state (return false if no variable exists)
    getCurrentMode(): boolean {
        if (localStorage.getItem('darkmode') !== undefined && localStorage.getItem('darkmode') !== null) {
            return JSON.parse(localStorage.getItem('darkmode'));
        } else {
            return false;
        }
    }

    // call setDarkMode to either apply or not apply dark mode based on current mode flag
    initTheme(): void {
        if (this.getCurrentMode() !== undefined && localStorage.getItem('darkmode') !== null) {
            this.setDarkMode(localStorage.getItem('darkmode'));
        } else {
            this.setDarkMode('false');
        }
    }

}
