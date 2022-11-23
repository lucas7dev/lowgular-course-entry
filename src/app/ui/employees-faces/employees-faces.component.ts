import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {EmployeeModel} from "../../model/employee.model";
import {Observable} from "rxjs";
import {EmployeePeopleService} from "../../services/employee-people.service";

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
  data$: Observable<EmployeeModel[] | null> = this._employeePeopleService.getAll();
  constructor(private _employeePeopleService: EmployeePeopleService) {
  }
}

