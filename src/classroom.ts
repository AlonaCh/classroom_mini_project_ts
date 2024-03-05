//`getNumberOfGrades` should return the number of grades
export function getNumberOfGrades(grades: number[]): number{
    return grades.length;
}

//`getSumGrades` should return the sum of all the grades
export function getSumGrades(grades: number[]): number {
    let sum = 0;
    for (let i = 0; i < grades.length; i++){
        sum +=grades[i];
    }
    return sum;
}
//`getAverageValue` should return the average value of all grades (the sum of all grades divided by the total number of grades).
export function getAverageValue(grades: number[]): number {
    let sum = 0;
    for (let i =0; i < grades.length; i++){
        sum += grades[i];
    }
    const avarage = sum / grades.length;
    return avarage;
}
//`getPassingGrades` should return all passing grades (10 and above).
export function getPassingGrades(grades: number[]): string {
   const passingGrades = grades.filter(grade => grade >= 10);
   return passingGrades.join(", ");
}

//`getFailingGrades` should return all failing grades (9 and below).
export function getFailingGrades(grades: number[]): string {
    const failingGrades = grades.filter(grade => grade <= 9);
    return failingGrades.join(", ");
}
//`getRaisedGrades` should return all the grades raised by 1 (grades should not exceed 20).
export function getRaisedGrades(grades: number[]): string {
    const raisedGrades = grades.map(grade => {
        if (grade < 20){
            return grade + 1;
        }
        return grades;
    })
    return raisedGrades.join(", ");
}