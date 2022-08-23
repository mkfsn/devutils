import {AccessTime, TextFields} from "@mui/icons-material";
import React, {ReactElement} from "react";
import Base64Text from "../components/modules/Base64Text";
import JWTDebugger from "../components/modules/JWTDebugger";
import TimestampConverter from "../components/modules/TimestampConverter";

interface ModuleSpec {
    Icon: ReactElement
    Component: any // TODO
}

const moduleConfigs: {[key: string]: ModuleSpec} = {
    "Base64 Text": {
        Icon: <TextFields/>,
        Component: <Base64Text/>,
    },
    "JWT Debugger": {
        Icon: <TextFields/>,
        Component: <JWTDebugger/>,
    },
    "Timestamp Converter": {
        Icon: <AccessTime/>,
        Component: <TimestampConverter/>,
    },
}

export default moduleConfigs;
