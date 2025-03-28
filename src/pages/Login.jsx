const Login = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <div
        id="login-container"
        className=""
      ></div>
    );
  };
  
  export default Login;