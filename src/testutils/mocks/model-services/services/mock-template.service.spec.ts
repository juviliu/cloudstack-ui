import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Template } from '../../../../app/template/shared';
import { GroupedTemplates } from '../../../../app/template/shared/base-template.service';


const templates: Array<Template> = require('../fixtures/templates.json');

@Injectable()
export class MockTemplateService {
  constructor(@Inject('mockTemplateServiceConfig') public config: { templates: any, groupedTemplates: any }) {}

  public getList(): Observable<Array<Template>> {
    return of(templates);
  }

  public getGroupedTemplates(): Observable<GroupedTemplates<Template>> {
    return of(this.config.groupedTemplates);
  }
}
