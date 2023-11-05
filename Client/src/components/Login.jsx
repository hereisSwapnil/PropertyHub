const Login = (props) => {
  return (
    <>
      <div>
        <p style={{ marginTop: "10px", marginLeft: "5px" }}>
          <small>Connected Account - {props.account}</small>
        </p>
      </div>
    </>
  );
};

export default Login;
