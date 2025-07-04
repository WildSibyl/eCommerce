import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold m-4">Your profile</h1>
        <p className="text-lg">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold m-4">Your profile</h1>
      <p className="text-lg">
        {user
          ? `Welcome back, ${user.userName}!`
          : "Please sign in to view your profile."}
      </p>
    </div>
  );
};
export default Profile;
