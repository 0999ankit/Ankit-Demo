export class Patient
{
    private patientId:number;
    private name:string;
    private medicalCondition:string;

    constructor(patientId:number,name:string,medicalCondition:string)
    {
        this.patientId=patientId;
        this.name=name;
        this.medicalCondition=medicalCondition;
    }

    displayDetails():void
    {
        console.log(`Patient Id:${this.patientId},Name:${this.name},Medical Condition:${this.medicalCondition}`);
    }
    hasCondition(condition:string):boolean
    {
        return this.medicalCondition.toLowerCase()===condition.toLowerCase();
    }
}
const samplePatient =new Patient(101,"john doe","Asthama");
samplePatient.displayDetails();
if(samplePatient.hasCondition("Asthama"))
{
    console.log("Patient has Asthama");
}
else
{
    console.log("Patient has no Asthama");
}