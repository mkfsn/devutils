import React from "react";
import Box, { BoxProps } from '@mui/material/Box';
import TextareaAutosize from "@mui/material/TextareaAutosize";

function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                flexGrow: 1,
                width: '100%',
                ...sx,
            }}
            {...other}
        />
    );
}

interface State {
    inputValue: string
}

function b64EncodeUnicode(str: string) {
    return btoa(encodeURIComponent(str));
}

function UnicodeDecodeB64(str: string) {
    return decodeURIComponent(atob(str));
}

export default class Base64Text extends React.Component<any, State> {
    constructor (props: any) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    render() {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    borderRadius: 1,
                    flexShrink: 1,
                    height: '100%',
                }}
            >
                <Item>
                    Input
                    <br/>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Empty"
                        style={{ width: '100%' }}
                        onChange={(e) => this.setState({inputValue: e.target.value})}
                    />
                </Item>
                <Item>
                    Output
                    <br/>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Output"
                        style={{ width: '100%' }}
                        value={b64EncodeUnicode(this.state.inputValue)}
                    />
                </Item>
            </Box>
        )
    }
}
