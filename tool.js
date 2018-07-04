const fs = require('fs'),
    path = require('path');

fs.readFile(path.resolve("src.csv"), "utf8", (error, data) => {
    let i = 0, n;

    while ((n = data.indexOf("\n", i)) !== -1) {
        if (data.substring(n + 1, n + 5) !== "2018") {
            data = data.substring(0, n) + data.substring(n + 1, data.length);
            console.log(data.substring(n - 1, n + 1));
        }
        else {
            i = n + 1;
        }
    }

    i = 0;

    while ((n = data.indexOf("\n", i)) !== -1) {
        if (data.substring(n + 1, n + 5) !== "2018") {
            data = data.substring(0, n) + data.substring(n + 1, data.length);
            console.log(data.substring(n - 1, n + 1));
        }
        else {
            i = n + 1;
        }
    }

    fs.writeFile(path.resolve("dust.csv"), data, (error) => {
        console.log(error);
    });
});