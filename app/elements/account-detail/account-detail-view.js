(function (document) {
  'use strict';


  class AccountDetailView extends Polymer.Element {
    static get is() {
      return 'account-detail-view';
    }

    static get properties() {
      return {
        name: String,
        movements: {
          type: Array,
          value: [{
            "eventType": "deposit",
            "iban": "IBAN-0",
            "amount": {
              "currency": "EUR",
              "value": 30.0
            },
            "balance": {
              "currency": "EUR",
              "value": 2706285.0
            },
            "date": "2017-10-08T00:00:00Z"
          },
            {
              "eventType": "deposit",
              "iban": "IBAN-0",
              "amount": {
                "currency": "EUR",
                "value": 20.0
              },
              "balance": {
                "currency": "EUR",
                "value": 2706255.0
              },
              "date": "2017-10-08T00:00:00Z"
            },
            {
              "eventType": "deposit",
              "iban": "IBAN-0",
              "amount": {
                "currency": "EUR",
                "value": 240000.0
              },
              "balance": {
                "currency": "EUR",
                "value": 300000.0
              },
              "date": "2017-10-05T00:00:00Z"
            },
            {
              "eventType": "deposit",
              "iban": "IBAN-0",
              "amount": {
                "currency": "EUR",
                "value": 38.0
              },
              "balance": {
                "currency": "EUR",
                "value": 2706234.0
              },
              "date": "2017-10-08T00:00:00Z"
            },
            {
              "eventType": "deposit",
              "iban": "IBAN-0",
              "amount": {
                "currency": "EUR",
                "value": 13.0
              },
              "balance": {
                "currency": "EUR",
                "value": 2706195.0
              },
              "date": "2017-10-08T00:00:00Z"
            },
            {
              "eventType": "deposit",
              "iban": "IBAN-0",
              "amount": {
                "currency": "EUR",
                "value": 60000.0
              },
              "balance": {
                "currency": "EUR",
                "value": 60000.0
              },
              "date": "2017-10-05T00:00:00Z"
            }],
          observer: '_test'
        }
      };
    }


    ready() {
      super.ready();
    }

    _test(newValue, oldValue) {
      //this.movements = Object.assign([], newValue);
      console.log('movements');
      console.log(newValue);
    }


    geAccountDetail(evt) {
      console.log(evt.detail);
    }

    _detail() {

    }


  }

  customElements.define(AccountDetailView.is, AccountDetailView);

}(document));

