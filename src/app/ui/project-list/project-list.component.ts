import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {ProjectService} from "../../services/project.service";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
  project$: Observable<ProjectModel[] | null> = this._projectService.getAll();
  constructor(private _projectService: ProjectService) {
  }
}



