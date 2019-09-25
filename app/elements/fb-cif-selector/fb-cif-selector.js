(function (document) {
  'use strict';


  class FbCifSelector extends Polymer.Element {
    static get is() {
      return 'fb-cif-selector';
    }

    static get properties() {
      return {
        disabled: {
          type: Boolean,
          value: false
        },

        /**
         * Property indicating if the available cif list is already loaded or not
         * @property { boolean }
         */
        loaded: {
          type: Boolean,
          value: false,
          notify: true
        },

        /**
         * Social Reason received from selected CIF
         * @type {string}
         */
        socialReason: {
          type: String,
          notify: true,
          computed: '_computeSocialReason(_selectedCif)'
        },

        /**
         * Cif received from selected CIF
         * @type {string}
         */
        cif: {
          type: String,
          notify: true,
          computed: '_computeCif(_selectedCif)'
        },

        /**
         * customer Id received from selected CIF
         * @type {string}
         */
        customerId: {
          type: String,
          notify: true
        },

        /**
         * The internal available cif list
         * @property { Array }
         * @private
         */
        _availableCifs: {
          type: Array,
          value: () => []
        },

        /**
         * The selected element of the previous property
         * @property { Object }
         * @private
         */
        _selectedCif: {
          type: Object,
          value: () => {}
        },

        /**
         * The number of times to retry if the fetch fails
         * @property { Object }
         * @private
         */
        _retryCount: {
          type: Number,
          value: 0
        },
        /**
         * Internal session data representation
         * @property { Object }
         * @private
         */
        _sessionData: {
          type: Object,
          value: () => {}
        }
      };
    }


    ready() {
      super.ready();
      var initItems = [
        {
          "id": "16291993N",
          "customerId": "0hn4hl5xmrgaed8y",
          "permissionType": {
            "id": "C"
          },
          "powerSign": {
            "id": "S"
          },
          "signLimit": {
            "currency": "EUR",
            "amount": 0.0
          },
          "alias": "Alias0",
          "isFavourite": false,
          "name": "RUBÉN ROT GONZÁLEZ"
        },
        {
          "id": "A0896010",
          "permissionType": {
            "id": "C"
          },
          "powerSign": {
            "id": "S"
          },
          "signLimit": {
            "currency": "EUR",
            "amount": 0.0
          },
          "alias": "Alias0",
          "isFavourite": false,
          "name": "MARCELINO GALÁN"
        },
        {
          "id": "A28004026",
          "customerId": "t74tq8fslhgi9jnv",
          "permissionType": {
            "id": "C"
          },
          "powerSign": {
            "id": "S"
          },
          "signLimit": {
            "currency": "EUR",
            "amount": 0.0
          },
          "alias": "Alias0",
          "isFavourite": false,
          "name": "IVÁN MEDÍN PEREZ LAGO"
        },
        {
          "id": "A48265169",
          "customerId": "6lqxf0lt9jsedblq",
          "permissionType": {
            "id": "C"
          },
          "powerSign": {
            "id": "S"
          },
          "signLimit": {
            "currency": "EUR",
            "amount": 0.0
          },
          "alias": "Alias0",
          "isFavourite": false,
          "name": "ANDRÉSARROLLO"
        }
      ];

      const mappedArrayForHtml = initItems.map((item, index) => {

          return {
            title: `${item.name} • `,
            description: `${item.id}`,
            customerId: item.customerId
          };

      });


      this._availableCifs = [].concat(mappedArrayForHtml);
      this._selectedCif = mappedArrayForHtml[0];
    }

    /**
     * Get social reason associated with selected CIF
     * @param {Object} selectedCif - cif selected
     * @return {string} social reason from selectedCif
     */
    _computeSocialReason(selectedCif) {
      if (selectedCif && selectedCif.title !== undefined) {
        return selectedCif.title;
      }
    }

    /**
     * Get CIF associated with selected CIF
     * @param {Object} selectedCif - cif selected
     * @return {string} CIF from selectedCif
     */
    _computeCif(selectedCif) {
      if (selectedCif && selectedCif.description !== undefined) {
        return selectedCif.description;
      }
    }

    _fetchData(){

    }


  }

  customElements.define(FbCifSelector.is, FbCifSelector);

}(document));
