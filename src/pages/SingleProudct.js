import React from "react";
import { useSearchParams } from "react-router-dom";

export default function SingleProudct() {
  const { info } = useSearchParams();
  console.log(info);

  return <div>{info}</div>;
}
