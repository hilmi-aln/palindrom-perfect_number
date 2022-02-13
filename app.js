let minNum = document.getElementById("minimum");
let maxNum = document.getElementById("maksimum");
let palindromButton = document.querySelectorAll("button")[0];
let perfectButton = document.querySelectorAll("button")[1];
let resultpalin = document.getElementById("palindrom");
let resultperfect = document.getElementById("perfect");

function reverseString(str) {
    return str.split("").reverse().join("");
}

palindromButton.addEventListener("click", () => {
    var ans = [];
    for (let i = minNum.value; i < maxNum.value; i++){
        ans.push(i);
    }
    console.log(ans);
    for (let k = 0; k < ans.length; k++){
        if (String(ans[k]) == reverseString(String(ans[k]))){
            resultpalin.value += (String(ans[k])+"\n");
        }
    }  
});
perfectButton.addEventListener("click", () => {
    var emptyList = [];
    for (let p = minNum.value; p < maxNum.value; p++) {
        emptyList.push(p);
    }

    for (let z = 0; z < emptyList.length; z++) {
        let myListSum = [];
        let sum = 0;
        for (let index = 0; index < emptyList[z]; index++) {
            if (emptyList[z] % index == 0) {
                myListSum.push(index);
            };
        }
        for (let index = 0; index < myListSum.length; index++) {
            sum += myListSum[index];
            if (sum == emptyList[z]) {
                resultperfect.value += String(emptyList[z]) + "\n";
            }
        }
        
    }
})


