(function (document) {
  'use strict';


  class FbInversionList extends Polymer.Element {
    static get is() {
      return 'fb-inversion-list';
    }

    static get properties() {
      return {
        name: String,
        accounts: {
          type: Array,
          value: [],
          observer: '_test'
        },
        cards: {
          type: Array,
          value: [],
          observer: '_testCards'
        },
        domif: {
          type: Boolean,
          value: true
        },
        domifCards: {
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

    _testCards(newValue, oldValue) {

    }

    _getClass(animated) {
      return animated ? "animate" : "";
    }

    _showAccounts() {
      this.domif = !this.domif;
      this.dispatchEvent(new CustomEvent('show-accounts',
        {
          bubbles: true,
          composed: true,
          detail: ''

        }));

    }

    _showCards() {
      this.domifCards = !this.domifCards;
      this.dispatchEvent(new CustomEvent('show-cards',
        {
          bubbles: true,
          composed: true,
          detail: ''

        }));
    }

  }

  customElements.define(FbInversionList.is, FbInversionList);

}(document));

