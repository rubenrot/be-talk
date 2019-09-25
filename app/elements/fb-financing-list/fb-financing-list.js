(function (document) {
  'use strict';


  class FbFinancingList extends Polymer.Element {
    static get is() {
      return 'fb-financing-list';
    }

    static get properties() {
      return {
        name: String,
        mortgages: {
          type: Array,
          value: [],
          observer: '_test'
        },
        domif: {
          type: Boolean,
          value: true
        }
      };
    }


    ready() {
      super.ready();
    }


    _test(newValue, oldValue) {

    }

    _showMortgages() {
      this.domif = !this.domif;
      this.dispatchEvent(new CustomEvent('show-mortgages',
        {
          bubbles: true,
          composed: true,
          detail: ''

        }));
    }

  }

  customElements.define(FbFinancingList.is, FbFinancingList);

}(document));

