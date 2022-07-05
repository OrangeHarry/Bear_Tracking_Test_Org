 import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import IsCustomerPortal_FIELD from '@salesforce/schema/Account.IsCustomerPortal';
import IsPartner_FIELD from '@salesforce/schema/Account.IsPartner';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Annual Revenue', fieldName: REVENUE_FIELD.fieldApiName, type: 'currency' },
    { label: 'Industry', fieldName: INDUSTRY_FIELD.fieldApiName, type: 'text' },
    { label: 'IsCustomerPortal', fieldName: IsCustomerPortal_FIELD.fieldApiName, type: 'boolean' },
    { label: 'IsPartner', fieldName: IsPartner_FIELD.fieldApiName, type: 'boolean' },

];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getAccounts)
    accounts;
    get errors() {
        return (this.accounts.error) ?
            reduceErrors(this.accounts.error) : [];
    }


}