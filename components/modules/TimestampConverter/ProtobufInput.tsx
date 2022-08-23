import React from "react";
import {Timestamp} from "google-protobuf/google/protobuf/timestamp_pb";
import {Box, TextField} from "@mui/material";

interface ProtobufInputProps {
    setTimestamp: (value: Date) => void
}

class ProtobufInput extends React.Component<ProtobufInputProps> {
    private seconds: number = 0;
    private nanos: number = 0;

    setTimestamp = () => {
        const timestamp = new Timestamp();
        timestamp.setSeconds(Math.floor(this.seconds));
        timestamp.setNanos(this.nanos);
        this.props.setTimestamp(new Date(timestamp.getSeconds()*1000 + timestamp.getNanos()/1e6));
    }

    setSeconds = (seconds: number) => {
        this.seconds = seconds;
        this.setTimestamp();
    }

    setNanos = (nanos: number) => {
        this.nanos = nanos;
        this.setTimestamp();
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
                <TextField
                    label="Nanos"
                    size="small"
                    variant="outlined"
                    margin="normal"
                    type="number"
                    onChange={(e) => this.setNanos(Number(e.target.value)) }
                />
            </Box>
        )
    }
}

export default ProtobufInput;
