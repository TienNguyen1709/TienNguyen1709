import { people } from './data.js';
import logo from './avatar.png'

export default function Profile() {
	const listItems = people.map(person =>
		<li key={person.id}>
			<img
				src={logo}
				alt={person.name}
			/>
			<p>
				<b>{person.name}</b>
			</p>
		</li>
	);
	return <ul>{listItems}</ul>;
}
