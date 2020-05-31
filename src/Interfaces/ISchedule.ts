import { IDay } from "./IDay";

export interface ISchedule{
    id: string,
    day: IDay;
    from: string,
    to: string;
    isOpen: boolean;
}