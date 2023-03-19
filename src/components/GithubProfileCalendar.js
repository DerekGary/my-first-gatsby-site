import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'github-calendar/dist/github-calendar.css';
import GitHubCalendar from 'github-calendar';

const GithubProfileCalendar = ({ username }) => {
    console.log('username:', username)
    const [calendar, setCalendar] = useState(null);

    useEffect(() => {
        if (username && !calendar) {
            const fetchCalendar = async () => {
                try {
                    const { data } = await axios.get(`https://api.github.com/users/${username}`);
                    setCalendar(data);
                } catch (error) {
                    console.error('Error fetching calendar:', error);
                }
            };

            fetchCalendar();
        }
    }, [username, calendar]);

    useEffect(() => {
        if (calendar) {
            new GitHubCalendar(`.calendar`, username, {
                responsive: true,
            });
        }
    }, [calendar, username]);

    return <div className="calendar"></div>;
};

export default GithubProfileCalendar;
