import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnape } from "../models/face-snap.model";

@Injectable({providedIn:'root'})
export class FaceSnapeService{

    constructor(private http:HttpClient){

    }

    faceSnapes:FaceSnape[]=[]

      getAllFaceSnaps():Observable<FaceSnape[]>{

        return this.http.get<FaceSnape[]>('http://localhost:3000/facesnaps');

      }

      snapFaceSnapById(faceSnapeId:number):Observable<FaceSnape>{

        return this.getSnapById(faceSnapeId).pipe(
            map(faceSnap=>({
                ...faceSnap,
                snaps:faceSnap.snaps+1
            })),
            switchMap(updatedFacesnap=>(
                this.http.put<FaceSnape>(`http://localhost:3000/facesnaps/${faceSnapeId}`,updatedFacesnap)
            ))
        );
        
      }

      getSnapById(id:number):Observable<FaceSnape>{

        return this.http.get<FaceSnape>(`http://localhost:3000/facesnaps/${id}`);
      }

      unSnapById(faceSnapeId:number):Observable<FaceSnape>{

        return this.getSnapById(faceSnapeId).pipe(
            map(faceSnap=>({
                ...faceSnap,
                snaps:faceSnap.snaps-1
            })),
            switchMap(updatedFacesnap=>(
                this.http.put<FaceSnape>(`http://localhost:3000/facesnaps/${faceSnapeId}`,updatedFacesnap)
            ))
        );


      }

      addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
        const faceSnap: FaceSnape = {
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: this.faceSnapes[this.faceSnapes.length - 1].id + 1
        };
        this.faceSnapes.push(faceSnap);
    }

}