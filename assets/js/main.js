console.log("%c Level 1-1", "color: tomato; background-color: black");
for (let i = 1; i < 11; i++) {
    console.log("Hallo World" , i);;
    
}

console.log("%c Level 1-2", "color: tomato; background-color: black");
const numArr= [];
for (let i = 0; i < 11; i++) {
    numArr.push(i);
    console.log(`${i}: ${i}`);
    
}
console.log("%c Level 1-4", "color: tomato; background-color: black");
const nums= ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim" , "Sergio"];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    
}
console.log("%c Level 2-1", "color: tomato; background-color: black");

const imageArray = () => {
    const returnArray = [];
    for (let i = 0; i <= 100; i++) {
        if (i<10){
            returnArray.push(`image_00${i}.jpg`);
        } else if ( i<100 && i >=10 ){
            returnArray.push(`image_0${i}.jpg`);
        }
        else if ( i== 100){
            returnArray.push(`image_${i}.jpg`);
        }
    } 
    return returnArray;
}
console.log(imageArray());

//########## Loops-Level-2_2 #######
console.log("%c Level 2-2", "color: tomato; background-color: black");
const toRepeat = () =>{
    const inputTxt= Number(document.querySelector("#inputFeld").value);
    const output= document.querySelector("#result");
    let txtLoop= "";
    for (let i = 0; i < inputTxt; i++){
        txtLoop+="o";
    }
    output.innerHTML= `L${txtLoop}p`;
}

//########## Loops-Level-3_2 #######
console.log("%c Level 2-2", "color: tomato; background-color: black");
let numArr2 = [5, 22, 15, 100, 55];
for (let i = 0; i < numArr2.length; i++) {
    for (let j = 2; j < numArr2[i]; j++) {
        if ((numArr2[i] % j == 0) ){
            console.log(`${numArr2[i]} is devidable by ${j}. The result is: ${numArr2[i]/j}`);
        }
    }
    console.log("");
}
//########## Loops-Level-3_2 #######
console.log("%c Level 2-2", "color: tomato; background-color: black");

const design = () =>{
    const inputTxt= Number(document.querySelector("#inputFeld").value);
    const output2= document.querySelector("#result2");
    let txtLoop= "";
    for (let i = 0; i < inputTxt; i++) {
        if ((i % 2 == 0) ){
            console.log(i);
            txtLoop+= "o";
            console.log(txtLoop);
        } else {
            txtLoop+= "0";
        }
        
    }
    output2.innerHTML= `L${txtLoop}p`;
}