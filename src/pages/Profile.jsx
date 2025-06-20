import { useOutletContext } from "react-router";

const Profile = () => {
  const { user } = useOutletContext();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold m-4">Profile</h1>
        <p className="text-lg">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold m-4">Profile</h1>
      <p className="text-lg">
        {user ? "Welcome back, user!" : "Please sign in to view your profile."}
      </p>
    </div>
  );
};
export default Profile;
