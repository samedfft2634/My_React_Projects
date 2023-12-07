import { FaTimesCircle } from "react-icons/fa";

const AppointmentList = ({
	id,
	patient,
	day,
	consulted,
	doctor,
	handleclick,
}) => {
	const formattedDay = day.toLocaleDateString();
	const formattedTime = day.toLocaleTimeString();

	return (
		<div className="appointments">
			<div className="titles">
				<h4> {patient}</h4>
				<h5> {doctor}</h5>
			</div>
			<div className="times">
				<h5>Date: {formattedDay}</h5>
				<h6>Time: {formattedTime}</h6>
				{consulted && <h4 className="consulted">CONSULTED</h4>}
			</div>
			<div className="close" onClick={handleclick} id={id}>
				<FaTimesCircle id="circle" />
			</div>
		</div>
	);
};

export default AppointmentList;
