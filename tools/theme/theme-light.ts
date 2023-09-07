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

import lightStyles from '@spectrum-web-components/styles/theme-light.min.css' assert { type: 'css' };
import lightVars from '@spectrum-web-components/styles/tokens/light-vars.min.css' assert { type: 'css' };
import lightCustomVars from '@spectrum-web-components/styles/tokens/spectrum/custom-light-vars.min.css' assert { type: 'css' };
// @import url('@spectrum-web-components/styles/theme-light.css');
// @import url('@spectrum-web-components/styles/tokens/light-vars.css');
// @import url('@spectrum-web-components/styles/tokens/spectrum/custom-light-vars.css');
import { Theme } from './src/Theme.js';
import './core.js';

Theme.registerThemeFragment('light', 'color', [
    lightStyles,
    lightVars,
    lightCustomVars,
]);
