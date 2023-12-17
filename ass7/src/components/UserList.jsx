import { IoTrashBinOutline } from "react-icons/io5";

const UserList = ({ item,deleteUser }) => {
	const {
		name: { first, last } = {},
		email,
		phone,
		dob: { age } = {},
        id:{value}={}
	} = item;
	return (
		<tr className="body-tr" id={value}>
			<td className="td">
				{first} {last}
			</td>
			<td className="td">{email}</td>
			<td className="td">{phone}</td>
			<td className="td">{age}</td>
			<td className="td">
			<IoTrashBinOutline style={{color:"red",cursor:"pointer"}} onClick={()=>deleteUser(value)}/>
			</td>
		</tr>
	);
};
export default UserList;
