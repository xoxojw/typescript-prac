"use strict";
const assignGrade = (average) => {
    if (average >= 90) {
        return 'A';
    }
    else if (average >= 80) {
        return 'B';
    }
    else if (average >= 70) {
        return 'C';
    }
    else if (average >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
};
const calculateAverage = (student) => {
    const sum = student.scores.korean +
        student.scores.math +
        student.scores.society +
        student.scores.science +
        student.scores.english;
    const average = sum / Object.keys(student.scores).length;
    return average;
};
const createStudent = (name, age, korean, math, society, science, english) => {
    return {
        name,
        age,
        scores: {
            korean,
            math,
            society,
            science,
            english,
        }
    };
};
const printResult = (student) => {
    const average = calculateAverage(student);
    const grade = assignGrade(average);
    console.log(`${student.name} (${student.age}세) - 평균: ${average.toFixed(2)}, 학점: ${grade}`);
};
const main = () => {
    const spartan = createStudent('Spartan', 30, 95, 89, 76, 90, 97);
    printResult(spartan);
};
main();
