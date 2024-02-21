import {parse} from '@astrojs/compiler';
import fs from 'node:fs';


const source = `
---
const text = 'Go to example.com';
---

<html lang="en">
<head>
    <meta charset="utf-8"/>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
    <meta name="viewport" content="width=device-width"/>
    <meta name="generator" content={Astro.generator}/>
    <title>Astro</title>
</head>
<body>
<template>
    <a href="https://example.com">{text}</a>.
</template>
<p>This should not be a link</p>
</body>
</html>

`;

const parsed = await parse(source, {position: false});
await fs.promises.writeFile('out.json', JSON.stringify(parsed.ast, undefined, 4));
