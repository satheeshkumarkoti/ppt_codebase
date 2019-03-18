import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/components/home/IProject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'src/app/appConfig';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProplanService {

  constructor(private http: HttpClient) { }

  public getAllProjects(): Observable<any> {
    const endPoint = `${AppConfig.SERVICE}allProjects/`;
    console.log(endPoint);
    return this.http.get<IProject[]>(endPoint);
  }

  public createProject(projectData: any): Observable<any> {
    const endPoint = `${AppConfig.SERVICE}project/`;
    const body = JSON.stringify(projectData);
    return this.http.post<any>(endPoint, body, httpOptions);
  }

  public editProject(projectData: any, id: String): Observable<any> {
    const endPoint = `${AppConfig.SERVICE}project/${id}`;
    const body = JSON.stringify(projectData);
    return this.http.put<any>(endPoint, body, httpOptions);
  }

}
