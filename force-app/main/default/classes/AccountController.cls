public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getMasterList(String recordMasterNumber) {
        return [SELECT Id, Name FROM Account WHERE Master_Account_Number__c = 'recordMasterNumber'];
    }
}
