import { type HeaderArray, type ParserOptionsArgs, parseString } from "@fast-csv/parse";
import { type BunPlugin } from "bun";

export default function csv_config(config?: Partial<ParserOptionsArgs>) {
  return {
    name: "csv-loader",
    setup(build) {
      build.onLoad({ filter: /\.(csv|tsv)$/ },
        (args) => {
          return new Promise((res, rej) => {
            const data: HeaderArray = [];
            Bun.file(args.path).text()
              .then(text => {
                const reader = parseString(text, config)
                reader.on("error", err => rej(err));
                reader.on("data", row => data.push(row))
                reader.on("end", () => res({
                  exports: { data },
                  loader: "object"
                }));
              })
          })
        })
    }
  } as BunPlugin;
};
