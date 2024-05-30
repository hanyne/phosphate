import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WebcamImage, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-webcam-capture',
  templateUrl: './webcam-capture.component.html',
  styleUrls: ['./webcam-capture.component.css']
})
export class WebcamCaptureComponent {
  public webcamImage: WebcamImage | null = null;
  private trigger: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sendImage(webcamImage);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  sendImage(image: WebcamImage): void {
    if (image) {
      this.http.post('http://localhost:8000/api/facial-recognition/', { image: image.imageAsBase64 })
        .subscribe(response => {
          console.log(response);
        });
    }
  }
}
