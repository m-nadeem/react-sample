import { IWeekday } from "./IWeekday";
import { IOpeningHours } from "./IOpeningHours";

export interface IClinic {
    id: string;
    name: string;
    timezone: string;
    openingHours: IOpeningHours;
    estimatedWaitingTimeInMinutes: number;
    isOpen: boolean;
    isFull: boolean;
    delay: number;
    priority: number;
    nextAvailableVideo: number;
    nextAvailableConsultation: number;
}