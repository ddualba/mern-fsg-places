import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png",
      places: "3",
    },
    {
      id: "u2",
      name: "Dude Schwarz",
      image:
        "https://img.favpng.com/6/4/0/computer-icons-user-avatar-png-favpng-gXAJBEEt64gUa8aVymL5sHvQL.jpg",
      places: "3",
    },
    {
      id: "u3",
      name: "Extra Schwarz",
      image:
        "https://img.favpng.com/6/4/0/computer-icons-user-avatar-png-favpng-gXAJBEEt64gUa8aVymL5sHvQL.jpg",
      places: "2",
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
