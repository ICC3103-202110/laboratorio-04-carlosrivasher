function view(counter){
    return (`Count: ${counter}\n
    (+) (-)\n
    (q)  for quit \n`)
};

function update(msg, counter){
    if(msg=='+'){
        return counter + 1
    }
    if(msg=='-'){
        return counter - 1
    }
    else{
        return counter
    }
};

function app(counter){
    while(true){
        const currentView = view(counter);
        console.clear();
        console.log(currentView);
        const msg = userInput
        counter = update(msg, counter); 
    }
};

app(0)