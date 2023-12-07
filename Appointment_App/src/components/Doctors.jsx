import React, { useState, useEffect } from 'react';
import AddModal from './AddModal';
import AppointmentList from './AppointmentList';
import { doctorData,appointmentData } from '../helpers/data';



const Doctors = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  useEffect(() => {
  }, [appointments]);
  const handleclick = (e) => {
    const id = e.currentTarget.id ? parseInt(e.currentTarget.id) : parseInt(e.currentTarget.parentNode.id);
    const updatedList = appointments.filter(appointment => appointment.id !== id)
    setAppointments(updatedList)
  }
  return (
    <div className="Doctors">
      <div className="modalContainer">
        {doctorData.map((doctor,index)=>(
          <AddModal {...doctor} appointments={appointments} setAppointments={setAppointments} key={index} />
        ))}
      </div>
      <h3 style={{color:"blueviolet",margin:"1rem 0"}}>Appointment List</h3>
      {appointments.length > 0 ? (
        <div className="appointmentList">
          {appointments.map((item, index) => (
            <AppointmentList {...item} handleclick={handleclick} key={index}/>
          ))}
        </div>
      ) : (
        <div className="no-appointments">
          <img src="./img/appointment.jpg" alt="No Appointments" />
        </div>
      )}
      {/* <div className="appointmentList">
        {appointments.map((item,index)=>(
          <AppointmentList {...item} handleclick={handleclick} key={index}/>
        ))}
      </div> */}
    </div>
  );
}

export default Doctors;
