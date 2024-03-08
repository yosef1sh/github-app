import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import {
    Box,
    IconButton,
    Toolbar,
    Tooltip,
    useTheme,
} from "@mui/material";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../context/theme";

const DarkMode = () => {
    const theme = useTheme();
    const { switchColorMode } = useContext(ThemeContext);
    const activateName = useMemo(
        () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
        [theme]
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Tooltip title={`Activate ${activateName} Mode`}>
                    <IconButton
                        onClick={switchColorMode}
                        sx={{
                            p: 1,
                            border: `1px ${theme.palette.text.disabled} solid`,
                            backgroundColor: theme.palette.background.paper,
                        }}
                        size="large"
                        color="primary"
                    >
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlined color="action" />
                        ) : (
                            <LightModeOutlined />
                        )}
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    );
};

export default DarkMode;