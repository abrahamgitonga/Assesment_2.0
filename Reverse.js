// reverse 
let S = 'hello'
function revVowels(str) {
    
    let X = str.split('');
    let Y= [];
    let vowels = 'aeiou';
    for (let i = 0; i < X.length; i++) {
        
        if(vowels.includes(X[i].toLowerCase())){
            Y.push(i);
        }   
        
    }

    [X[Y[0]],X[Y[1]]] = [X[Y[1]],X[Y[0]]];
    return X.join('');
}   

console.log(revVowels(S));