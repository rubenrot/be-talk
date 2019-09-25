(function (document) {
  'use strict';


  class FbMainSummaryHealth extends Polymer.Element {
    static get is() {
      return 'fb-main-summary-health';
    }

    static get properties() {
      return {
        /**
         * Quantities object coming from the service with the overall guarantee
         * lines state
         * @type {Object}
         */
        dataset: {
          type: Object
        },

        _investment: {
          type: String
        },

        _financing: {
          type: String
        },

        _investmentSize: {
          type: String
        },

        _financingSize: {
          type: String
        },

        _investmentSizeComputed: {
          type: String,
          computed: '_calculateSize()'
        },
        _financingSizeComputed: {
          type: String,
          computed: '_calculateSize()'
        }

      };
    }


    ready() {
      super.ready();
    }


    _calculateSize() {
      var investment = 253241;
      var financing = 700000;
      this._investment = '253241';
      this._financing = '700000';

      if (investment > financing) {
        this._investmentSize = '100';
        var percentage = (financing * 100 / investment);
        if (percentage < 10) {
          percentage = 20;
        }
        this._financingSize = percentage;
      } else {
        this._financingSize = '100';
        var percentage = (investment * 100 / financing);
        if (percentage < 10) {
          percentage = 20;
        }
        this._investmentSize = percentage;
      }

    }


  }

  customElements.define(FbMainSummaryHealth.is, FbMainSummaryHealth);

}(document));
