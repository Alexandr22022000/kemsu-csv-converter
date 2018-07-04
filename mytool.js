const bigData = [];

process.stdin.resume();

process.stdin.pipe(require('split')()).on('data', (data) => {
    if (data === "STOP") {
        const cases = [];
        for (let key in bigData) {
            let newCase = true;
            for (let keyC in cases) {
                if (cases[keyC].name === bigData[key]) {
                    newCase = false;
                    cases[keyC].count++;
                    break;
                }
            }

            if (newCase) {
                cases.push({name: bigData[key], count: 1});
            }
        }

        console.log("\n\n");

        for (let key in cases) {
            console.log(cases[key].count + " - " + cases[key].name);
        }
    }

    bigData.push(data);
});