import moment from 'moment';

export class AppModel {
    public adminContact: string;
    public adminName: string;
    public isDamage: boolean;
    public dustbinStatus: string;
    public installationDate: string;
    public sensorStatus:string;
    public type: string;
    public lastUpdatedDate: string;
    public uId: string
    public location: string

    constructor(data: DataAppModelInterface){
        this.adminContact = data.AdminContact;
        this.adminName = data.AdminName
        this.isDamage = data.IsDamage;
        this.dustbinStatus = this.getDustbinStatus(data.DustbinStatus)
        this.installationDate = moment(data.InstallationDate).format('DD.MM.YYYY')
        this.sensorStatus = this.getSensorStatus(data.SensorStatus)
        this.type = data.Type.toString() === 'D' ? 'Dry dustbin' : 'Wet dustbin'
        this.lastUpdatedDate = moment(data.LastUpdatedDate).format('DD.MM.YYYY')
        this.uId = data.Uid;
        this.location = data.Location;
    }

    private getDustbinStatus(data : DUSTBIN_STATUS): string {
        if(data ===  DUSTBIN_STATUS.FULL){
            return 'Full'
        }else if (data ===  DUSTBIN_STATUS.EMPTY){
            return 'Empty'
        }else {
            return 'Half'
        }
    }

    private getSensorStatus(data : SENSOR_WORKING_STATUS): string {
        console.log(data)
        if(data ===  SENSOR_WORKING_STATUS.NOT_WORKING){
            return 'Not working'
        }else if (data ===  SENSOR_WORKING_STATUS.WORKING){
            return 'Working'
        }else {
            return ''
        }
    }

}

export interface DataAppModelInterface {
     AdminContact: string;
     AdminName: string;
     IsDamage: boolean;
     DustbinStatus: DUSTBIN_STATUS;
     InstallationDate: moment.Moment;
     SensorStatus:SENSOR_WORKING_STATUS;
     Type: DUSTBIN_TYPE;
     LastUpdatedDate: moment.Moment;
     Uid: string;
     Location: string
}
export interface BackendDataAppModel {
    data: DataAppModelInterface[]
}

export enum DUSTBIN_STATUS {
    FULL ,
    HALF,
    EMPTY
}

export enum SENSOR_WORKING_STATUS {
    'WORKING',
    'NOT_WORKING',
}

export enum DUSTBIN_TYPE {
    'W' ,
    'D'
}
