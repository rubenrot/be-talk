(function (document) {
  'use strict';


  class GlobalPositionView extends Polymer.Element {
    static get is() {
      return 'global-position-view';
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
        mortgages: {
          type: Array,
          value: [],
          observer: '_testCards'
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


  }

  customElements.define(GlobalPositionView.is, GlobalPositionView);

}(document));

