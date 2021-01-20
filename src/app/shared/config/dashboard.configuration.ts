import { ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";

export const pieChartType: ChartType = 'pie';
export const barChartType: ChartType = 'bar';
export const barChartLabels: Label[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
export const chartsOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true,
        align: 'center',
        fullWidth: true
    }
};
export const configChartTerritoryTotal = {
    labels: ['Território Usado(ha)', 'Território livre(ha)'],
    data: null,
    colors: [{
        backgroundColor: ['#cc9900', '#009900'],
    }]
};
export const configChartTerritoryInputs = {
    labels: null,
    data: null,
    colors: null
};
