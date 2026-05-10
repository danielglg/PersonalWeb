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
                    data: [55, 15, 20, 10],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
              }]
          };

        this.dataSectors = {
          labels: ['Video', 'Networks', 'Payments', 'Others'],
          datasets: [
              {
                    data: [35.46, 7.38, 46.77, 10.38],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
              }]
          };

        this.dataDevelopment = {
          labels: ['Backend', 'Frontend', 'Devops', 'Signal/data processing', 'Embedded'],
          datasets: [
              {
                    data: [66, 10, 10, 7, 7],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
              }]
          };

        this.dataMethodologies = {
            labels: ['SaFe', 'Scrum', 'Kanban', 'Other Agile', 'Traditional'],
            datasets: [
                {
                    data: [35, 50, 5, 5, 5],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
                }]
            };

        this.dataDatabases = {
            labels: ['SQL (Oracle)', 'SQL (Other)', 'No-SQL (MongoDB)', 'No-SQL (Other)', 'Other'],
            datasets: [
                {
                    data: [75, 10, 10, 3, 2],
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
                    data: [80, 20],
                    backgroundColor: backgroundColorList,
                    hoverBackgroundColor: backgroundHoverColorList
                }]
            };


        this.dataVersionControl = {
            labels: ['Git-based', 'Perforce', 'Others'],
            datasets: [
                {
                    data: [80, 15, 5],
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