import { IWeekday } from "./IWeekday";
import { IOpeningHours } from "./IOpeningHours";
import { ISchedule } from "./ISchedule";

export interface IClinic {
    id: string;
    name: string;
    timezone: string;
    openingHours: ISchedule;
    estimatedWaitingTimeInMinutes: number;
    isOpen: boolean;
    isFull: boolean;
    delay: number;
    priority: number;
    nextAvailableVideo: number;
    nextAvailableConsultation: number;
}