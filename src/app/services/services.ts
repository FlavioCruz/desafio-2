import { Inject, Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { StatusService } from './status.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class Service {
    getCityByState(state: string){
        return this.http.get('http://educacao.dadosabertosbr.com/api/cidades/' + state);
    }
}