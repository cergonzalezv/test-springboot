import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient) { }

  getNotices(url:string){
    const dinamicUrl = url;
    return this.http.get(`${environment.API_URL}/${dinamicUrl}`).pipe(
      map(responseData => {
        const temaArray: any[] = [];
        for ( const key in responseData){
          if(responseData.hasOwnProperty(key)){
            temaArray.push({...responseData[key]});
          }
        }
        return temaArray;
      })
    )
   }

   getWeather(url:string){
    const dinamicUrl = url;
    return this.http.get(`${environment.API_URL}/${dinamicUrl}`).pipe(
      map(responseData => {
        const temaArray: any[] = [];
        for ( const key in responseData){
          if(responseData.hasOwnProperty(key)){
            temaArray.push({...responseData[key]});
          }
        }
        return temaArray;
      })
    )
   }
}
