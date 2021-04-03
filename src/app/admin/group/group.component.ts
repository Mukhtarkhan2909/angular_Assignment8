import { Component, OnInit } from '@angular/core';
import {GroupService} from '../services/group.service';
import {GroupDetails} from '../services/groupDetails';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groups: GroupDetails[] = this.groupService.getGroup();
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
  }

}
