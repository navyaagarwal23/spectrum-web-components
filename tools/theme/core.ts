/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { Theme } from './src/Theme.js';

import coreSpectrumGlobal from '@spectrum-web-components/styles/spectrum-core-global.min.css' assert { type: 'css' };
import coreGlobal from '@spectrum-web-components/styles/core-global.min.css' assert { type: 'css' };
import globalVars from '@spectrum-web-components/styles/tokens/global-vars.min.css' assert { type: 'css' };
import globalSpectrumVars from '@spectrum-web-components/styles/tokens/spectrum/global-vars.min.css' assert { type: 'css' };
import globalCustom from '@spectrum-web-components/styles/tokens/spectrum/custom-vars.min.css' assert { type: 'css' };
import typography from '@spectrum-web-components/styles/typography.min.css' assert { type: 'css' };
import coreStyles from './src/theme.min.css' assert { type: 'css' };
// @import url('@spectrum-web-components/styles/core-global.css');
// @import url('@spectrum-web-components/styles/tokens/global-vars.css');
// @import url('@spectrum-web-components/styles/tokens/spectrum/global-vars.css');
// @import url('@spectrum-web-components/styles/tokens/spectrum/custom-vars.css');
// @import url('@spectrum-web-components/styles/typography.css');

Theme.registerThemeFragment('spectrum', 'theme', [
    coreSpectrumGlobal,
    coreGlobal,
    globalVars,
    globalSpectrumVars,
    globalCustom,
    typography,
    coreStyles,
]);
