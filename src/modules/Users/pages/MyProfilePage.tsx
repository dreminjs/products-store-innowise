import { UserCard } from "../ui/UserCard/UserCard";
import { useGetMeQuery } from "../api/queries";

export default () => {
  const { data: currentUser } = useGetMeQuery();

  if (!currentUser) return <div>Вас не существует :(</div>;

  return (
    <div style={{ padding: "20px" }}>
      <UserCard {...currentUser} id={currentUser?.id} />
    </div>
  );
};
