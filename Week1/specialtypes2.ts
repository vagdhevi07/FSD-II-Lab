let patientRecord: any = "Vasu";
console.log("Patient Name:", patientRecord);
patientRecord = 39;
console.log("Patient Age:", patientRecord);
let bloodGroup: unknown = "a+";
if (typeof bloodGroup === "string") {
    console.log("Blood Group:", bloodGroup);
}
function hospitalReport(): void {
    console.log("Hospital report generated.");
}
hospitalReport();