
import React from 'react';
import UseRefactorObject from '../../Hooks/CustomHooks';
import { ISchedule } from '../../Interfaces/ISchedule';
import { MiscService } from '../../Services/Utils/MiscService';

const Schedule = (Props) => {
    const scheduleArr: Array<ISchedule> = UseRefactorObject(Props.openingHours);
    const miscService = new MiscService();

    return (
        <div>
            {scheduleArr.map(scheduleObject => (
                <div key={scheduleObject.id}>
                    <span className="card-text">{miscService.FormatDayName(scheduleObject)}: </span>
                    <span>{miscService.FormatTime(scheduleObject)}</span>
                </div>
            ))}
        </div>
    )
}

export default Schedule;
