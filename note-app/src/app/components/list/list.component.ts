import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { NotesServicesService } from 'src/app/services/notes-services.service';
import { Notes } from 'src/app/notes';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public notes: Notes[];
  dataSource: any;

  dataSourceWithPageSize: any;

  constructor(
    private _notesservice: NotesServicesService,
    private router: Router
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this._notesservice.getNotes().subscribe(
      (data: Notes[]) => {
        this.notes = data;
        this.dataSource = new MatTableDataSource<Notes>(this.notes);
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  noteForm() {
    this.router.navigate(['/createupdate']);
  }

  editNote(note: Notes) {
    this.router.navigate(['createupdate', note._id]);
  }

  deleteNote(id: number) {
    this._notesservice.deleteNote(id).subscribe(
      (data) => {
        this.router.navigate(['/']);
        console.log('Selected note deleted', data);
        this.notes = this.notes.filter((note) => note._id !== id);
        this.dataSource.data = this.notes;
        this.obs = this.dataSource.connect();

        // If the deleted note was the last one on the current page, navigate to the previous page
        if (
          this.dataSource.paginator &&
          this.notes.length % this.dataSource.paginator.pageSize === 0
        ) {
          this.dataSource.paginator.previousPage();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
