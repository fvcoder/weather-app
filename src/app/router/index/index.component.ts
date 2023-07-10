import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService, Search } from 'src/app/service/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexPage implements OnInit, OnDestroy {
  suscribe: Subscription[] = [];

  seachInput = new FormControl('');

  results: Search['result'] = [];

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    this.suscribe.push(
      this.seachInput.valueChanges.subscribe((query) => {
        if (query && query !== '') {
          this.suscribe.push(
            this.api.search(query).subscribe((res) => {
              this.results = res.result;
            })
          );
        } else {
          this.results = [];
        }
      })
    );
  }

  ngOnDestroy(): void {
    for (const sub of this.suscribe) {
      sub.unsubscribe();
    }
  }
}
