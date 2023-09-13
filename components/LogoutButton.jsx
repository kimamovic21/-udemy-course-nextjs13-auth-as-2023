'use client';

import { signOut } from "next-auth/react";

const LogoutButton = () => {
    return (
        <button className="text-sm uppercase border text-white px-6 py-1 rounded-md hover:bg-white hover:text-black duration-300" onClick={signOut}>
            Log out
        </button>
    );
};

export default LogoutButton;