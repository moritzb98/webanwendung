import { BilduploadService } from './../Services/bildupload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bildupload',
  templateUrl: './bildupload.component.html',
  styleUrls: ['./bildupload.component.css']
})
export class BilduploadComponent implements OnInit {
  selectedImage = null;

  constructor(private uploadService: BilduploadService) { }

  ngOnInit() {
  }

  upload() {
    this.uploadService.uploadImage(this.selectedImage);
  }

  selectImage(event) {
    this.selectedImage = event.target.files[0];
  }

}
