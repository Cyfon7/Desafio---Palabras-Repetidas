//Get the textContent of "texto-entrada"
var p_text = document.querySelector("#texto-entrada").textContent.toLowerCase();

function countLetter(a_lot_of_text){
    var letters = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    };

    //Checks every letter of the text
    for(var i=0; i < a_lot_of_text.length; i++){
        letters[ a_lot_of_text[i] ]++;
    };

    return letters;
}

//Generates the html element to render the info
function createListData(div, data_1 = "Letra: ", data_2 = "Cantidad"){
    var p_result = document.createElement("p");
    var st_result = document.createElement("strong");
    var sp_result = document.createElement("span");
    
    st_text = document.createTextNode(data_1);
    sp_text = document.createTextNode(data_2);
    
    st_result.appendChild(st_text);
    sp_result.appendChild(sp_text);
    
    p_result.appendChild(st_result);
    p_result.appendChild(sp_result);
    
    div.appendChild(p_result);
};


var div_result = document.querySelector("#resultados");
var list_of_letters = countLetter(p_text);

keys = Object.keys(list_of_letters);
values = Object.values(list_of_letters);

createListData(div_result);
i = 0;
while(i < values.length) {
    if ( !isNaN( values[i] ) ){
        createListData(div_result, (keys[i] + ": "), values[i]);
    };
    i++;
};


