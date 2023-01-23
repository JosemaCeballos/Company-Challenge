import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import "./Information.css";
import Loading from "../Loading/Loading";
import InformationCard from "./InformationCard";

function Information() {
  const [userInfo, setUserInfo] = useState([]);

  const getLinks = async () => {
    const querySnapchot = await getDocs(collection(db, "information"));
    const docs = [];
    querySnapchot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setUserInfo(docs);
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="center">
      <section id="content">
        {userInfo.length > 0 ? (
          userInfo.map((link) => <InformationCard {...link} id={link.id} />)
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
}

export default Information;
