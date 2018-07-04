import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeevaluationComponent } from './challengeevaluation.component';
import { ChallengeService } from '../services/challenge.service';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../global.service';
import { HttpClientModule } from '@angular/common/http';

describe('ChallengeevaluationComponent', () => {
  let component: ChallengeevaluationComponent;
  let fixture: ComponentFixture<ChallengeevaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeevaluationComponent ],
      providers: [ ChallengeService, ApiService, GlobalService ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
