let userInput = document.getElementById("date");
userInputmax = new Date().toISOString().split("T")[0];
let result =document.getElementById("result")
function AgeCalculator(){
    let BirthDate = new Date(userInput.value);
    let d1 = BirthDate.getDate();
    let m1 = BirthDate.getMonth() + 1;
    let y1 = BirthDate.getFullYear();
    let Today = new Date();
    let d2 = Today.getDate();
    let m2 = Today.getMonth() + 1;
    let y2 = Today.getFullYear();
    let d3 , m3 , y3;
    y3 = y2 - y1;
    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1 ;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1 , m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11 ;
        y3--;
    }
    result.innerHTML = `You Are ${y3}Years , ${m3} Months and ${d3} Days Old`
}
function getDaysInMonth(year , month){
    return new Date(year, month , 0).getDate();
}