(function (document) {
  'use strict';

  // Define the element's API using an ES2015 class
  class PositionDM extends Polymer.Element {
    static get is() {
      return 'position-dm';
    }

    // Declare properties for the element's public API
    static get properties() {
      return {
        number: {
          type: Number,
          notify: true
        },
        accounts: {
          type: Array,
          value: [],
          notify: true
        },
        cards: {
          type: Array,
          value: [],
          notify: true
        },
        mortgages: {
          type: Array,
          value: [],
          notify: true
        },
        movements: {
          type: Array,
          value: [],
          notify: true
        },
        AWSHost: {
          type: String,
          value: ''
        }
      };
    }

    ready() {
      super.ready();
    }


    getBehaviors() {
      return CellsBehaviors.MyRoutesBehavior;
    }


    getPositionBalance(evt) {
      this._doRequest();
    }

    getAccounts(evt) {
      console.log('Request service getAccounts');
      this._doRequestAccounts();
    }

    getCards(evt) {
      this._doRequestCards();
    }

    getMortgages(evt) {
      this._doRequestMortgages();
    }

    getAccountDetail(evt) {
      this._doAccountDetailRequest();
    }

    reloadAccountDetail(evt) {
      this._doAccountDetailRequest();
    }

    _doRequest() {

      this.AWSHost = this.getBehaviors().getHost();

      var token = this._getHackatoonsToken();
      this.$.positionDP.headers = {
        'x-jwt-auth': token
      };

      this.$.positionDP.body = {
        customerId: '16291993N'
      };
      this.$.positionDP.generateRequest();
    }


    _onRequestOk(evt) {
      console.log(evt);
      const data = evt.detail.totalCuentas;
    }

    _doRequestAccounts(levelDiscipline, country) {


      this.AWSHost = this.getBehaviors().getHost();

      var token = this._getHackatoonsToken();
      this.$.accountsDP.headers = {
        'x-jwt-auth': token
      };

      this.$.accountsDP.body = {
        customerId: '16291993N'
      };
      this.$.accountsDP.generateRequest();
    }

    _onRequestOkAccounts(evt) {
      const accounts = evt.detail.cuentas;
      this.accounts = Object.assign([], accounts);
      /* this.dispatchEvent(new CustomEvent('load-accounts',
         {
           detail:
             {
               accounts: accounts
             }
         }));*/
    }

    _doRequestCards(levelDiscipline, country) {

      this.AWSHost = this.getBehaviors().getHost();

      var token = this._getHackatoonsToken();
      this.$.cardsDP.headers = {
        'x-jwt-auth': token
      };

      this.$.cardsDP.body = {
        customerId: '16291993N'
      };
      this.$.cardsDP.generateRequest();
    }

    _onRequestOkCards(evt) {
      const cards = evt.detail.tarjetas;
      this.cards = Object.assign([], cards);
    }

    _doRequestMortgages(levelDiscipline, country) {

      this.AWSHost = this.getBehaviors().getHost();

      var token = this._getHackatoonsToken();
      this.$.mortgagesDP.headers = {
        'x-jwt-auth': token
      };

      this.$.mortgagesDP.body = {
        disciplines: '',
        countryEnum: ''
      };
      this.$.mortgagesDP.generateRequest();
    }

    _onRequestOkMortgages(evt) {
      const mortgages = evt.detail.items;
      this.mortgages = Object.assign([], mortgages);
    }

    _getHackatoonsToken() {
      var token = '';
      if (window.localStorage.hackatoons !== undefined) {
        token = window.localStorage.hackatoons;
      }

      return token;
    }


    _doAccountDetailRequest(evt) {
      console.log(evt);
      var accountId = window.top.accountId;
      console.log('_doAccountDetailRequest');
      console.log(accountId);
      this._doRequestAccountDetail('IBAN-0');
    }


    _onRequestOkAccountDetail(evt) {
      const movimientos = evt.detail.movimientos;
      this.movements = Object.assign([], movimientos);
      console.log(movimientos);
      //console.log(data);

      this.dispatchEvent(new CustomEvent('load-account-detail',
        {
          detail:
            {
              movimientos: movimientos
            }
        }));

    }

    _doRequestAccountDetail(accountId) {

      this.AWSHost = this.getBehaviors().getHost();

      var token = this._getHackatoonsToken();
      this.$.accountDetailDP.headers = {
        'x-jwt-auth': token
      };

      this.$.accountDetailDP.body = {
        customerId: accountId
      };
      this.$.accountDetailDP.generateRequest();
    }


  }

  // Register the custom element with the browser
  customElements.define(PositionDM.is, PositionDM);

}(document));
