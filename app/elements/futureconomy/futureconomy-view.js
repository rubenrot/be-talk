(function (document) {
  'use strict';


  class FutureconomyView extends Polymer.Element {
    static get is() {
      return 'futureconomy-view';
    }

    static get properties() {
      return {
        name: String,
        movements: {
          type: Array,
          value: []
        }
      };
    }


    ready() {
      super.ready();
    }



  }

  customElements.define(FutureconomyView.is, FutureconomyView);

}(document));

