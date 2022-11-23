import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import {EmployeePeopleService} from "../../services/employee-people.service";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = 'jak polaczyc ts z html';
  data$: Observable<EmployeeModel[] | null> = this._employeePeopleService.getAll();
  data = [{ name: 'jacek' }, { name: 'pawel' }];
  constructor(private _employeePeopleService: EmployeePeopleService) {
  }
}
