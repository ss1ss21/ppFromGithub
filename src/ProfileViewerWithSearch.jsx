import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSerachForm from "./ProfileSearchForm";

const config = {
    headers: {
        Authorization: `Bearer${import.meta.env.VITE_ACCESS_TOKEN}`
    }
};

const BASE_URL = "https://api.github.com/users";

export default function ProfileViewerWithSearch() {
    const [username, setUsername] = useState("ss1ss21");
    const [profile, setProfile] = useState({ data: null, isLoading: true });

    useEffect(
        function fetchUserOnUsername() {
            async function fetchUser() {
                const userResult = await axios.get(`${BASE_URL}/${username}`, config);
                setProfile({ data: userResult.data, isLoading: false });
            }
        fetchUser();}, [username]);

    function search(username) {
        setProfile({ data: null, isLoading: true });
        setUsername(username);
    }
    
    if (profile.isLoading)https://avatars.githubusercontent.com/u/87035626?v=4
    {
        return <div>loading...</div>;
    }

    return (
        <div>
            <ProfileSerachForm search={search}/>
                <br />
                <b>{profile.data.name}</b>
                <br />
                <img src={profile.data.avatar_url}/>
        </div>
    );
}