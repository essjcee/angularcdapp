import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompactDiskService } from '../compact-disk.service';
import { CompactDisk } from '../models/compactdisk';

@Component({
  selector: 'app-compact-disk-add-edit',
  templateUrl: './compact-disk-add-edit.component.html',
  styleUrls: ['./compact-disk-add-edit.component.css']
})
export class CompactDiskAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  title: string;
  artist: string;
  price: string;
  id: string;
  errorMessage: any;
  existingCD: CompactDisk;
  constructor( private compactDiskService: CompactDiskService, private formBuilder: FormBuilder,
    private avRoute: ActivatedRoute, private router: Router) { 
      const idParam = 'id';
      this.actionType = 'Add';
      this.title = 'title';
      this.artist = 'artist';
      this.price = 'price';
      this.id = '';
      if(this.avRoute.snapshot.params[idParam]){
        this.id = this.avRoute.snapshot.params[idParam];
      }
      this.form = this.formBuilder.group(
      {
          id: '',
          title: ['',[Validators.required]],
          artist: ['',[Validators.required]],
          price: ['',[Validators.required]]
      }
      );
    }

  ngOnInit(): void {
    if(this.id != ""){
      this.actionType = 'Edit';
      this.compactDiskService.getCD(this.id)
      .subscribe(data => (
        this.existingCD = data,
        this.form.controls['title'].setValue(data.title),
        this.form.controls['artist'].setValue(data.artist),
        this.form.controls['price'].setValue(data.price)
      ));
    }
  }

  get f(){
    return this.form.controls;
  }

  save(){
    if(!this.form.valid){
      return;
    }
    if(this.actionType === 'Add'){
      let cd: CompactDisk = {
        title: this.form.get('title').value,
        artist: this.form.get('artist').value,
        price: this.form.get('price').value
      };
      this.compactDiskService.saveCompactDisk(cd).subscribe((data)=>{
        this.router.navigate(['/']);
      });
    }

    if(this.actionType === 'Edit'){
      let cd: CompactDisk = {
        hexString: this.existingCD.hexString,
        title: this.form.get('title').value,
        artist: this.form.get('artist').value,
        price: this.form.get('price').value
      };
      this.compactDiskService.updateCompactDist(cd.hexString,cd).subscribe((data) =>
      { this.router.navigate(['/']);
      });
    }
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
