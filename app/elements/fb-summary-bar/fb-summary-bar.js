(function (document) {
  'use strict';


  class FbSummaryBar extends Polymer.Element {
    static get is() {
      return 'fb-summary-bar';
    }

    static get properties() {
      return {
        color: {
          type: String
        },
        label: {
          type: String
        },
        amount: {
          type: String
        },
        currency: {
          type: String
        },
        sizebar: {
          type: String
        }
      };
    }

    ready() {
      super.ready();
    }

  }

  customElements.define(FbSummaryBar.is, FbSummaryBar);

}(document));
