d3
    .csv("../data/stockdata.csv", d => {
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
    // your diagram
}
