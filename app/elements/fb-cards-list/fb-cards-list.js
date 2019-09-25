(function (document) {
  'use strict';


  class FbCardsList extends Polymer.Element {
    static get is() {
      return 'fb-cards-list';
    }

    static get properties() {
      return {
        name: String,
        cards: {
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


  }

  customElements.define(FbCardsList.is, FbCardsList);

}(document));

