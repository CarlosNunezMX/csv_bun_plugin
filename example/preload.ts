import config from "@carlosnunezmx/csv_bun_plugin"
import { plugin } from "bun"


plugin(config({
  headers: true,
  trim: true
}));
