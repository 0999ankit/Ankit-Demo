"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(patientId, name, medicalCondition) {
        this.patientId = patientId;
        this.name = name;
        this.medicalCondition = medicalCondition;
    }
    Patient.prototype.displayDetails = function () {
        console.log("Patient Id:".concat(this.patientId, ",Name:").concat(this.name, ",Medical Condition:").concat(this.medicalCondition));
    };
    Patient.prototype.hasCondition = function (condition) {
        return this.medicalCondition.toLowerCase() === condition.toLowerCase();
    };
    return Patient;
}());
exports.Patient = Patient;
var samplePatient = new Patient(101, "john doe", "Asthama");
samplePatient.displayDetails();
if (samplePatient.hasCondition("Asthama")) {
    console.log("Patient has Asthama");
}
else {
    console.log("Patient has no Asthama");
}
