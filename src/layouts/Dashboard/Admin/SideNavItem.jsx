import { Box, ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";

const SideNavItem = (props) => {
  const { active = false, disabled, external, icon, path, title } = props;

  return (
    <Link to={path}>
      <ButtonBase
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "flex-start",
          pl: "16px",
          pr: "16px",
          py: "6px",
          textAlign: "left",
          width: "100%",
          ...(active && {
            backgroundColor: "blue",
          }),
          "&:hover": {
            backgroundColor: "grey",
          },
        }}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: "center",
              display: "inline-flex",
              justifyContent: "center",
              mr: 2,
              ...(active && {
                color: "blue",
              }),
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: "neutral",
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "24px",
            whiteSpace: "nowrap",
            ...(active && {
              color: "common.white",
            }),
            ...(disabled && {
              color: "blue",
            }),
          }}
        >
          {title}
        </Box>
      </ButtonBase>
    </Link>
  );
};

export default SideNavItem;
