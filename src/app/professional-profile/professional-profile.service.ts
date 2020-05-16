import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Degree, DegreeAdapter } from './degree.model'


@Injectable()
export class ProfessionalProfileService {

  private urlMasterDegree = '../../assets/data/master_degree.json';
  private urlBachelorDegree = '../../assets/data/bachelor_degree.json';

  constructor(private httpClient: HttpClient, private degreeAdapter: DegreeAdapter) {}

  getMasterDegree(): Observable<Degree> {
    return this.httpClient.get<Degree>(this.urlMasterDegree)
            .pipe(
              map(response => this.degreeAdapter.adapt(response ) )
            );

  }

  getBachelorDegree(): Observable<Degree> {
    return this.httpClient.get<Degree>(this.urlBachelorDegree)
            .pipe(
              map(response => this.degreeAdapter.adapt(response ) )
            );

  }

}
