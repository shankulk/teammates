import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatusMessageModule } from './components/status-message/status-message.module';
import { PageComponent } from './page.component';
import { PublicPageComponent } from './public-page.component';

describe('PublicPageComponent', () => {
  let component: PublicPageComponent;
  let fixture: ComponentFixture<PublicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageComponent,
        PublicPageComponent,
      ],
      imports: [
        NgbModule,
        RouterTestingModule,
        StatusMessageModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
