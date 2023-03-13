import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

//Aquest objecte es podrà utilitzar a qualsevol lloc gràcies al "root"
@Injectable({
        providedIn: "root"
})

export class dragonsApi {
    //Amb el constructor fem que la classe catFact tingui la propietat HttpClient per fer peticions HTTP
    constructor(private http:HttpClient){}
    requestOptions = this.createHeader();


    getImatge(id: string): Observable<any>{
        return this.http.get("https://www.artic.edu/iiif/2/"+ id + "/full/843,/0/default.jpg",this.requestOptions);
    }
    

    getDragons(): Observable<any>{
        console.log(this.http.get("https://www.dnd5eapi.co/api/monsters",this.requestOptions));

        return this.http.get("https://www.dnd5eapi.co/api/monsters",this.requestOptions);
    }

    getArtista(id: number):Observable<any>{
        return this.http.get("https://api.artic.edu/api/v1/artists/" + id, this.requestOptions);
    }

    private createHeader(){

        const header = {
            "Access-Control-Allow-Origin":"*",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Headers":"Origin, Content-Type, Accept, Authorization"
        }

        return {headers: new HttpHeaders(header)}
    }

}
