(function (document) {
  'use strict';


  class FbCardDetail extends Polymer.Element {
    static get is() {
      return 'fb-card-detail';
    }

    static get properties() {
      return {
        name: String,
      };
    }


    ready() {
      super.ready();
    }

  }

  customElements.define(FbCardDetail.is, FbCardDetail);

}(document));

