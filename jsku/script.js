let doc = document.querySelector('#papan')
let geter = document.querySelectorAll('.card-text')
function no1(){
    doc.innerHTML = geter[0].childNodes[0].nodeValue + "\n";
    const input = prompt("Input deret angka (Dipisahkan dengan spasi)= ").split(" ").map((element) => parseInt(element));;
    doc.innerHTML += "N = "
    let sum = 0
    let count = input.length
    for(let i = 0; i < input.length; i++){
        sum += input[i];
    }
    let average = sum/count

    doc.innerHTML+=`${input.join(" + ")}\n`;
    doc.innerHTML+=`Total: ${sum}\n`;
    doc.innerHTML+=`Rata-rata: ${average}`;
}

function no2(){
    doc.innerHTML = geter[1].childNodes[0].nodeValue + "\n";
    let I = 1;
    let N = parseInt(prompt("Masukkan nilai N = "));
    while(I<N){
        if(I%2==0){
            doc.innerHTML +=(I+" Angka Genap\n")
        }
        else{
            doc.innerHTML += (I+" Angka Ganjil\n")
        }
        I+=1;
    }
}

function no3(){
    doc.innerHTML = geter[2].childNodes[0].nodeValue + "\n";
    let I = 1;
    let SUM = 0;
    let N = parseInt(prompt("Masukkan nilai N = "));
    doc.innerHTML += ("N = "+N)
    while (I<=N){
        SUM = SUM + I;
        I += 1;    
    }
    doc.innerHTML += ("\nSUM DERET = "+ SUM);
}

function no4(){
    doc.innerHTML = geter[3].childNodes[0].nodeValue + "\n";
    let I = 1;
    let SUM = 0;
    let TERM = 1;
    let N = parseInt(prompt("Masukkan nilai N = "));
    let X = parseInt(prompt("Masukkan nilai X = "));
    doc.innerHTML += ("N = "+N)
    doc.innerHTML += ("\nX = "+X)

    for(let i=0;i<N;i++){
        TERM = -TERM*X
        SUM += TERM
    }
    
    doc.innerHTML += ("\nSUM DERET = "+SUM);
}

function no5(){
    doc.innerHTML = geter[4].childNodes[0].nodeValue + "\n";
    let NUM = parseInt(prompt("Masukkan nilai N = "));
    doc.innerHTML += ("NUM = "+NUM)
    for(let i=1;i<=10;i++){
        let PROD = NUM*i
        doc.innerHTML += ("\n"+i+" X "+NUM+" = "+PROD)
    }
}

function no6(){
    doc.innerHTML = geter[5].childNodes[0].nodeValue + "\n";
    let A = 0;
    let B = 1;
    let N = parseInt(prompt("Masukkan nilai N = "));
    doc.innerHTML += (A+", "+B)
    for(let COUNT=2;COUNT<=N;COUNT++){
        let NEXT = A + B;
        doc.innerHTML += (", "+NEXT)
        A = B;
        B = NEXT;
    }
}

function no7(){
    doc.innerHTML = geter[6].childNodes[0].nodeValue + "\n";
    let NUM = parseInt(prompt("Masukkan sebuah angka = "));
    let R = Math.sqrt(NUM)
    doc.innerHTML += (prima(NUM, R))

    function prima(NUM, R){
        for(let i=2; i<R; i++){
            if(NUM%i==0){
                return(NUM+" Bukan Bilangan Prima\n")
                
            }
        }
        return(NUM+" Bilangan Prima\n")
    }
}

function no8(){
    doc.innerHTML = geter[8].childNodes[0].nodeValue + "\n";
    let FACT = 1;
    let N = parseInt(prompt("Masukkan nilai N = "));
    for(let CTRL = 1; CTRL<n; CTRL++){
        FACT *= CTRL;
        CTRL += 1;
    }
    doc.innerHTML += (FACT);
}