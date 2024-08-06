import Friend from "./Friend";

export default function FriendList({ friends, onSelected, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend, index) => {
        return (
          <Friend
            friend={friend}
            key={index}
            onSelected={onSelected}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}
