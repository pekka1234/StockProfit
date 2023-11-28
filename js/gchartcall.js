// Chart Drawing

// This shall never be touched
function drawChart() {
// create data object with default value
    for(var i = 0; i < 9; i++){
            var da = google.visualization.arrayToDataTable([
            ['Time', names[i]],
            [0,0],
        ]);
        data.push(da);
    }
    
    // create options object with titles, colors, etc.
    let options = {
        title: "Stock price",
        hAxis: {
        textPosition: 'none',
        },
        vAxis: {
        title: "Value"
        }
    };


    // draw chart on load
    let chart = new google.visualization.LineChart(
        document.getElementById("chart_div0")
    );
    chart.draw(data, options);
    // interval for adding new data every 250ms
    let index = 0;
    setInterval(function () {
    // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
    for(var t = 0; t < 9; t++){
        data[t].addRow([index, stockvalues[t]]);
    }
    chart.draw(data[cur], options);
    index++;
    // also doing buyng screen stuff becouse this is run so often
    document.getElementById("bp").innerHTML = "Price per stock: " + numberWithSpaces(stockvalues[cur]) + "$";
    document.getElementById("cp").innerHTML = "Current price: " + numberWithSpaces((eval(document.getElementById("inbuy").value) * stockvalues[cur]).toFixed(2)) + "$";
    document.getElementById("sp").innerHTML = "Value per stock: " + stockvalues[cur] + "$";
    document.getElementById("ssp").innerHTML = "Current gain: " + numberWithSpaces((eval(document.getElementById("insell").value) * stockvalues[cur]).toFixed(2)) + "$";

    // wealth
    var tem = 0;
    for(var hh = 0; hh < 9; hh++){
        tem += stockvalues[hh] * stockowns[hh];
    }
    document.getElementById("wel").innerHTML = "Wealth: " + numberWithSpaces((money + tem).toFixed(2)) + "$";
    pwalth = money + tem;
    }, 100);
}


google.charts.load("current", {
    packages: ["corechart", "line"]
});
google.charts.setOnLoadCallback(drawChart);