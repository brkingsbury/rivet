import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['../components.component.scss']
})
export class LoadingComponent implements OnInit {

    isLoading = false;
    btnLoading = false;

    startLoad() {
        this.btnLoading = true;
        setTimeout(() => {this.btnLoading = false; }, 5000);
    }

  constructor() { }

  ngOnInit() {}

}
