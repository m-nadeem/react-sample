
import React from 'react';
import UseRefactorObject from '../../Hooks/CustomHooks';
import { ISchedule } from '../../Interfaces/ISchedule';

const Schedule = (obj) => {
    const OpeningArr: Array<ISchedule> = UseRefactorObject(obj.openingHours);
    
    const FormatTime = (data): string =>  {
            const FromDate = new Date(data.from * 100000);
            const ToDate = new Date(data.to * 10000);

            return data.isOpen ? `${FromDate.getHours().toString().padStart(2, "0")}:${FromDate.getMinutes().toString().padEnd(2, "0")} - ${ToDate.getHours().toString().padStart(2, "0")}:${ToDate.getMinutes().toString().padEnd(2, "0")}` : "Closed";
    }

    return (
        <div>
            {OpeningArr.map(d => (
                    <div key={d.id}>
                        <span className="card-text">{d.day}: </span>
                        <span>{FormatTime(d)}</span>
                    </div>                    
            ))}
        </div>
    )
}

export default Schedule;
