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

import { html, render, TemplateResult } from '@spectrum-web-components/base';
import './sp-story-decorator.js';

export const themeStyles = html`
    <style>
        #root {
            padding: 0;
        }
        .docs-story sp-story-decorator::part(container) {
            min-height: auto;
            position: relative;
        }
        .docs-story sp-story-decorator::part(controls) {
            position: absolute;
        }
    </style>
`;

export const swcThemeDecoratorWithConfig =
    ({ bundled } = { bundled: true }) =>
    (
        story: () => TemplateResult,
        {
            args: {
                overlayAnimationStartDistance = 0,
                overlayAnimationEndDistance = 0,
                overlayAnimationTransformDuration = '--spectrum-animation-duration-100',
                overlayAnimationOpacityDuration = '--spectrum-animation-duration-100',
                overlayAnimationVisibilityDuration = '--spectrum-animation-duration-100',
            },
        }: {
            args: {
                overlayAnimationStartDistance: number;
                overlayAnimationEndDistance: number;
                overlayAnimationTransformDuration: string;
                overlayAnimationOpacityDuration: string;
                overlayAnimationVisibilityDuration: string;
            };
        }
    ) => {
        if (!bundled) {
            requestAnimationFrame(() => {
                document.documentElement.setAttribute('lang', 'en');
                const decorator = document.querySelector(
                    'sp-story-decorator'
                ) as HTMLElement;
                render(story(), decorator);
            });
        }
        return html`
            ${themeStyles}
            <style>
                ::part(container) {
                    --mod-overlay-animation-start-distance: ${overlayAnimationStartDistance}px;
                    --mod-overlay-animation-distance: ${overlayAnimationEndDistance}px;
                    --mod-overlay-animation-transform-duration: var(
                        ${overlayAnimationTransformDuration}
                    );
                    --mod-overlay-animation-opacity-duration: var(
                        ${overlayAnimationOpacityDuration}
                    );
                    --mod-overlay-animation-visibility-duration: var(
                        ${overlayAnimationVisibilityDuration}
                    );
                }
            </style>
            <sp-story-decorator role="main">
                ${bundled ? story() : html``}
            </sp-story-decorator>
        `;
    };

export const swcThemeDecorator = swcThemeDecoratorWithConfig();

export const swcThemeDecoratorArgs = {
    overlayAnimationStartDistance: 0,
    overlayAnimationEndDistance: 6,
    overlayAnimationTransformDuration: '--spectrum-animation-duration-100',
    overlayAnimationOpacityDuration: '--spectrum-animation-duration-100',
};

const animationArg = {
    table: {
        defaultValue: { summary: '130ms' },
    },
    control: {
        options: [
            '--spectrum-animation-duration-0',
            '--spectrum-animation-duration-100',
            '--spectrum-animation-duration-200',
            '--spectrum-animation-duration-300',
            '--spectrum-animation-duration-400',
            '--spectrum-animation-duration-500',
            '--spectrum-animation-duration-600',
            '--spectrum-animation-duration-700',
            '--spectrum-animation-duration-800',
            '--spectrum-animation-duration-900',
            '--spectrum-animation-duration-1000',
            '--spectrum-animation-duration-2000',
            '--spectrum-animation-duration-4000',
        ],
        labels: {
            '--spectrum-animation-duration-0': '0ms',
            '--spectrum-animation-duration-100': '130ms',
            '--spectrum-animation-duration-200': '160ms',
            '--spectrum-animation-duration-300': '190ms',
            '--spectrum-animation-duration-400': '220ms',
            '--spectrum-animation-duration-500': '250ms',
            '--spectrum-animation-duration-600': '300ms',
            '--spectrum-animation-duration-700': '350ms',
            '--spectrum-animation-duration-800': '400ms',
            '--spectrum-animation-duration-900': '450ms',
            '--spectrum-animation-duration-1000': '500ms',
            '--spectrum-animation-duration-2000': '1000ms',
            '--spectrum-animation-duration-4000': '2000ms',
        },
        type: 'select',
    },
};

export const swcThemeDecoratorArgTypes = {
    overlayAnimationStartDistance: {
        name: 'Overlay Animation Start Distance',
        type: { name: 'number', required: false },
        table: {
            defaultValue: { summary: '0' },
        },
        description:
            'The distance from layout default that Overlay Animations will start.',
    },
    overlayAnimationEndDistance: {
        name: 'Overlay Animation End Distance',
        type: { name: 'number', required: false },
        table: {
            defaultValue: { summary: '0' },
        },
        description:
            'The distance from layout default that Overlay Animations will end.',
    },
    overlayAnimationTransformDuration: {
        ...animationArg,
        name: 'Overlay Animation Transform Duration',
        description:
            'The duration overwhich the Overlay will animate from its start to end positions.',
    },
    overlayAnimationOpacityDuration: {
        ...animationArg,
        name: 'Overlay Animation Opacity Duration',
        description:
            'The duration overwhich the Overlay will animate from its start to end opacity.',
    },
    overlayAnimationVisibilityDuration: {
        ...animationArg,
        name: 'Overlay Animation Visibility Duration',
        description:
            'The duration overwhich the Overlay will animate from its start to end visibility.',
    },
};
