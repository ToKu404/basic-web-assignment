let doc = document.querySelector('#papan')
function no1(){
    doc.innerHTML = ''
    const input = window.prompt("N = ").split(" ");
    doc.innerHTML += "N = "
    var sum = 0
    var count = input.length+1
    for(let i = 0; i < input.length; i++){
        doc.innerHTML += Number(input[i])
        if(i< input.length-1){
            doc.innerHTML += ", "
        }
        sum += Number(input[i])
    }
    var average = sum/count

    doc.innerHTML+="<p>SUM = "+sum
    doc.innerHTML+="<p>AVERAGE = "+average
}

function no2(){
    doc.innerHTML = ''
    var I = 1;
    var N = window.prompt("N = ")
    while(I<N){
        if(I%2==0){
            doc.innerHTML +=(I+" Genap"+"<p>")
        }
        else{
            doc.innerHTML += (I+" Ganjil"+"<p>")
        }
        I+=1;
    }
}

function no3(){
    doc.innerHTML = ''
    var I = 1;
    var SUM = 0;
    var N = window.prompt("Masukkan Nilai N :");
    doc.innerHTML += ("N = "+N)
    while (I<=N){
        SUM = SUM + I;
        I += 1;    
    }
    doc.innerHTML += ("SUM DERET = "+SUM);
}

function no4(){
    doc.innerHTML = ''
    var I = 1;
    var SUM = 0;
    var TERM = 1;
    var N = window.prompt("Masukkan Nilai N :");
    var X = window.prompt("Masukkan Nilai X :");
    doc.innerHTML += ("N = "+N)
    doc.innerHTML += ("<p>X = "+X)

    for(let i=0;i<N;i++){
        TERM = -TERM*X
        SUM += TERM
    }
    
    doc.innerHTML += ("<p>SUM DERET = "+SUM);
}

function no5(){
    doc.innerHTML = ''
    var I = 1
    var NUM = window.prompt("Masukkan Nilai NUM :");
    doc.innerHTML += ("NUM = "+NUM)
    for(let i=1;i<=10;i++){
        var PROD = NUM*i
        doc.innerHTML += ("<p>"+i+" X "+NUM+" = "+PROD)
    }
}

function no6(){
    doc.innerHTML = ''
    var A = 0;
    var B = 1;
    var N = window.prompt("N = ");
    doc.innerHTML += (A+", "+B)
    for(var COUNT=2;COUNT<=N;COUNT++){
        var NEXT = A + B;
        doc.innerHTML += (", "+NEXT)
        A = B;
        B = NEXT;
    }
}

function no7(){
    doc.innerHTML = ''
    var NUM = window.prompt("MASUKKAN NUM = ")
    var R = Math.sqrt(NUM)
    doc.innerHTML += (prima(NUM, R))

    function prima(NUM, R){
        for(let i=2; i<R; i++){
            if(NUM%i==0){
                return(NUM+" Bukan Bilangan Prima")
                
            }
        }
        return(NUM+" Bilangan Prima")
    }
}

function no8(){
    doc.innerHTML = ''
    var FACT = 1;
    var n = window.prompt("N : ")
    for(var CTRL = 1; CTRL<n; CTRL++){
        FACT *= CTRL;
        CTRL += 1;
    }
    doc.innerHTML += (FACT);
}