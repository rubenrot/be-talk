(function (document) {
  'use strict';


  class FbMortgagesList extends Polymer.Element {
    static get is() {
      return 'fb-mortgages-list';
    }

    static get properties() {
      return {
        name: String,
        mortgages: {
          type: Array,
          value: [],
          observer: '_test'
        }
      };
    }


    ready() {
      super.ready();
    }


    _test(newValue, oldValue) {

    }

    _setScale(amount) {

      const amountLength = amount.toString().split('.')[0].length;

      if (amountLength >= 13) {
        // Working with billions (eg: 1B €)
        return 9;
      } else if (amountLength >= 9) {
        // Working with millions (eg: 1M €)
        return 6;
      } else {
        // Working with the whole digit (eg: 100000 €)
        return 0;
      }
    }

  }

  customElements.define(FbMortgagesList.is, FbMortgagesList);

}(document));

