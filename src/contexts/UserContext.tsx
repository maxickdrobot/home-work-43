import { createContext, useState, type PropsWithChildren } from "react";

interface UserContextValue {
    name: string;
    onChange: (newName: string) => void;
}

export const UserContext = createContext<UserContextValue | null>(null);

const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [user, setUsername] = useState<string>("User");

    const handleChangeName = (newName: string) => {
        setUsername(newName);
    };

    const userData = {
        name: user,
        onChange: handleChangeName,
    };

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;