/**
 * Created by i2max-HeonminHa on 2022-07-05.
 */

public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<opportunity> fetchOpportunityList(){
//       String testName = 'Edge SLA';
//        if(testName == 'Edge SLA'){
//            return [SELECT Id, Name, StageName,Amount From Opportunity LIMIT 15];
//        }
        return [SELECT Id, Name, StageName,Amount From Opportunity LIMIT 10];
    }
    @AuraEnabled
    public static void deleteOpportunities(List<opportunity> oppList){
        delete oppList;
    }
}
