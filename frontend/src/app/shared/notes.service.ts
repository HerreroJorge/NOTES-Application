import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();
  url = 'http://127.0.0.1:9000/api/notes';
  error: any;

  constructor(private http: HttpClient) {}

  getAllNotes(): Observable<Note[]>{
    return new Observable<Note[]>(observer => {
      this.http.get(this.url).subscribe( response => {
        const notes = response as Note[];
        console.log(notes);
        observer.next(notes);
        observer.complete();
      });
    })
  }

  getNote(id:number){
    return new Observable<Note>(observer => {
      this.http.get(this.url+'/'+id).subscribe( response => {
        const note = response as Note;
        observer.next(note);
        observer.complete();
      });
    })
  }

  getId(note: Note){
    return this.notes.indexOf(note);
  }

  addNote(note: Note, suscribe: () => void){
    this.http.post(this.url, note).subscribe(suscribe);
  }

  updateNote(note: Note, suscribe: () => void){
    this.http.put(this.url+'/'+note._id, note).subscribe(suscribe);
  }

  deleteNote(id: string, suscribe: () => void){
    this.http.delete(this.url+'/'+id).subscribe(suscribe);
  }
}
