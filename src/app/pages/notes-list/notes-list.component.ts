import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NoteCardComponent } from '../../note-card/note-card.component';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NoteCardComponent, CommonModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent implements OnInit{

  notes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService,
    private router: Router) {}

  ngOnInit(): void {
    this.notes = this.notesService.getAllNotes();
  }

  updateNote(i: number){
    this.router.navigateByUrl('/'+i);
  }

  createNote(){
    this.router.navigateByUrl('/new');
  }

  deleteNote(id:number){
    this.notesService.deleteNote(id);
    this.router.navigateByUrl('/');
  }


}
