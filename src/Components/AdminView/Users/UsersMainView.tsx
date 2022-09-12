import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store/store";
import useUserService from "../../../ServiceHooks/useUserService";
import AddUser from "./AddUser";
import UserCard from "./UserCard";

const UsersView = () => {
  const state = useSelector((state: RootState) => state);
  const [users, setUsers] = useState([]);
  const { getAllUsers } = useUserService();

  useEffect(() => {
    (async () => {
      getAllUsers().then(
        (arr) => setUsers(arr)
        // (err) => notificationService.error(err)
      );
    })();
  }, [getAllUsers]);

  return (
    <Container>
      {users.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
      <AddUser />
    </Container>
  );
};
export default UsersView;
