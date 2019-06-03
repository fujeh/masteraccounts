import { LightningElement, wire } from 'lwc';
import getMasterList from '@salesforce/apex/AccountController.getMasterList';
import MASTER_ACCOUNT_FIELD from '@salesforce/schema/Account.Master_Account_Number__c';

export default class MasterAccounts extends LightningElement {
    @wire(getMasterList, { recordId: '$recordId', fields: [MASTER_ACCOUNT_FIELD] }) account;
}