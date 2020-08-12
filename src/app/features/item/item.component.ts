import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PracticeItem } from 'src/app/shared/mt-interfaces';

@Component({
  selector: 'mt-item',
  template: `
  <br>
  <div fxLayout="column" fxLayoutAlign="space-around center" style="background-color: #FF0000;">
    <cdk-virtual-scroll-viewport itemSize="18 * 7" class="example-viewport">
      <mat-accordion class="example-headers-align">
        <mat-expansion-panel *cdkVirtualFor="let item of practiceItems" hideToggle>
          <mat-expansion-panel-header>
            <mat-panel-title>
              {{item.title}}
            </mat-panel-title>
            <mat-panel-description>
              Ultima volta:
              {{item.lastPractice}}
              <span class="example-spacer"></span>
              <span class="example-spacer"></span>
              <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon" (click)="btnClick('add', item.id, $event)">
                <mat-icon>favorite</mat-icon>
              </button>
              <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon" (click)="btnClick('remove', item.id, $event)">
                <mat-icon>favorite</mat-icon>
              </button>
              <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon" (click)="btnClick('archive', item.id, $event)">
                <mat-icon>favorite</mat-icon>
              </button>
            </mat-panel-description>
          </mat-expansion-panel-header>

          <mat-form-field appearance="outline">
            <mat-label>Titolo</mat-label>
            <input matInput value="{{item.title}}" placeholder="Titolo esercizio">
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Descrizione</mat-label>
            <textarea matInput></textarea>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Categoria</mat-label>
            <mat-select name="categoryId">
              <mat-option value="option">Option</mat-option>
            </mat-select>
          </mat-form-field>
          
          <mat-form-field appearance="outline">
            <mat-label>Strumento</mat-label>
            <mat-select name="instrumentId">
              <mat-option value="option">Option</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Durata</mat-label>
            <input type="number" matInput value="{{item.duration}}" placeholder="Durata esercizio">
          </mat-form-field>         

          <mat-form-field>
            <mat-label>Durata desc</mat-label>
            <input matInput type="number" min="1">
          </mat-form-field>          
          <mat-form-field>
            <mat-label>Goal</mat-label>
            <input matInput type="number" min="1">
          </mat-form-field>
          <mat-form-field>
            <mat-label>Schedulazione</mat-label>
            <input matInput type="number" min="1">
          </mat-form-field>  

          <mat-form-field appearance="outline">
            <mat-label>Scegli la data di inizio</mat-label>
            <input matInput [matDatepicker]="startDate">
            <mat-datepicker-toggle matSuffix [for]="startDate"></mat-datepicker-toggle>
            <mat-datepicker #startDate></mat-datepicker>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Scegli la data di fine</mat-label>
            <input matInput [matDatepicker]="endDate">
            <mat-datepicker-toggle matSuffix [for]="endDate"></mat-datepicker-toggle>
            <mat-datepicker #endDate></mat-datepicker>
          </mat-form-field>

          <mat-action-row>
            <button mat-button color="primary" (click)="nextStep()">Next</button>
          </mat-action-row>
        </mat-expansion-panel>
      </mat-accordion>
    </cdk-virtual-scroll-viewport>
    <button mat-raised-button color="primary">Aggiungi esercizio</button>
  </div>
  `,
  styles: [`
    .example-spacer {
      flex: 1 1 auto;
    }
    mat-accordion {
      
      width: 60%;
    }

    .example-viewport {
      height: 400px;
      width: 70%;
      border: 1px solid black;
    }
    `
  ]

  /**
    .example-headers-align .mat-expansion-panel-header-title,
    .example-headers-align .mat-expansion-panel-header-description {
      flex-basis: 0;
      width: 600px;
    }
    
    .example-headers-align .mat-expansion-panel-header-description {
      justify-content: space-between;
      align-items: center;
    }
    
    .example-headers-align .mat-form-field + .mat-form-field {
      margin-left: 8px;
    }
   */

})
export class ItemComponent implements OnInit {
  practiceItems: PracticeItem[];

  constructor( private httpClient: HttpClient) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  btnClick( type, item, event )
  {
    event.stopPropagation();
    console.log("eccolo: ", type);
  }

  getAll()
  {
    this.httpClient.get<PracticeItem[]>('http://localhost:3000/api/items').subscribe( result => 
    {
      this.practiceItems = result;
    });
  }
}
