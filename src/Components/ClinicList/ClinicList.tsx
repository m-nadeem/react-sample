
import * as React from 'react'
import { IState } from '../../Interfaces/IState';
import Schedule from '../Schedule/Schedule';

const ClinicList = (obj: IState) => {
    return (
        <div>
            <h1>Clinics & Weekly Schedule</h1>
            {obj.clinics.map((clinic) => (
                <div className="card" key={clinic.id}>
                    <div className="card-body">
                        <h5 className="card-title">{clinic.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{clinic.timezone}</h6>
                        <Schedule openingHours={clinic.openingHours} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ClinicList;
