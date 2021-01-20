import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { configChartTerritoryInputs, configChartTerritoryTotal, pieChartType, chartsOptions, barChartType, barChartLabels } from 'src/app/shared/config/dashboard.configuration';
import { getRandomColor } from 'src/app/shared/utils/functions';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnChanges {
    @Input() farm;

    public tabSelected = 0;
    public chartsOptions = chartsOptions;
    public pieChartType = pieChartType;
    public barChartType = barChartType;
    public configChartTerritoryTotal = configChartTerritoryTotal;
    public configChartTerritoryInputs = configChartTerritoryInputs;
    public barChartData: ChartDataSets[];
    public barChartLabels = barChartLabels;

    constructor() {
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
    }

    public ngOnChanges(): void {
        this.makeInformationsForChartTerritoryTotal();
        this.makeInformationsChartInputs();
        this.makeInformationsForbarChartData();
    }

    public makeInformationsForChartTerritoryTotal(): void {
        this.configChartTerritoryTotal.data = [
            this.farm.infosByYear[0].usedTerritory,
            (this.farm.infosByYear[0].territory - this.farm.infosByYear[0].usedTerritory)
        ];
    }

    public makeInformationsChartInputs(): void {
        this.configChartTerritoryInputs.data = this.farm.infosByYear[0].inputs.map(input => input.area);
        this.configChartTerritoryInputs.labels = this.farm.infosByYear[0].inputs.map(input => input.type);
        this.configChartTerritoryInputs.colors = [{
            backgroundColor: this.farm.infosByYear[0].inputs.map(input => getRandomColor()),
        }];
    }

    public makeInformationsForbarChartData(): void {
        this.barChartData = [
            { data: this.farm.infosByYear[1].deforestation, label: 'Desmatamento(ha)' },
            { data: this.farm.infosByYear[1].reforestation, label: 'Reflorestamento(ha)' }
        ];
    }

    public tabSelect(index: number): void {
        this.tabSelected = index;
    }

}
