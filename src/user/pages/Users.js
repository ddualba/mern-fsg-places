import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Max Schwarz',
			image:
				'https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png',
			places: '3'
		}
	];

	return <UsersList items={USERS} />;
};

export default Users;
