export const WALLET = {
  "wallet": 0x00,
  "totalEarning": 0,
  "totalNFT": 0,
  "unclaimed": 0,
  "nextClaimDate": null,
  "featured_nft": [{"id": 0, "img": ""}],
  "report": {
    "earning": {
      "type": "",
      "data": []
    },
    "elo": {
      "type": "date",
      "data": []
    },
    "ranking": {
      "type": "date",
      "data": []
    }
  },
  "gameTX": {
    results: [],
    count: 0
  },
  "premium": {
    "top_ranking": null,
    "lifetime_invest": 0.0,
    "lifetime_revenue": 0.0,
    "lifetime_profit": 0.0,
    "lifetime_roi": 0
  },
  related: []
}

export const DASHBOARD = [
  {
    "id": 0,
    "name": "",
    "options": {
      "tableField": [{"name": "", "field": ""}]
    },
    "scholarship": 0,
    "wallets": [{
      "name": "",
      "totalEarning": 0,
      "totalNFT": 0,
      "rank": 0,
      "elo": 0,
      "unclaimed": 0,
      "nextClaimDate": null,
    }]
  }
]
