import { type ParserOptionsArgs } from "@fast-csv/parse";
import { type BunPlugin } from "bun";
import "../types/csv.d.ts";
export default function csv_config(config?: Partial<ParserOptionsArgs>): BunPlugin;
