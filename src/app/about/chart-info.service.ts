const orange  = "hsl(18, 100%, 59%)";
const yellow  = "hsl(48, 100%, 59%)";
const blue    = "hsl(223, 100%, 59%)";
const purple  = "hsl(280, 100%, 59%)";
const magenta = "hsl(336, 100%, 59%)";
const grey    = "#777777";

const backgroundColorList = [
    magenta,
    blue,
    orange,
    purple,
    yellow,
];

const backgroundHoverColorList = [
    grey,
    grey,
    grey,
    grey,
    grey
];


export class ChartInfoService {

    dataLanguages: any;
    dataSectors: any;
    dataDevelopment: any;
    dataMethodologies: any;
    dataDatabases: any;
    dataTesting: any;
    dataOperatingSystem: any;
    dataVersionControl: any;
    data: any;


    constructor()
    {
        this.dataLanguages = {
          labels: ['C++', 'Python', 'Java', 'Others'],
          datasets: [
              {
                    data: [57, 18, 15, 10],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
              }]
          };

        this.dataSectors = {
          labels: ['Video', 'Networks', 'Payments', 'Others'],
          datasets: [
              {
                    data: [38.46, 15.38, 30.77, 15.38],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
              }]
          };

        this.dataDevelopment = {
          labels: ['Backend', 'Frontend', 'Devops', 'Signal/data processing', 'Embedded'],
          datasets: [
              {
                    data: [60, 10, 10, 10, 10],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
              }]
          };

        this.dataMethodologies = {
            labels: ['Scrum', 'Kanban', 'SaFe', 'Other Agile', 'Traditional'],
            datasets: [
                {
                    data: [60, 5, 10, 5, 20],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
                }]
            };

        this.dataDatabases = {
            labels: ['SQL (Oracle)', 'SQL (Other)', 'No-SQL (MongoDB)', 'No-SQL (Other)', 'Other'],
            datasets: [
                {
                    data: [55, 10, 20, 10, 5],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
                }]
            };

        this.dataTesting = {
            labels: ['Unit', 'Component', 'Regression', 'Other functional', 'Other non-functional'],
            datasets: [
                {
                    data: [30, 30, 10, 10, 10],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
                }]
            };

        this.dataOperatingSystem = {
            labels: ['Linux-based', 'Windows-based'],
            datasets: [
                {
                    data: [75, 25],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
                }]
            };


        this.dataVersionControl = {
            labels: ['Git-based', 'Perforce', 'Others'],
            datasets: [
                {
                    data: [70, 20, 10],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
                }]
            };

        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
                }]
            };
    }


    getLanguages() {
        return this.dataLanguages;
    }

    getSectors() {
        return this.dataSectors;
    }

    getDevelopment() {
        return this.dataDevelopment;
    }

    getMethodologies() {
        return this.dataMethodologies;
    }

    getDatabases() {
        return this.dataDatabases;
    }

    getTesting() {
        return this.dataTesting;
    }

    getOperatingSystem() {
        return this.dataOperatingSystem;
    }

    getVersionControl() {
        return this.dataVersionControl;
    }

    getRandomData() {
        return this.data;
    }
}