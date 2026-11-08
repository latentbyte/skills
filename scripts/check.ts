// validate skill frontmatter and confirm each skill's live llms.txt is reachable
import { readdir } from "node:fs/promises";

const root = new URL("../skills/", import.meta.url).pathname;
const errors: string[] = [];

for (const dir of (await readdir(root, { withFileTypes: true })).filter((d) => d.isDirectory())) {
  const path = `${root}${dir.name}/SKILL.md`;
  const text = await Bun.file(path).text();
  const front = text.match(/^---\n([\s\S]*?)\n---\n/)?.[1];
  const field = (key: string) => front?.match(new RegExp(`^${key}: (.+)$`, "m"))?.[1].trim();
  const name = field("name");
  const description = field("description");

  if (!front) errors.push(`${dir.name}: missing frontmatter`);
  if (name !== dir.name) errors.push(`${dir.name}: name "${name}" does not match directory`);
  if (!description) errors.push(`${dir.name}: missing description`);
  else if (description.length > 1024) errors.push(`${dir.name}: description over 1024 chars`);

  const urls = [...text.matchAll(/`(https:\/\/[^`]+\/llms\.txt)`/g)].map((m) => m[1]);
  if (urls.length === 0) errors.push(`${dir.name}: no llms.txt pointer`);
  for (const url of new Set(urls)) {
    const res = await fetch(url, { redirect: "manual" });
    const body = await res.text();
    if (res.status !== 200 || !body.startsWith("# ")) {
      errors.push(`${dir.name}: ${url} returned ${res.status}, not a markdown llms.txt`);
    } else {
      console.log(`ok ${dir.name} ${url}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
