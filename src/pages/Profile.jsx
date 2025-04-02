import { useOutletContext } from "react-router";

const Profile = () => {
  const { signedIn } = useOutletContext();

  if (!signedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p className="text-lg">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p className="text-lg">
        {signedIn
          ? "Welcome back, user!"
          : "Please sign in to view your profile."}
      </p>
    </div>
  );
};
export default Profile;
