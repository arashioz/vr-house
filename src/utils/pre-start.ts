import { IArgs } from "@src/types/interface/env.init";
import path from "path";
import { parse } from "ts-command-line-args";
import * as dotenv from 'dotenv'
const commandLine = parse<IArgs>({
    env: {
        type: String,
        defaultValue: 'development',
        alias: 'e',
    },
});
const result = dotenv.config({
    path: path.join(__dirname, `../../envs/${commandLine.env}.env`),
});
if (result.error) {
    throw result.error;
}
