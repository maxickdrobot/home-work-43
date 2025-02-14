import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const userInfo = () => {

    const data = useContext(UserContext);

    return (
        <p>Username: {data?.name}</p>
    );
}

export default userInfo;