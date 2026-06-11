import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const sourceDir = path.join(rootDir, "frutodavide-brand", "dist");
const targetDir = path.join(rootDir, "dist", "frutodavide-brand");

await rm(targetDir, { recursive: true, force: true });
await mkdir(path.dirname(targetDir), { recursive: true });
await cp(sourceDir, targetDir, { recursive: true });
