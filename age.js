let press=document.querySelector(".line img")
let dayerror=document.querySelector(".day")
let montherror=document.querySelector(".month")
let yearerror=document.querySelector(".year")

let day_input=document.querySelector(".day input")
let month_input=document.querySelector(".month input")
let year_input=document.querySelector(".year input")
let day_span=document.querySelector(".day-p span")
let month_span=document.querySelector(".month-p span")
let year_span=document.querySelector(".year-p span")

// console.log(new Date("dec,31,2023 23:59:59").getTime())
// console.log(new Date().getDate())
// console.log(new Date().getDay())
// console.log(new Date().getMonth())
// console.log(new Date().getFullYear())
// console.log(new Date().getHours())
// console.log(new Date().getMinutes())
// console.log(new Date().getSeconds())
// let tomorrow=new Date("10,8,2023").getTime()
// let now=new Date().getTime()
// let nt=tomorrow-now
// console.log(now)
// console.log(tomorrow)
// console.log(nt/(1000*60*60*24)) count days
// console.log(nt%(1000*60*60)) count hours
// console.log(nt/(1000*60)) count minutes
// console.log(nt/(1000)) count seconds



// console.log(Math.floor(new Date("10,7,2023 13:13:13")-new Date().getTime()/(1000*60*60*24)))


press.addEventListener("click",()=>{
    let isvalid=true
    press.style.backgroundColor="black"
    if(day_input.value<=0||day_input.value>31){
        dayerror.classList.add("on")
        isvalid=false
        day_span.textContent="--"
        month_span.textContent="--"
        year_span.textContent= "--"
    }
    else{
        isvalid=true
        dayerror.classList.remove("on")
      
    }
        
        
    
    if(month_input.value<=0||month_input.value>12){
        montherror.classList.add("on")
        isvalid=false
    
    }
    else{
        isvalid=true
        montherror.classList.remove("on")
     
    }
    
    let nn=new Date()
    if(year_input.value<=0||year_input.value > nn.getFullYear()){
        yearerror.classList.add("on")
        isvalid=false
    
    }
    else{
        isvalid=true
        yearerror.classList.remove("on")

    }

    
    if(isvalid==true && day_input.value!="" && month_input.value!="" &&  year_input.value!=""){
        date=month_input.value +","+ day_input.value + ","+year_input.value
        let dd=new Date(date)
        let nn=new Date()
        let future=nn-dd
        let fd=new Date(future)
        let ageyears=fd.getFullYear()-1970
        let agemonth=fd.getMonth()
        let agedays=fd.getDate()
        
        day_span.textContent=agedays
        month_span.textContent=agemonth
        year_span.textContent= ageyears
    }
    else{
        day_span.textContent="--"
        month_span.textContent="--"
        year_span.textContent= "--"
    }


    // the instraction/
    // console.log("the inputs("+date+")")
    // console.log("The date your inputs("+dd+")")
    // console.log("The date now ("+nn+")")
    // console.log("The date now mins your inputs in mileseconds ("+future+")")
    // console.log("the date afte mins("+fd+")")
    // console.log("the year of after mins and -1970 ("+ageyears+")")
    // console.log("the month of after mins ("+agemonth+")")
    // console.log("the day of after mins ("+agedays+")")
    
})