function calculateGrade(score) {
    if (score > 100 || score < 0) {
        return "Invalid score";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
function checkAccess(age, hasTicket) {
    if (age >= 18 && hasTicket === true) {
        return true;
    } else { 
        return false;
    }
}

 
    

console.log(calculateGrade(90));  
console.log(calculateGrade(89));  
console.log(calculateGrade(0));   
console.log(calculateGrade(100)); 
console.log(calculateGrade(105));
console.log(checkAccess(20, true));   
console.log(checkAccess(15, true));   
console.log(checkAccess(22, false));  
console.log(checkAccess(17, false));  

