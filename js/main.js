const pathOfCSVFile = "../data/stockdata.csv";

d3
    .csv(pathOfCSVFile, d => {
        return {
            date: d["Date"],
            high: d["High"],
            low: d["Low"],
            closing: d["Closing"],
            valueTraded: d["Value Traded"],
            noOfTrans: d["No. of Trans"],
            noOfShares: d["No. of Shares"]
        };
    })
    .then(data => {
        CreateLineChart(data);
    });

const svg = d3.select(".fins-diagram-container")
    .append("svg")
        .attr("viewBox", "0 0 600 700")
        .style("border", "1px solid black");

const CreateLineChart = (data) => {
    let yearsOfTrading = getYearsOfTrading(data);
}

const getYearsOfTrading = (data) => {
    let years   = [];

    const dateParse  = d3.timeParse("%d/%m/%Y");
    const dateFormat = d3.timeFormat("%Y");

    for (let obj of data) {
        const yearsOfTrading = dateFormat(dateParse(obj.date));
        if(years.indexOf(yearsOfTrading) === -1) {
            years.push(yearsOfTrading);
        }
    }

    return years;
}
