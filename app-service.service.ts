import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, mergeMap, Observable, of } from 'rxjs';
import { AppModel, BackendDataAppModel } from './app.model';
import {take}  from 'rxjs/operators' 
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  public appModel: AppModel[] =[]

  constructor(private http: HttpClient) { 
    this.getDustbinDataFromBackend()
  }

  public getDustbinDataFromBackend(): void{
    const data = 'assets/dustbinData.json';

    this.http.get<BackendDataAppModel>(data).pipe(
      take(1),
      map((data: BackendDataAppModel)=>{
        return data.data.map((appModel)=>new AppModel(appModel) )
      })).subscribe((appModelArray)=>{
        this.appModel = appModelArray;
    
      })
}

public getDustbinData() : AppModel[] {
  return this.appModel
}
}
