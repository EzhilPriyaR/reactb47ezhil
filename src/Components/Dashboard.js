import React from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import QueueIcon from "@mui/icons-material/Queue";
import HomeIcon from "@mui/icons-material/Home";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { useNavigate } from "react-router-dom";
import { pink } from '@mui/material/colors';

function Dashboard({ student }) {
    const navigate = useNavigate();
    var newHTML = student.filter(function (el) {
        return el.course === "HTML";
    });
    var newCss = student.filter(function (el) {
        return el.course === "CSS";
    });
    var newJS = student.filter(function (el) {
        return el.course === "JavaScript";
    });

    const actions = [
        { icon: <HomeIcon />, name: 'Home', action: '/' },
        { icon: <AppsIcon />, name: 'All Students', action: '/allstudent' },
        { icon: <QueueIcon />, name: 'Add Students', action: '/addstudent' },
    ];

    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: 250,
        height: 200,
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
    }));

    const headingAlign = {
        color: 'DodgerBlue',
        padding: '40',
        fontFamily: 'Arial',
        textAlign: 'center',
        backgroundColor: 'white',
    };

    return (
        <div className="content">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-xl-3">
                        <h1 style={headingAlign}>Infoview Technologies Pvt Ltd.</h1>
                    </div>

                    <div className="col-md-4 col-xl-3" style={{ padding: 80 }}>
                        <div className="row">
                            <Stack direction="row" spacing={3}>
                                <DemoPaper square={false} elevation={5}>
                                    <h3 className="m-b-20"> Total Students Enrolled </h3>
                                    <PeopleAltIcon sx={{ fontSize: 80, color: pink[500] }} />
                                    <div style={{ fontSize: 30, padding: 10 }}>{student.length}</div>
                                </DemoPaper>

                                <DemoPaper square={false} elevation={5}>
                                    <h3 className="m-b-20">Students Enrolled HTML</h3>
                                    <HtmlIcon sx={{ fontSize: 100, color: pink[500] }} />
                                    <div style={{ fontSize: 30 }}>{newHTML.length}</div>
                                </DemoPaper>

                                <DemoPaper square={false} elevation={5}>
                                    <h3 className="m-b-20">Students Enrolled JavaScript</h3>
                                    <CssIcon sx={{ fontSize: 100, color: pink[500] }} />
                                    <div style={{ fontSize: 30 }}>{newCss.length}</div>
                                </DemoPaper>

                                <DemoPaper square={false} elevation={5}>
                                    <h3 className="m-b-20">Students Enrolled CSS</h3>
                                    <JavascriptIcon sx={{ fontSize: 100, color: pink[500] }} />
                                    <div style={{ fontSize: 30 }}>{newJS.length}</div>
                                </DemoPaper>
                            </Stack>
                        </div>

                    </div>

                    <div className="col-md-4 col-xl-3">
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{ position: 'absolute', bottom: 16, right: 16 }}
                            icon={<SpeedDialIcon />}>
                            {actions.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    onClick={() => navigate(action.action)}
                                />
                            ))}
                        </SpeedDial>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
