export const farms = [
    {
        name: 'Fazenda Onça Pintada',
        selected: false,
        infosByYear: [
            {
                year: 2020,
                territory: 9000,
                usedTerritory: 5000,
                reforestation: [280],
                deforestation: [56],
                inputs: [
                    {
                        type: 'Soja',
                        area: 3000
                    },
                    {
                        type: 'Gado',
                        area: 2000
                    }
                ]
            },
            {
                year: 2019,
                territory: 7000,
                usedTerritory: 3500,
                reforestation: [100, 80, 75, 45, 35, 10, 110, 68, 99, 140, 160, 54],
                deforestation: [54, 40, 35, 24, 40, 50, 60, 40, 20, 100, 90, 15]
            }
        ]
    },
    {
        name: 'Fazenda Rio Negro',
        selected: false,
        infosByYear: [
            {
                year: 2020,
                territory: 5000,
                usedTerritory: 1500,
                reforestation: [154],
                deforestation: [58],
                inputs: [
                    {
                        type: 'Milho',
                        area: 1000
                    },
                    {
                        type: 'Búfalo',
                        area: 300
                    },
                    {
                        type: 'Suinos',
                        area: 200
                    }
                ]
            },
            {
                year: 2019,
                territory: 7000,
                usedTerritory: 3500,
                reforestation: [101, 283, 603, 549, 675, 710, 176, 346, 232, 311, 134, 623],
                deforestation: [198, 536, 741, 625, 574, 237, 11, 202, 308, 25, 885, 293]
            }
        ]
    },
    {
        name: 'Fazenda Solimões',
        selected: false,
        infosByYear: [
            {
                year: 2020,
                territory: 12400,
                usedTerritory: 10400,
                reforestation: [10],
                deforestation: [5],
                inputs: [
                    {
                        type: 'Soja',
                        area: 5400
                    },
                    {
                        type: 'Gado',
                        area: 1000
                    },
                    {
                        type: 'Suinos',
                        area: 3000
                    },
                    {
                        type: 'Eucalipto',
                        area: 1000
                    }
                ]
            },
            {
                year: 2019,
                territory: 7000,
                usedTerritory: 3500,
                reforestation: [421, 573, 7, 351, 548, 808, 175, 514, 853, 501, 450, 73],
                deforestation: [224, 681, 526, 61, 893, 129, 469, 65, 65, 298, 460, 138]
            }
        ]
    }
];

export const menus = [
    {
        order: 1,
        name: 'MA - Monitorando Amazonas',
        selected: false,
        subMenus: []
    },
    {
        order: 2,
        name: 'Fazendas',
        selected: false,
        subMenus: farms
    }
];

export const about = {
    whoWeAre: `Monitorando Amazonas é uma aplicação web para monitoramento de território utilizado para o agropastoris. 
    Através de gráficos, a responsabilidade da aplicação é mostrar toda a utilização do território das fazendas cadastradas na prefeitura de Xapuri.
    Com a disponibilização da aplicação, será possivel ver o cruzamento de dados, tais como: 
    Total de hectares, 
    Total de hectares desmatados, 
    Total de hectares reflorestados,
    Total de hectares utilizados para plantio.
    Nós da Monitorando Amazonas temos a total certeza, de que, com o passar dos anos, nossa aplicação ajudará muito no combate do desmatamento ilegal. 
    Novas ideias estão por vir, não fique de fora dessa luta.`
};
