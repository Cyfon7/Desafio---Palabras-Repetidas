function countLetter(a_lot_of_text){

    //Only Letters
    var regex = /([a-zA-Z])/;

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
        if ( regex.test(a_lot_of_text[i]) ){
            letters[ a_lot_of_text[i] ]++;
        }
    };
    return letters;
}

function countWords(a_lot_of_text){

    //non-characters
    var regex = /\W/;

    //Split by all non-characters and clean the result leaving only words
    var words = a_lot_of_text.split(regex).filter(word => word!='');

    var list_words = {}

    for (var i=0; i < words.length; i++){
        if ( isNaN( list_words[ words[i] ] ) ){
            list_words[words[i]] = 1;
        }
        else{
            list_words[words[i]]++;
        }
    };
    return list_words;
    
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

function listGenerator(the_element, text, option = false){

    if (option){
        list_of_text = countLetter(text);
    }
    else{
        list_of_text = countWords(text);
    };

    keys = Object.keys(list_of_text);
    values = Object.values(list_of_text);
    
    if (option){
        createListData(the_element);
    }
    else{
        createListData(the_element, "Palabra: ");
    };

    i = 0;
    while(i < keys.length) {
        createListData(the_element, (keys[i] + ": "), values[i]);
        i++;
    };
};


//Get the textContent of "texto-entrada"
var p_text = document.querySelector("#texto-entrada").textContent.toLowerCase();

var div_result = document.querySelector("#resultados");

//Part I
listGenerator(div_result, p_text, true);

//Part II
listGenerator(div_result, p_text);