import { ISchedule } from "../Interfaces/ISchedule";

const mapAccumulator = (accumulator, current): Array<ISchedule> => {
    var sameDate = accumulator.filter(d => d && d.from == current.from && d.to == current.to && d.isOpen == current.isOpen);
    if (sameDate.length) {
        sameDate[0].day = sameDate[0].day + "-" + current.day
    } else {
        accumulator.push(current);
    }
    return accumulator;
}

const getFullDayName = (shortDayName: string): string => {
    switch (shortDayName) {
        case "mon": return "Monday";
        case "tue": return "Tuesday";
        case "wed": return "Wednesday";
        case "thu": return "Thursday";
        case "fri": return "Friday";
        case "sat": return "Saturday";
        case "sun": return "Sunday";
        default: return shortDayName;
    }
}

const useRefactorObject = (openingHours): Array<ISchedule> => {

    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var reduced = Object.keys(openingHours).map((key, index) => {
        return {
            id: index,
            day: getFullDayName(key),
            from: openingHours[key].periods && openingHours[key].periods[0].from,
            to: openingHours[key].periods && openingHours[key].periods[0].to,
            isOpen: openingHours[key].isOpen
        }
    }).sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day)).reduce(mapAccumulator, []);
    return reduced;
}

export default useRefactorObject;