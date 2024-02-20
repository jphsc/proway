import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderclearComponent } from './headerclear.component';

describe('HeaderclearComponent', () => {
  let component: HeaderclearComponent;
  let fixture: ComponentFixture<HeaderclearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderclearComponent]
    });
    fixture = TestBed.createComponent(HeaderclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
