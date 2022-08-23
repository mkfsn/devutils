import type { NextPage } from 'next'
import {Box, Container, Grid, Toolbar} from "@mui/material";
import Sidebar from '../components/Sidebar';
import Navbar from "../components/Navbar";
import {useState} from "react";
import moduleConfigs from "../config/module";

const Home: NextPage = () => {
    const [moduleName, setModuleName] = useState<string>("");

    const renderCurrentSelection = () => {
        if (moduleName in moduleConfigs) {
            return moduleConfigs[moduleName].Component
        }
        return <div>Default</div>
    };

    return (
        <Container maxWidth="xl">
            <Navbar/>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Sidebar setModuleName={setModuleName}/>
                </Grid>
                <Grid item xs={10} sx={{ height: '100vh' }}>
                    <Toolbar />
                    <Box component="main" sx={{ flexGrow: 0, px: 0, py: 2 }}>
                        {renderCurrentSelection()}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;
