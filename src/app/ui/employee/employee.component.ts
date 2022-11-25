import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
  readonly employeeAddForm: FormGroup = new FormGroup({
    employee_name: new FormControl(),
    employee_salary: new FormControl()
  });

  constructor(private _employeeService: EmployeeService) {
  }

  public employees$ = this._employeeService.getAll();

  remove(id: string) {
    alert('Succes');
    this._employeeService.delete(id).subscribe();
  }

  onEmployeeAddFormSubmitted(form: EmployeeModel): void {
     this._employeeService.create(form).subscribe();
     this.employeeAddForm.reset();
  }
}
