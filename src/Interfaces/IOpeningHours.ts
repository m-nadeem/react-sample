import { IPeriodList } from "./IperiodList";

export interface IOpeningHours{
    mon: IPeriodList;
    tue: IPeriodList;
    wed: IPeriodList;
    thu: IPeriodList;
    fri: IPeriodList;
    sat: IPeriodList;
    sun: IPeriodList;
}
