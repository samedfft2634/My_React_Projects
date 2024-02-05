import { Typography } from "@mui/material";
import React from "react";

const globalStyles = () => {
  function EllipsisText({ text, maxLines }) {
    return (
      <Typography
        variant="body2"
        component="div"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: maxLines,
          textOverflow: "ellipsis",
          lineHeight: "1.4em",
          fontFamily: "'Fira Sans', sans-serif",
        }}
      >
        {text}
      </Typography>
    );
  }
  return { EllipsisText };
};

export default globalStyles;