export const currencies = [
  {
    id: 1, enName: 'EGP', arName: 'جنية مصري', value: 1, "symbol": "EGP",
    "conversions": {
      "USD": 0.063,
      "EUR": 0.053,
      "GBP": 0.045,
      "CAD": 0.076,
      "AUD": 0.081,
      "JPY": 7.05,
      "INR": 4.18
    }
  },
  {
    id: 1, enName: 'USD', arName: 'دولار امريكي', value: 30,
    "symbol": "$",
    "conversions": {
      "EGP": 15.75,
      "EUR": 0.83,
      "GBP": 0.71,
      "CAD": 1.21,
      "AUD": 1.29,
      "JPY": 109.53,
      "INR": 73.63
    }
  },
  {
    id: 1, enName: 'EUR', arName: 'يورو', value: 22,
    "symbol": "€",
    "conversions": {
      "EGP": 18.99,
      "USD": 1.21,
      "GBP": 0.86,
      "CAD": 1.47,
      "AUD": 1.57,
      "JPY": 132.78,
      "INR": 89.28
    }
  },
  {
    id: 1, enName: 'GBP', arName: 'جنية استرليني', value: 43,
    "symbol": "£",
    "conversions": {
      "EGP": 22.20,
      "USD": 1.41,
      "EUR": 1.16,
      "CAD": 1.71,
      "AUD": 1.83,
      "JPY": 155.16,
      "INR": 104.23
    }
  },
  {
    id: 1, enName: 'INR', arName: 'الروبية الهندية', "symbol": "₹",
    "conversions": {
      "EGP": 0.24,
      "USD": 0.014,
      "EUR": 0.011,
      "GBP": 0.0096,
      "CAD": 0.017,
      "AUD": 0.018,
      "JPY": 1.49
    }
  },
  {
    id: 1, enName: 'AUD', arName: 'دولار استرليني', value: 56, "symbol": "AU$",
    "conversions": {
      "EGP": 12.35,
      "USD": 0.78,
      "EUR": 0.64,
      "GBP": 0.55,
      "CAD": 0.94,
      "JPY": 81.62,
      "INR": 54.90
    }
  },
  {
    id: 1, enName: 'JPY', arName: 'الين الياباني', "symbol": "¥",
    "conversions": {
      "EGP": 0.14,
      "USD": 0.0091,
      "EUR": 0.0075,
      "GBP": 0.0064,
      "CAD": 0.012,
      "AUD": 0.012,
      "INR": 0.67
    }
  },
]


// {
//   "USD": {
//     "name": "US Dollar",
//     "symbol": "$",
//     "conversions": {
//       "EGP": 15.75,
//       "EUR": 0.83,
//       "GBP": 0.71,
//       "CAD": 1.21,
//       "AUD": 1.29,
//       "JPY": 109.53,
//       "INR": 73.63
//     }
//   },
//   "EUR": {
//     "name": "Euro",
//     "symbol": "€",
//     "conversions": {
//       "EGP": 18.99,
//       "USD": 1.21,
//       "GBP": 0.86,
//       "CAD": 1.47,
//       "AUD": 1.57,
//       "JPY": 132.78,
//       "INR": 89.28
//     }
//   },
//   "GBP": {
//     "name": "British Pound",
//     "symbol": "£",
//     "conversions": {
//       "EGP": 22.20,
//       "USD": 1.41,
//       "EUR": 1.16,
//       "CAD": 1.71,
//       "AUD": 1.83,
//       "JPY": 155.16,
//       "INR": 104.23
//     }
//   },
//   "CAD": {
//     "name": "Canadian Dollar",
//     "symbol": "CA$",
//     "conversions": {
//       "EGP": 13.22,
//       "USD": 0.82,
//       "EUR": 0.68,
//       "GBP": 0.59,
//       "AUD": 1.07,
//       "JPY": 85.91,
//       "INR": 57.68
//     }
//   },
//   "AUD": {
//     "name": "Australian Dollar",
//     "symbol": "AU$",
//     "conversions": {
//       "EGP": 12.35,
//       "USD": 0.78,
//       "EUR": 0.64,
//       "GBP": 0.55,
//       "CAD": 0.94,
//       "JPY": 81.62,
//       "INR": 54.90
//     }
//   },
//   "JPY": {
//     "name": "Japanese Yen",
//     "symbol": "¥",
//     "conversions": {
//       "EGP": 0.14,
//       "USD": 0.0091,
//       "EUR": 0.0075,
//       "GBP": 0.0064,
//       "CAD": 0.012,
//       "AUD": 0.012,
//       "INR": 0.67
//     }
//   },
//   "INR": {
//     "name": "Indian Rupee",
//     "symbol": "₹",
//     "conversions": {
//       "EGP": 0.24,
//       "USD": 0.014,
//       "EUR": 0.011,
//       "GBP": 0.0096,
//       "CAD": 0.017,
//       "AUD": 0.018,
//       "JPY": 1.49
//     }
//   },
//   "EGP": {
//     "name": "Egyptian Pound",
//     "symbol": "EGP",
//     "conversions": {
//       "USD": 0.063,
//       "EUR": 0.053,
//       "GBP": 0.045,
//       "CAD": 0.076,
//       "AUD": 0.081,
//       "JPY": 7.05,
//       "INR": 4.18
//     }
//   }
// }








