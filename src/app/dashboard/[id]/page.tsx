"use client";
import React from "react";
import { useParams } from "next/navigation";

const DetailPage = () => {
  const params = useParams();
 

  return <div>DetailPage of {params.id} </div>;
};

export default DetailPage;
