export interface EventDetail{
    eventName:string,
    eventLocation:{
        beneficiaryName:string,
        city:string
    }
    eventStartDate:Date,
    eventEndDate:Date,
    eventStartTime:Date,
    eventEndTime:Date
}