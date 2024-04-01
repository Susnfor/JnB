'use client'
import { BurgerClose as Icon } from "react-icons-animated";

import { useState } from "react";

export const CloseBtn = () => {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  return (
    <button
      onClick={() => setIsClosed(!isClosed)}
      style={{
        width: "50px",
        height: "50px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Icon isClosed={isClosed} />
    </button>
  );
};