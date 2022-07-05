/**
 * Created by i2max-HeonminHa on 2022-07-05.
 */

import { LightningElement } from 'lwc';

export default class LwcCheckboxGroup extends LightningElement {
    value = [];

    get options() {
        return [
            { label: 'Salesforce Aura', value: 'option1' },
            { label: 'Salesforce LWC', value: 'option2' },
            { label: 'Tutorial W3web.net', value: 'option3' },
        ];
    }
}