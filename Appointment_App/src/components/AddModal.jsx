import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from 'sweetalert2'

function AddModal({ name, dep, img, setAppointments, appointments }) {
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState(null);

	const [patientName, setPatientName] = useState("");
	const [appointmentDate, setAppointmentDate] = useState("");

	const handleClose = () => {
		setShow(false);
		setTitle(null);
		if (patientName && appointmentDate) {
			const newAppointment = {
				id: appointments.length + 1,
				patient: patientName,
				day: new Date(appointmentDate), 
				consulted: false,
				doctor: title,
			};
			setAppointments([...appointments, newAppointment]);
		} else {
			Swal.fire({
				position: "center",
				icon: "warning",
				title: "Please enter a name and date informations for appointment!",
				showConfirmButton: false,
				timer: 1500
			  });
		}
	};
	const handleShow = (name) => {
		setShow(true);
		setTitle(name);
	};
	//

	const handlePatientNameChange = (e) => {
		setPatientName(e.target.value);
	};

	const handleAppointmentDateChange = (e) => {
		setAppointmentDate(e.target.value);
	};
	//

	return (
		<div className="AddModal">
			<div className="modalImg">
				<img
					src={img}
					alt={name}
					onClick={() => handleShow(name)}
				/>
			</div>
			<div className="docInfo">
				<h5 style={{ marginTop: ".5rem" }}>{name}</h5>
				<h6>{dep}</h6>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title style={{ color: "red" }}>
						Reservation for {title ? title : ""}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={(e) => e.preventDefault()}>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="formPatientName">
								Patient Name
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your name"
								id="formPatientName"
								onChange={handlePatientNameChange}
								autoFocus
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="formAppointmentDate">
								Day & Time
							</Form.Label>
							<Form.Control
								type="datetime-local"
								id="formAppointmentDate"
								onChange={handleAppointmentDateChange}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default AddModal;
