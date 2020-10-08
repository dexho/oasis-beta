const filePaths = [
    "selfcare",
    "information",
    "covid-19-cases"
];
var county = "Suffolk";
var state = "Massachusetts";

filePaths.forEach(fileName => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            var output = "";
            response = this.responseText.split("\n");
            if (fileName === "selfcare" || fileName === "information") {
                var len, loc;
                if (fileName === "selfcare") {
                    len = 8;
                    loc = 4;
                    output += "<h3 class='bold'>For You</h3>";
                } else { // information
                    len = 9;
                    loc = 5;
                    output += "<h3 class='bold'>Updates</h3>";
                }
                response = response.slice(1, loc - 1);
                response.forEach(res => {
                    res = res.split(",").slice(loc - 1);
                    res = res.slice(0, res.length - len + loc + 1).join(",");
                    var count = (res.match(/"/g) || []).length;
                    if (count >= 4) {
                        res = res.split('","')[1];
                        res = res.substring(0, res.length - 1);
                        output += res;
                    } else if (count >= 2) {
                        if (res.includes('",')) output = res.split('",')[1];
                        else {
                            res = res.split(',"')[1];
                            res = res.substring(0, res.length - 1);
                            output += res;
                        }
                    } else {
                        output += res.split(',')[1];
                    }
                    output += "<br><br>";
                });
                output += "<div class='border'></div>";
            } else if (fileName === "covid-19-cases") {
                output += "<h3 class='bold'>Numbers</h3>";
                var countyCount = 0, stateCount = 0;
                var totalIndex = 4, recentIndex = 5;
                for (var res of response) {
                    res = res.split(",");
                    if (res[2] === state) {
                        stateCount += parseInt(res[recentIndex], 10);
                        if (res[1] === county) countyCount += parseInt(res[totalIndex], 10);
                    }
                }
                output += "<ul class='plusBullets'>";
                output += `<li>${stateCount} cases in ${state} yesterday</li>`;
                output += `<li>${countyCount} cases in ${county} total</li>`;
                output += "</ul>";
            }
            document.getElementById("information-text").innerHTML += output;
        }
    };
    xhttp.open("GET", `data/${fileName}.csv`, true);
    xhttp.send();
});