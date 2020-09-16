import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompactDiskService } from '../compact-disk.service';
import { CompactDisk } from '../models/compactdisk';

@Component({
  selector: 'app-compact-disk',
  templateUrl: './compact-disk.component.html',
  styleUrls: ['./compact-disk.component.css']
})
export class CompactDiskComponent implements OnInit {
  compactDisk$: Observable<CompactDisk>;
  id: string;
  constructor(private compactDiskService: CompactDiskService, private avRoute: ActivatedRoute) { 
    if(this.avRoute.snapshot.params['id']){
      this.id = this.avRoute.snapshot.params['id']
    }
  }

  ngOnInit(): void {
    this.loadContact();
  }

  loadContact(){
    this.compactDisk$ = this.compactDiskService.getCD(this.id);
  }

}
