import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();

  constructor() { }

  getAllNotes(){
    console.log(this.notes)
    return this.notes;
  }

  getNote(id:number){
    return this.notes[id]
  }

  getId(note: Note){
    return this.notes.indexOf(note);
  }

  addNote(note: Note){
    let newLength = this.notes.push(note);
    let index = newLength - 1;
    return index;
  }

  updateNote(id: number, title: string, body: string){
    let note = this.notes[id];
    note.title = title;
    note.body = body;
  }

  deleteNote(id: number){
    this.notes.splice(id, 1);
  }
}
