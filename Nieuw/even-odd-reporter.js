/* 1. Even Odd Reporter
Schrijf een loop die "iterate" van 0 tot 20. 
Voor elke loop, check of het huidige nummer even is of oneven (odd).
Console.log het nummer.

Tip: gebruik de modulo functionaliteit.

Resultaat in de console:
1 is oneven 
2 is even 
3 is oneven 
4 is even 
etc....  */

/* for (num = 0; num < 20; num++) {
    console.log("Counting to 20");
    
}
document.write("Klaar met tellen") */

for (i = 1; i <= 20; i++) {
    if ( i % 2 === 0){
        console.log( i + " is een even getal");
    }else {
        console.log(i + " is een oneven getal");
    }
    
}
document.write("Loop is klaar");