import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Identification = ({ email, userName, lastName, firstName, img }) => {
	return (
			<Card style={{ width: "18rem",marginBottom:"3rem" }}>
                <Card.Body id="cardImg">
				<Card.Img variant="top" src={img} />
                </Card.Body>
				<Card.Body>
					<Card.Title>{userName}</Card.Title>
					<Card.Text>
						First Name:{firstName} 
					</Card.Text>
					<Card.Text>
                         Last Name:{lastName}
					</Card.Text>
					<Card.Text>Email: {email}</Card.Text>
					{/* <Button variant="danger">Delete</Button> coming soon... */}
				</Card.Body>
			</Card>

	);
};
export default Identification;
