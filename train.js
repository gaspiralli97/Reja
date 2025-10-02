//MITTASK D

function comparedContent (x,y) {
     if(x.length !== y.length) 
        return false;
    return x.split("").sort().join("")=== y.split("").sort().join("");

}

console.log(comparedContent("hello","olleh"));


 
 //MITTASK C
 /*const moment = require('moment');
 moment().format("HH:mm");

 class Shop {
    constructor(bread,noodle,cola) {
        this.bread=bread;
        this.noodle=noodle;
        this.cola=cola;
    }

    

    qoldiq() {
        console.log(`Hozir ${moment().format("HH:mm")} da ${this.bread} ta bread, ${this.noodle} ta noodle va ${this.cola} ta cola bor`);
       
    }

    sotish(mahsulot, soni) {                                                // qisman chatgptdan foydalandim sotish qismida
        if(this[mahsulot] >=soni){ 
            this[mahsulot] -=soni;
            console.log(`${soni} ta ${mahsulot} sotildi`);
        } else{
            console.log(`${nahsulot} yetarli emas`);
        }

    }

    qabul(mahsulot,soni) {
        this[mahsulot] += soni;
        console.log(`${soni} ta ${mahsulot} qabul qilindi`)
    }

 }

 const shop = new Shop(8,6,1);
 shop.qoldiq();
 shop.sotish("bread", 3);
 shop.qabul("cola",2)
 shop.qoldiq();
 */


 



// task B

/* function countDigits(x) {
    let raqam =x.toString();
    let count =0;

    for(let i =0; i <raqam.length; i++) {
        if(raqam[i] >="0" && raqam[i]<="9") {
            count++;
        } else if ("") {
            console.log("raqam mavjud emas");
        }
    }
    return count;
}

const result = countDigits("dgf545687");

console.log("result:",result);
console */
/*TASK-A


function countLetter(x, y) {
    let count = 0;
    
    for(let i=0; i <x.length; i++) {
        if (x[i] ===y) {
            count=count+1;
        }
        
         
    }
    return count;
}

const answer =countLetter("mamaqaldirog","m");
console.log("answer:", answer); */














/*console.log("Jack Ma maslahatlari");

const list=[
    "yaxshi talaba buling", //0-20
    "togri boss tanlang va koproq xato qiling", //20-30
    "uzingizga ishlashingizni boshlang", //30-40
    "siz kuchli bulgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling , foydasi yuq", //60..
];  */

/* function maslahatBering (a, callback) {
    if (typeof a !=="number") callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a>20 && a<=30) callback(null, list[1]);
    else if (a>30 && a<=40) callback(null, list[2]);
    else if (a>40 && a<=50) callback(null, list[3]);
    else if (a>50 && a<=60) callback(null, list[4]);
    else {
        callback(null, list[5]);
    }
}

maslahatBering (45, (err, data) =>{
    if(err) console.log(`ERROR:`,err);
    console.log("javob:", data);
}) */

 /*async function maslahatBering (a) {
    if (typeof a !=="number") throw new Error("insert a number");
    else if (a <= 20) callback(null, list[0]);
    else if (a>20 && a<=30) return list[1];
    else if (a>30 && a<=40) return list[2];
    else if (a>40 && a<=50) return list[3];
    else if (a>50 && a<=60) return list[4];
    else {
       return list[5];
       // setTimeout (function () {
      //     return list[5];
     // },4000);
    }
}  */

//then/catch
/*console.log("passed here 0");

maslahatBering(25)
.then((data) => {
    console.log("javob:", data);
})
.catch((err) =>{
    console.log("error:",err);
});

console.log("passed here 1");  */

//async/await

/*async function run() {
    let javob=await maslahatBering(29);
    console.log(javob);
     javob=await maslahatBering(36);
    console.log(javob);
    javob=await maslahatBering(56);
    console.log(javob);
}

run();  */