export const currenciesData = [
  {
    "name": "United States Dollar",
    "shortName": "USD",
    "image": "../../../assets/images/flag/us.svg",
    "amount": 100000,
    "convertTo": [
      {
        "name": "Euro",
        "shortName": "EUR",
        "image": "../../../assets/images/flag/eur.jpg",
        "conversionRate": 0.85,
        "convertedAmount": 85000,
        "parentConversionRate": 1.18
      },
      {
        "name": "British Pound",
        "shortName": "GBP",
        "image": "../../../assets/images/flag/gbp.jpg",
        "conversionRate": 0.72,
        "convertedAmount": 72000,
        "parentConversionRate": 1.39
      },
      {
        "name": "Japanese Yen",
        "shortName": "JPY",
        "image": "../../../assets/images/flag/jpy.jpg",
        "conversionRate": 109.35,
        "convertedAmount": 10935000,
        "parentConversionRate": 0.0091
      },
      // {
      //   "name": "Egyptian Pound",
      //   "shortName": "EGP",
      //   "image": "../../../assets/images/flag/eg.svg",
      //   "conversionRate": 16.79,
      //   "convertedAmount": 1679000,
      //   "parentConversionRate": 0.059
      // }
    ]
  },
  {
    "name": "Euro",
    "shortName": "EUR",
    "image": "../../../assets/images/flag/eur.jpg",
    "amount": 85000,
    "convertTo": [
      // {
      //   "name": "United States Dollar",
      //   "shortName": "USD",
      //   "image": "../../../assets/images/flag/us.svg",
      //   "conversionRate": 1.18,
      //   "convertedAmount": 100300,
      //   "parentConversionRate": 0.85
      // },
      {
        "name": "British Pound",
        "shortName": "GBP",
        "image": "../../../assets/images/flag/gbp.jpg",
        "conversionRate": 0.85,
        "convertedAmount": 72250,
        "parentConversionRate": 1.39
      },
      {
        "name": "Japanese Yen",
        "shortName": "JPY",
        "image": "../../../assets/images/flag/jpy.jpg",
        "conversionRate": 129.39,
        "convertedAmount": 11005150,
        "parentConversionRate": 0.0091
      },
      {
        "name": "Egyptian Pound",
        "shortName": "EGP",
        "image": "../../../assets/images/flag/eg.svg",
        "conversionRate": 19.88,
        "convertedAmount": 1692800,
        "parentConversionRate": 0.059
      }
    ]
  },
  {
    "name": "British Pound",
    "shortName": "GBP",
    "image": "../../../assets/images/flag/gbp.jpg",
    "amount": 72000,
    "convertTo": [
      {
        "name": "United States Dollar",
        "shortName": "USD",
        "image": "../../../assets/images/flag/us.svg",
        "conversionRate": 1.39,
        "convertedAmount": 100080,
        "parentConversionRate": 0.72
      },
      {
        "name": "Euro",
        "shortName": "EUR",
        "image": "../../../assets/images/flag/eur.jpg",
        "conversionRate": 1.18,
        "convertedAmount": 85080,
        "parentConversionRate": 0.85
      },
      // {
      //   "name": "Japanese Yen",
      //   "shortName": "JPY",
      //   "image": "../../../assets/images/flag/jpy.jpg",
      //   "conversionRate": 151.91,
      //   "convertedAmount": 10950720,
      //   "parentConversionRate": 0.0091
      // },
      {
        "name": "Egyptian Pound",
        "shortName": "EGP",
        "image": "../../../assets/images/flag/eg.svg",
        "conversionRate": 27.14,
        "convertedAmount": 1954080,
        "parentConversionRate": 0.059
      }
    ]
  }
]

