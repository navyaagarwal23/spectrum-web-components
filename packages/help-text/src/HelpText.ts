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

import {
    CSSResultArray,
    html,
    nothing,
    SizedMixin,
    SpectrumElement,
    TemplateResult,
} from '@spectrum-web-components/base';
import { property } from '@spectrum-web-components/base/src/decorators.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js';

import stylesDefault from './spectrum-help-text.min.css' assert { type: 'css' };
import stylesOveride from './help-text.min.css' assert { type: 'css' };

type HelpTextVariants = 'neutral' | 'negative';

/**
 * @element sp-help-text
 */
export class HelpText extends SizedMixin(SpectrumElement, {
    noDefaultSize: true,
}) {
    public static override get styles(): CSSResultArray {
        return [stylesDefault, stylesOveride];
    }

    @property({ type: Boolean, reflect: true })
    public icon = false;

    /**
     * The visual variant to apply to this help text.
     */
    @property({ reflect: true })
    public variant: HelpTextVariants = 'neutral';

    protected override render(): TemplateResult {
        return html`
            ${this.variant === 'negative' && this.icon
                ? html`
                      <sp-icon-alert class="icon"></sp-icon-alert>
                  `
                : nothing}
            <div class="text"><slot></slot></div>
        `;
    }
}
