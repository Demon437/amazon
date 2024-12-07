import { memo, React } from "react";

function Childfile(deta, count) {
  console.log("Component");
  return <div></div>;
}

export default memo(Childfile);
