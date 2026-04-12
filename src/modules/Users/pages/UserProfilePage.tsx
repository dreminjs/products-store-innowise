import { useParams } from "react-router";
import { UserCard } from "../ui/UserCard/UserCard";
import { useGetUserQuery } from "@modules/Users";

export default () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading } = useGetUserQuery(Number(id));

  return (
    <div>
      {user && !isLoading ? (
        <>
          <UserCard {...user} />
        </>
      ) : (
        <div>Такого пользователя не существует</div>
      )}
      {isLoading && <div>Загрузка...</div>}
    </div>
  );
};
