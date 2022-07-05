public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts()  {
         return [
             SELECT Name, AnnualRevenue, Industry, IsCustomerPortal, IsPartner
             FROM Account
             WITH SECURITY_ENFORCED
             ORDER BY Name
         ];
    }
}