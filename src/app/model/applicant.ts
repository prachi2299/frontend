import {AdmissionStatus} from '../model/admissionStatus'
export class Applicant{
    constructor(){}
    public applicantId:string;
    public applicantName:string;
    public mobileNumber:string;
    public applicantDegree:string;
    public applicantGraduationPercent:number;
    public status:AdmissionStatus.Pending;

}