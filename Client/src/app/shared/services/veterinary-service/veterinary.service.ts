import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Contact } from '../../models/contact'
import { Veterinary } from '../../models/veterinary'

@Injectable({
  providedIn: 'root',
})
export class VeterinaryService {
  private url: string = 'http://localhost:3100/api/veterinary'

  constructor(private httpClient: HttpClient) { }

  retriveAll(): Observable<Veterinary[]> {
    return this.httpClient.get<Veterinary[]>(this.url)
  }

  retrieveById(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.url}/${id}`)
  }

  save(veterinaryContact: Contact): Observable<Contact> {
    if (veterinaryContact.id) {
      return this.httpClient.put<Contact>(`${this.url}/${veterinaryContact.id}`, veterinaryContact)
    } else {
      return this.httpClient.post<Contact>(`${this.url}`, veterinaryContact)
    }
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${id}`)
  }
}

