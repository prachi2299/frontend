import {AdmissionStatus} from '../model/admissionStatus'
export class Admission{
    constructor(){}
    private admissionId: number;
    private courseId: number;
    private applicantId:String;
    private admissionDate: Date;
    private status:AdmissionStatus;
}