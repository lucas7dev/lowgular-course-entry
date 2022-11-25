import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../model/employee.model';
import { ApiResponse } from './api.response';

@Injectable()
export class EmployeeService {

  constructor(private _clientHttp: HttpClient) {
  }
  create(employee: EmployeeModel): Observable<any> {
    return this._clientHttp.post('https://dummy.restapiexample.com/api/v1/create', employee);
  }

  delete(id: string): Observable<any> {
    return this._clientHttp.delete('https://dummy.restapiexample.com/api/v1/delete/' + id)
  }
  getAll(): Observable<EmployeeModel[]> {
    return this._clientHttp.get<ApiResponse<EmployeeModel[]>>(`https://dummy.restapiexample.com/api/v1/employees`).pipe(
      map((response: ApiResponse<EmployeeModel[]>): EmployeeModel[] => {
        return response.data;
      })
    )
  }



}
