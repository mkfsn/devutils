import React from "react";
import {Box, TextField} from "@mui/material";


interface DateDisplayProps {
    date?: Date
}

class DateDisplay extends React.Component<DateDisplayProps> {
    render() {
        return (
            <Box>
                <TextField
                    label="Local"
                    value={this.props.date?.toLocaleString()}
                    margin="dense"
                    focused={true}
                    InputProps={{
                        readOnly: true,
                    }}
                    style={{width: 300}}
                    variant="filled"
                />

                <br/>

                <TextField
                    label="UTC"
                    value={this.props.date?.toISOString()}
                    focused={true}
                    InputProps={{
                        readOnly: true,
                    }}
                    margin="dense"
                    style={{width: 300}}
                    variant="filled"
                />
            </Box>
        )
    }
}

export default DateDisplay;
