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
        movements: {
          type: Array,
          value: [],
          notify: true
        },
        ReqHost: {
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

    getAccounts(evt) {
      console.log('Request service getAccounts');
      this._doRequestAccounts();
    }

    getCards(evt) {
      this._doRequestCards();
    }


    getAccountDetail(evt) {
      this._doAccountDetailRequest();
    }

    reloadAccountDetail(evt) {
      this._doAccountDetailRequest();
    }

    _doRequest() {

      this.ReqHost = this.getBehaviors().getHost();

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


      this.ReqHost = this.getBehaviors().getHost();


      var token = this._getHackatoonsToken();
      this.$.accountsDP.headers = {
        'x-jwt-auth': token
      };

      if (window.location.hostname === 'localhost') {
        this.$.accountsDP.method = 'GET';
      } else {
        this.$.accountsDP.method = 'POST';
      }

      this.$.accountsDP.body = {
        customerId: '16291993N'
      };
      this.$.accountsDP.generateRequest();
    }

    _onRequestOkAccounts(evt) {
      const accounts = evt.detail.positions;

      console.log('Construcción de la cuentas');
      this.accounts = Object.assign([], this.getDashAccounts(accounts));
      /* this.dispatchEvent(new CustomEvent('load-accounts',
         {
           detail:
             {
               accounts: accounts
             }
         }));*/
    }

    _doRequestCards(levelDiscipline, country) {

      this.ReqHost = this.getBehaviors().getHost();

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

      this.ReqHost = this.getBehaviors().getHost();

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

      this.ReqHost = this.getBehaviors().getHost();

      var token = this._getHackatoonsToken();
      this.$.accountDetailDP.headers = {
        'x-jwt-auth': token
      };

      this.$.accountDetailDP.body = {
        customerId: accountId
      };
      this.$.accountDetailDP.generateRequest();
    }


    getDashAccounts(objectResponseASO) {
      var me = this;
      var accounts = [];
      objectResponseASO.forEach(function (position) {
        if (position.balanceAgrupation === 'Account') {
          accounts.push(me.getJSONAccountMapped(position));
        }
      });

      return accounts;
    }

    getJSONAccountMapped(item, processCode, serviceCode, configApp) {
      var positionAccountObject;

      var itemContract = this.checkValueDefined(item.contract.account, item.contract);

      //Rellenamos la informacion de la posicion de la cuenta
      positionAccountObject = this.generatePositionInvestmentInfoAccount(
        item, itemContract.formats.iban, 'Cuenta',
        this.checkValueDefinedComplex(itemContract.currentBalanceLocalCurrency, 'amount', 0),
        this.checkValueDefinedComplex(itemContract.currentBalanceLocalCurrency, 'currency', 'EUR'),
        this.checkValueDefinedComplex(itemContract.availableBalance, 'amount', 0),
        this.checkValueDefinedComplex(itemContract.availableBalance, 'currency', 'EUR'));

      return positionAccountObject;

    }

    checkValueDefined(valueDefined, valueAlternative) {
      return (undefined !== valueDefined ? valueDefined : valueAlternative);
    }

    checkValueDefinedComplex(valueDefined, returnValueDefined, returnValueAlternative) {
      return (undefined !== valueDefined ? (undefined !== Object.getOwnPropertyDescriptor(valueDefined, returnValueDefined) ? Object.getOwnPropertyDescriptor(valueDefined, returnValueDefined).value : returnValueAlternative) : returnValueAlternative);
    }

    generatePositionInvestmentInfoAccount(position, contractDescription, contractType, currentAmount, currentCurrency, avaliableAmount, avaliableCurrency) {
      position = this.generatePositionInvestmentInfo(position, contractDescription, contractType, currentAmount, currentCurrency);
      position.contract.availableBalance = {};
      position.contract.availableBalance.amount = avaliableAmount;
      position.contract.availableBalance.currency = {};
      if (avaliableCurrency.id === undefined) {
        position.contract.availableBalance.currency.id = avaliableCurrency;
      } else {
        position.contract.availableBalance.currency.id = avaliableCurrency.id;
      }
      return position;
    }

    generatePositionInvestmentInfo(position, contractDescription, contractType, amount, currency, processCode, serviceCode, configApp, dueDate) {
      if (undefined === position.contract) {
        position.contract = {};
      }
      position.contract.contractDescription = contractDescription;
      position.contract.contractType = contractType;
      position.contract.balance = {};
      position.contract.balance.amount = amount;
      position.contract.balance.currency = {};
      if (currency.id === undefined) {
        position.contract.balance.currency.id = currency;
      } else {
        position.contract.balance.currency.id = currency.id;
      }
      //Indicador de orden
      position.contract.defaultOrderIndex2 = contractDescription;
      position.processCode = processCode;
      position.serviceCode = serviceCode;
      if (dueDate !== undefined) {
        position.contract.dueDate = dueDate;
      }
      return position;
    }


  }

  // Register the custom element with the browser
  customElements.define(PositionDM.is, PositionDM);

}(document));
