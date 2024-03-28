function calculateAverage(scores) {
    let totalScore = 0;
    let subjectCount = 0;

    for (let score of Object.values(scores)) {
        totalScore += score;
        subjectCount++;
    }

    const averageScore = totalScore / subjectCount;
    return averageScore;
}

const students = [
    { name: "Alice", scores: { math: 90, science: 85, history: 88 } },
    { name: "Bob", scores: { math: 80, science: 75, history: 78 } },
    { name: "Charlie", scores: { math: 95, science: 92, history: 90 } }
];

for (let student of students) {
    const averageScore = calculateAverage(student.scores);
    const roundedAverage = Math.round(averageScore);
    console.log(`${student.name} - ${roundedAverage}`);
}
