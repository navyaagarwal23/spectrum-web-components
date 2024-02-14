/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import path from 'path';
import fs from 'fs';
import { bundleAsync } from 'lightningcss';
import cssProcessing from '../scripts/css-processing.cjs';
import { fileURLToPath } from 'url';

const { postCSSPlugins, wrapCSSResult } = cssProcessing;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nodeModulesDir = path.resolve(__dirname, '..', 'node_modules');
const configPath = path.resolve(path.join(__dirname, '..', 'config'));
let header;
try {
    header = fs.readFileSync(path.join(configPath, 'license.js'), 'utf8');
} catch (error) {
    throw new Error(error);
}

header = header.replace('<%= YEAR %>', new Date().getFullYear());

export const processCSS = async (cssPath) => {
    let wrappedCSS = header;
    // const originCSS = fs.readFileSync(cssPath, 'utf8');
    // const processedCSS = await postcss(postCSSPlugins(cssPath, true))
    //     .process(originCSS, {
    //         from: cssPath,
    //     })
    //     .then((result) => {
    //         return result;
    //     })
    //     .catch((error) => {
    //         console.error(error?.message || error);
    //     });
    console.log(cssPath);
    let { code, map } = await bundleAsync({
        filename: cssPath,
        minify: true,
        resolver: {
            read(filePath) {
                const file = fs.readFileSync(filePath, 'utf8');
                return file;
            },
            resolve(specifier, from) {
                if (specifier.startsWith('./')) {
                    const resolution = path.resolve(from, '..', specifier);
                    return resolution;
                } else {
                    const resolution = path.resolve(nodeModulesDir, specifier);
                    return resolution;
                }
            },
        },
    });
    console.log(cssPath);
    wrappedCSS += wrapCSSResult(code);
    fs.writeFileSync(cssPath + '.ts', wrappedCSS, 'utf-8');
};
