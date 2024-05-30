import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from '../model/training';
import { TrainingService } from '../service/training.service';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent {
  training: Training | undefined;

  constructor(private route: ActivatedRoute, private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.getTrainingDetails();
  }

  getTrainingDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.trainingService.getTrainingById(id).subscribe(training => this.training = training);
  }
}
