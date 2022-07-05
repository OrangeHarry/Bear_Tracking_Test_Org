/**
 * Created by i2max-HeonminHa on 2022-07-05.
 */

import { LightningElement,wire,track } from 'lwc';
 import {refreshApex} from '@salesforce/apex';
 import getAllOps from '@salesforce/apex/OpportunityController.fetchOpportunityList';
 import deleteOpportunities from '@salesforce/apex/OpportunityController.deleteOpportunities';
 import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 const COLS=[
   {label:'Id',fieldName:'Id', type:'text'},
   {label:'Name',fieldName:'Name', type:'text'},
   {label:'Stage',fieldName:'StageName', type:'text'},
   {label:'Amount',fieldName:'Amount', type:'currency'}
 ];

 export default class DataTableInLwc extends LightningElement {

     cols=COLS;
     @wire(getAllOps)
     oppList;


     deleteRecord(){
         var selectedRecords =
         this.template.querySelector("lightning-datatable").getSelectedRows();
         deleteOpportunities({oppList: selectedRecords}).then(result=>{
         return refreshApex(this.oppList);
         })
         .catch(error=>{
            alert('Cloud not delete'+JSON.stringify(error));
         })
     }

 }
