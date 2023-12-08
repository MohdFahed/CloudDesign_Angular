import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRegs } from '../../shared/registration/reg.selector';
import { deleteReg } from '../../shared/registration/reg.action';
import { MatDialog } from '@angular/material/dialog';
import { DailLogBoxComponent } from '../dail-log-box/dail-log-box.component';

@Component({
  selector: 'app-reg-display',
  templateUrl: './reg-display.component.html',
  styleUrls: ['./reg-display.component.css'],
})
export class RegDisplayComponent implements OnInit {
  List: any;
  constructor(private store: Store<{ reg: any[] }>, public dialog: MatDialog) {}
  displayedColumns: string[] = ['Name', 'Phone No', 'state', 'city', 'action'];
  ngOnInit(): void {
    this.store.select(getRegs).subscribe((res) => {
      this.List = res;
    });
  }
  edit(id: any) {
    console.log(id);
    this.openDailogBox(id);
  }
  delete(id: any) {
    this.store.dispatch(deleteReg({ id: id }));
  }
  openDailogBox(id: any) {
    const dialogRef = this.dialog.open(DailLogBoxComponent, {
      width: '50%',
      data: {
        id: id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
