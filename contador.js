const prompt = require('prompt-sync')({sigint: true});
const view = counter => {
    return `    Count: ${counter}\n
    (+) (-)\n
    (q) for quit \n`;
};

const update = (msg, counter) => {
    if (msg==='+') {
        return counter + 1;
    }
    if (msg==='-') {
        return counter - 1;
    }
    if (msg==='q') {
        process.exit();
    }
    else{
        return counter;
    }
};

const app = counter => {
    while(true){
        const currentView = view(counter);
        console.clear();
        console.log(currentView);
        const msg = prompt('What would you do? ');
        counter = update(msg, counter); 
    }
}

app(0)