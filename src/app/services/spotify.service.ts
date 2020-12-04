import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCvCBd0Fhg_HDq_KcSGvT-VjPetDCwKnjjc2M1Q1A53upm-HEMPC1unVE_mXwMtDEgTGeVDJNYX24pWHoQ'
    })

     return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
        

   }
}
