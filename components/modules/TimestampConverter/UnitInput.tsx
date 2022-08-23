import React from "react";
import {Box, TextField} from "@mui/material";

interface UnixInputProps {
    setTimestamp: (value: Date) => void
}

class UnixInput extends React.Component<UnixInputProps> {
    private seconds: number = 0;

    setSeconds = (seconds: number) => {
        this.seconds = seconds;
        this.props.setTimestamp(new Date(this.seconds));
    }

    render() {
        return (
            <Box>
                <TextField
                    label="Seconds"
                    size="small"
                    variant="outlined"
                    margin="normal"
                    type="number"
                    onChange={(e) => this.setSeconds(Number(e.target.value)) }
                />
            </Box>
        )
    }
}

export default UnixInput;
