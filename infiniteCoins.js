const prompt=require("prompt-sync")({sigint:true});  

const value = parseInt(prompt()); 
const output = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

makeChange(value);

function makeChange(value){
    output[0][3] = value;

    calc10(value);   
    console.log(output); 

}

function calc10(value){
    if(value>=10){
        const result = parseInt(value / 10);
        const val = value%10;
        output[1][1] = result;
        console.log("passei 10", val);
        if(val>=10){
            
            calc10(val);
        }else{
            console.log("top aqui");
            calc5(val)
        }
    }
}

function calc5(value){
    console.log(value);
    
    if(value>=5){
        console.log("passei 5");
        const result = parseInt(value / 5);
        const value = value%5;
        output[1][2] = result;

        if(value>=5){
            calc5(value);
        }

    }else{
        if(value>0){
            console.log("passei cents");
            output[1][3] = value;
        }
    }
    
}

