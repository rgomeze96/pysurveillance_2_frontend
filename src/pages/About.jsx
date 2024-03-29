import React, { useState, useEffect } from "react";
import { Page } from "../components/Page";
import { useRoutes, A } from "hookrouter";

const routes = {};

export const About = () => {
  const match = useRoutes(routes);
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await fetch("/api/users_data")
      .then((res) => res.json())
      .then((data) => {
        setUserArray(data.users);
      });
  };

  return <Page title="About">{match || <div>Choose an About Page</div>}</Page>;
};
