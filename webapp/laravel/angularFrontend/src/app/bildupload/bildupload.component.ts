import { BilduploadService } from './../Services/bildupload.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bildupload',
  templateUrl: './bildupload.component.html',
  styleUrls: ['./bildupload.component.css']
})
export class BilduploadComponent implements OnInit {
  selectedImage = null;

  constructor(private uploadService: BilduploadService, private router: Router) { }

  ngOnInit() {
  }

  upload() {
    this.uploadService.uploadImage(this.selectedImage).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  selectImage(event) {
    this.selectedImage = event.target.files[0];
  }

}
