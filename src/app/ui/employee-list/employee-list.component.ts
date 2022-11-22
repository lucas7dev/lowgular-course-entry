import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = 'jak polaczyc ts z html';
  data$: Observable<EmployeeModel[] | null> = this._httpClient.get<EmployeeModel[]>( 'assets/data/employees.json');
  data = [{name:'jacek'}, {name:'pawel'}];
  constructor(private _httpClient: HttpClient) {
  }
}
