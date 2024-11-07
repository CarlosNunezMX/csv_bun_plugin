# CSV Loader Plugin for Bun

Created with [`@fast-csv/parse`](https://npmjs.com/package/@fast-csv/parse)

## Usage

Installation

```bash
bun install @carlosnunezmx/csv_loader_bun

```

### Use as plugin in runtime

In your preload file you need to plug-in

```typescript
import csv_config from "@carlosnunezmx/csv_loader_bun";
import { plugin } from "bun";

// Mount your plugins :D
plugin(csv_config({
  // Your config
}))
```

Then you need to import it into your `bunfig.toml`

```toml
preload = ["plugins.ts"]
```

Now you can import your csv as a normal module.

```typescript
import {data} from "mydata.csv"
console.log(data);
```

### Get types
To get types to your modules you need to import this file to your global.d.ts file

```typescript
// global.d.ts
import "@carlosnunezmx/csv_loader_bun/types";
```