// export const currenciesData = [
//   {
//     "name": "United States Dollar",
//     "shortName": "USD",
//     "image": "../../../assets/images/flag/us.svg",
//     "amount": 100000,
//     "convertTo": [
//       {
//         "name": "Euro",
//         "shortName": "EUR",
//         "image": "../../../assets/images/flag/eur.jpg",
//         "conversionRate": 0.85,
//         "convertedAmount": 85000
//       },
//       {
//         "name": "British Pound",
//         "shortName": "GBP",
//         "image": "../../../assets/images/flag/gbp.jpg",
//         "conversionRate": 0.72,
//         "convertedAmount": 72000
//       },
//       {
//         "name": "Japanese Yen",
//         "shortName": "JPY",
//         "image": "../../../assets/images/flag/jpy.jpg",
//         "conversionRate": 109.35,
//         "convertedAmount": 10935000
//       },
//       {
//         "name": "Egyptian Pound",
//         "shortName": "EGP",
//         "image": "../../../assets/images/flag/eg.svg",
//         "conversionRate": 16.79,
//         "convertedAmount": 1679000
//       }
//     ]
//   },
//   {
//     "name": "Euro",
//     "shortName": "EUR",
//     "image": "../../../assets/images/flag/eur.jpg",
//     "amount": 85000,
//     "convertTo": [
//       {
//         "name": "United States Dollar",
//         "shortName": "USD",
//         "image": "../../../assets/images/flag/us.svg",
//         "conversionRate": 1.18,
//         "convertedAmount": 100300
//       },
//       {
//         "name": "British Pound",
//         "shortName": "GBP",
//         "image": "../../../assets/images/flag/gbp.jpg",
//         "conversionRate": 0.85,
//         "convertedAmount": 72250
//       },
//       {
//         "name": "Japanese Yen",
//         "shortName": "JPY",
//         "image": "../../../assets/images/flag/jpy.jpg",
//         "conversionRate": 129.39,
//         "convertedAmount": 11005150
//       },
//       {
//         "name": "Egyptian Pound",
//         "shortName": "EGP",
//         "image": "../../../assets/images/flag/eg.svg",
//         "conversionRate": 19.88,
//         "convertedAmount": 1692800
//       }
//     ]
//   },
//   {
//     "name": "British Pound",
//     "shortName": "GBP",
//     "image": "../../../assets/images/flag/gbp.jpg",
//     "amount": 72000,
//     "convertTo": [
//       {
//         "name": "United States Dollar",
//         "shortName": "USD",
//         "image": "../../../assets/images/flag/us.svg",
//         "conversionRate": 1.39,
//         "convertedAmount": 100080
//       },
//       {
//         "name": "Euro",
//         "shortName": "EUR",
//         "image": "../../../assets/images/flag/eur.jpg",
//         "conversionRate": 1.18,
//         "convertedAmount": 85080
//       },
//       {
//         "name": "Japanese Yen",
//         "shortName": "JPY",
//         "image": "../../../assets/images/flag/jpy.jpg",
//         "conversionRate": 151.91,
//         "convertedAmount": 10950720
//       },
//       {
//         "name": "Egyptian Pound",
//         "shortName": "EGP",
//         "image": "../../../assets/images/flag/eg.svg",
//         "conversionRate": 23.26,
//         "convertedAmount": 1672320
//       }
//     ]
//   },
//   {
//     "name": "Japanese Yen",
//     "shortName": "JPY",
//     "image": "../../../assets/images/flag/jpy.jpg",
//     "amount": 10935000,
//     "convertTo": [
//       {
//         "name": "United States Dollar",
//         "shortName": "USD",
//         "image": "../../../assets/images/flag/us.svg",
//         "conversionRate": 0.0091,
//         "convertedAmount": 9948.85
//       },
//       {
//         "name": "Euro",
//         "shortName": "EUR",
//         "image": "../../../assets/images/flag/eur.jpg",
//         "conversionRate": 0.0077,
//         "convertedAmount": 8402.95
//       },
//       {
//         "name": "British Pound",
//         "shortName": "GBP",
//         "image": "../../../assets/images/flag/gbp.jpg",
//         "conversionRate": 0.0067,
//         "convertedAmount": 7314.45
//       },
//       {
//         "name": "Egyptian Pound",
//         "shortName": "EGP",
//         "image": "../../../assets/images/flag/eg.svg",
//         "conversionRate": 0.0995,
//         "convertedAmount": 10883.33
//       }
//     ]
//   },
//   {
//     "name": "Egyptian Pound",
//     "shortName": "EGP",
//     "image": "../../../assets/images/flag/eg.svg",
//     "amount": 1679000,
//     "convertTo": [
//       {
//         "name": "United States Dollar",
//         "shortName": "USD",
//         "image": "../../../assets/images/flag/us.svg",
//         "conversionRate": 0.059,
//         "convertedAmount": 99110
//       },
//       {
//         "name": "Euro",
//         "shortName": "EUR",
//         "image": "../../../assets/images/flag/eur.jpg",
//         "conversionRate": 0.053,
//         "convertedAmount": 89267
//       },
//       {
//         "name": "British Pound",
//         "shortName": "GBP",
//         "image": "../../../assets/images/flag/gbp.jpg",
//         "conversionRate": 0.043,
//         "convertedAmount": 72497
//       },
//       {
//         "name": "Japanese Yen",
//         "shortName": "JPY",
//         "image": "../../../assets/images/flag/jpy.jpg",
//         "conversionRate": 10.05,
//         "convertedAmount": 16879295
//       }
//     ]
//   }
// ]
