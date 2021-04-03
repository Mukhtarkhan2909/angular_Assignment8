import { Injectable } from '@angular/core';
import { GroupDetails, groups } from './groupDetails';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  group = groups;

  getGroup(): GroupDetails[] {
    return this.group;
  }
}
