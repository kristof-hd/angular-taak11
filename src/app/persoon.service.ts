import { Injectable } from '@angular/core';
import { Persoon } from './persoon';
import { PERSONEN } from './mock-personen';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersoonService {
  getPersonen(): Observable<Persoon[]> {
    return of(PERSONEN);
  }

  getKlanten(): Observable<Persoon[]> {
    return of(PERSONEN.filter(persoon => persoon.isCustomer));
  }

  getPersoon(id: number): Observable<Persoon> {
    return of(PERSONEN.find(persoon => persoon.id === id));
  }
}
