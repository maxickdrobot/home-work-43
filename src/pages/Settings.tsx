import { ChangeEvent, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Settings = () => {
    const data = useContext(UserContext);
    const [newUserName, setNewUserName] = useState<string>(data?.name || "User");

    const ChangeUserName = () => {
        data?.onChange(newUserName);
    }

    return (
        <>
            <h1>Settings</h1>
            <label>
                New username:
                <input type="text" value={newUserName} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewUserName(e.target.value)}/>
            </label>
            <button onClick={ChangeUserName}>Save</button>
        </>
    );
}

export default Settings;