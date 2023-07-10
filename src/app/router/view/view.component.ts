import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService, State } from 'src/app/service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
})
export class ViewPage implements OnInit, OnDestroy {
  suscribe: Subscription[] = [];
  data: Partial<State> = {};

  constructor(
    private readonly api: ApiService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const idZone = this.route.snapshot.paramMap.get('zone');
    if (Number.isNaN(Number(idZone))) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.router.navigate(['/']);
    }
    this.suscribe.push(
      this.api.getState(Number(idZone)).subscribe(
        (res) => {
          this.data = res;
        },
        () => {
          return;
        }
      )
    );
  }

  ngOnDestroy(): void {
    for (const sub of this.suscribe) {
      sub.unsubscribe();
    }
  }
}
