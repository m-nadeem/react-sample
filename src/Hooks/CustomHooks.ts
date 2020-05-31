import { ISchedule } from "../Interfaces/ISchedule";
import { MiscService } from "../Services/Utils/MiscService";

const useRefactorObject = (openingHours): Array<ISchedule> => {
    
    const miscService = new MiscService();

    var reduced = Object.keys(openingHours).map((key, index) => {
        return {
            id: index,
            day: miscService.GetDay(key),
            from: openingHours[key].periods && openingHours[key].periods[0].from,
            to: openingHours[key].periods && openingHours[key].periods[0].to,
            isOpen: openingHours[key].isOpen
        }
    }).sort((a, b) => a.day.indexTo - b.day.indexTo).reduce(miscService.MapAccumulator, []);
    return reduced;
}

export default useRefactorObject;