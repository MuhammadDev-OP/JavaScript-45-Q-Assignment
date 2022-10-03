function cars(make, model, ...args){
    const obj = {
    make : make,
    model : model,
    color : args[0],
    headlights : args[1]
    }
    for(let i=0; i < args.length; ++i){
        obj[i] = args;
    }
    return obj;
}
result = cars('Toyota','Corolla',color = 'yellow',headlights = 'True' );
console.log(result);
