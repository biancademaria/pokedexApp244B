import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExibirPokemonPage } from './exibir-pokemon.page';

describe('ExibirPokemonPage', () => {
  let component: ExibirPokemonPage;
  let fixture: ComponentFixture<ExibirPokemonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirPokemonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExibirPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
