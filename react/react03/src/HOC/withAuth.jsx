import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function withAuth(Component) {
  return function wrapper(props) {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
    }, []);
    return <Component {...props} />;
  };
}

export default withAuth;
