import Card from "../Card/Card";
import "./UserCard.scss";

const UserCard = ({ deleteUser, editUser, users }) => {
  return (
    <div className="user-cards-container">
      {users.map((user, index) => (
        <Card
          key={`${JSON.stringify(user)} - ${index}`}
          user={user}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      ))}
    </div>
  );
};
export default UserCard;
