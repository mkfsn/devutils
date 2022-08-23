import React  from "react";
import {Box, Divider, ToggleButton, ToggleButtonGroup} from "@mui/material";
import ProtobufInput from "./ProtobufInput";
import UnixInput from "./UnitInput";
import DateDisplay from "./DateDisplay";

type Mode = 'Protobuf' | 'Unix';

interface TimestampConverterState {
    timestamp?: Date;
    currentMode: Mode;
}

export default class TimestampConverter extends React.Component<any, TimestampConverterState> {
    private readonly modes: Mode[];

    constructor(props: any) {
        super(props);
        this.modes = ['Protobuf', 'Unix'];
        this.state = {
            currentMode: this.modes[0],
            timestamp: undefined,
        };
    }

    setTimestamp = (timestamp: Date) => {
        console.log("setTimestamp:", timestamp)
        this.setState({timestamp: timestamp})
    }

    renderCurrentMode() {
        switch (this.state.currentMode) {
            case "Protobuf":
                return (
                    <ProtobufInput setTimestamp={this.setTimestamp} />
                )
            case "Unix":
                return (
                    <UnixInput setTimestamp={this.setTimestamp} />
                )
            default:
                return null
        }
    }

    render() {
        return (
            <Box>
                <ToggleButtonGroup
                    size="small"
                    color="primary"
                    value={this.state.currentMode}
                    exclusive
                    onChange={(_, mode) => this.setState({currentMode: mode})}
                    aria-label="Mode"
                >
                    {this.modes.map((mode) => (
                        <ToggleButton key={mode} value={mode}>{mode}</ToggleButton>
                    ))}
                </ToggleButtonGroup>
                {this.renderCurrentMode()}
                <Divider sx={{ my: 3 }}/>
                {<DateDisplay date={this.state.timestamp} />}
            </Box>
        )
    }
}
