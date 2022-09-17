import _ from "lodash";

class Group {

    constructor(groupName, countries) {
        this.groupName = groupName;
        this.countries = countries;
    }

    toHTMLTable() {
        let table = document.createElement("table");
        table.setAttribute("id", "group-card");
        table.setAttribute("class", "table rounded container bg-light p-3");

        let thead = document.createElement("thead");
        let ths = [this.groupName, "MP", "W", "D", "L", "GF", "GA", "+/-", "PTS"];
        let tr = document.createElement("tr");
        for (let i in ths) {
            let th = document.createElement("th");
            th.innerHTML = ths[i];
            if (i == 0) {
                th.setAttribute("colspan", "2");
            }
            tr.appendChild(th);
        }
        thead.appendChild(tr);

        let tbody = document.createElement('tbody');
        for (let i in this.countries) {
            let tr = document.createElement("tr");
            tr.setAttribute("scope", "row");

            let index = document.createElement("td");
            index.innerHTML = parseInt(i) + 1;
            tr.appendChild(index);

            let country = document.createElement("td");
            country.setAttribute("scope", "col");
            country.innerHTML = this.countries[i];
            tr.appendChild(country);

            for (let i = 0; i <= 7; i++) {
                let td = document.createElement("td");
                td.setAttribute("scope", "col");
                td.innerHTML = 0;
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        table.appendChild(thead);
        table.appendChild(tbody);

        document.getElementById("groups").appendChild(table);
    }
}

let groupA = new Group("Grupo A", ["Qatar", "Ecuador", "Senegal", "Netherlands"]);
groupA.toHTMLTable();
let groupB = new Group("Grupo B", ["England", "IR Iran", "USA", "Wales"]);
groupB.toHTMLTable();
let groupC = new Group("Grupo C", ["Argentina", "Saudi Arabia", "Mexico", "Poland"]);
groupC.toHTMLTable();
let groupD = new Group("Grupo D", ["France", "Denmark", "Tunisia", "Australia"]);
groupD.toHTMLTable();
let groupE = new Group("Grupo E", ["Spain", "Germany", "Japan", "Costa Rica"]);
groupE.toHTMLTable();
let groupF = new Group("Grupo F", ["Belgium", "Canada", "Morocco", "Croatia"]);
groupF.toHTMLTable();
let groupG = new Group("Grupo G", ["Brazil", "Serbia", "Switzerland", "Cameroon"]);
groupG.toHTMLTable();
let groupH = new Group("Grupo H", ["Portugal", "Ghana", "Uruguay", "Korea Republic"]);
groupH.toHTMLTable();