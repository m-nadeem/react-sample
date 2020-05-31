import { ISchedule } from "../../Interfaces/ISchedule";
import { IDay } from "../../Interfaces/IDay";

export class MiscService {

    private dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    public DayIndex(fullName: string): number {
        return this.dayNames.indexOf(fullName);
    }

    public GetDay(shortDayName: string): IDay {
        switch (shortDayName) {
            case "mon": return { nameTo: "Monday", indexTo: 0 } as IDay;
            case "tue": return { nameTo: "Tuesday", indexTo: 1 } as IDay;
            case "wed": return { nameTo: "Wednesday", indexTo: 2 } as IDay;
            case "thu": return { nameTo: "Thursday", indexTo: 3 } as IDay;
            case "fri": return { nameTo: "Friday", indexTo: 4 } as IDay;
            case "sat": return { nameTo: "Saturday", indexTo: 5 } as IDay;
            case "sun": return { nameTo: "Sunday", indexTo: 6 } as IDay;
            default: return { nameTo: shortDayName, indexTo: 99 } as IDay;
        }
    }
    public GetDayName(index: number): string {
        return this.dayNames[index];
    }

    public MapAccumulator(accumulator, current): Array<ISchedule> {
        var filteredAccumulator: Array<ISchedule> = accumulator.filter(d => d && d.from == current.from && d.to == current.to && d.isOpen == current.isOpen);

        var sameTimeDay = filteredAccumulator.length && filteredAccumulator[0];
        if (sameTimeDay) {           
            sameTimeDay.day.indexFrom = current.day.indexTo;
            sameTimeDay.day.nameFrom = current.day.nameTo;

        } else {
            accumulator.push(current);
        }
        return accumulator;
    }

    public FormatTime(data: ISchedule): string {
        const FromDate = new Date(parseInt(data.from));
        const ToDate = new Date(parseInt(data.to));

        return data.isOpen ? `${FromDate.getHours().toString().padStart(2, "0")}:${FromDate.getMinutes().toString().padEnd(2, "0")} - ${ToDate.getHours().toString().padStart(2, "0")}:${ToDate.getMinutes().toString().padEnd(2, "0")}` : "Closed";
    }

    public FormatDayName(data: ISchedule): string {
        if (typeof (data.day.nameFrom) === 'undefined') {
            return `${data.day.nameTo} `;
        }
        return `${data.day.nameTo} - ${data.day.nameFrom} `;
    }
}