**FreeCodeCamp**- Information Security and Quality Assurance
------

1) SET NODE_ENV to `test` without quotes
2) Most logic will need done in `controllers/convertHandler.js` but do complete `routes/api.js`
3) You will add any security features to `server.js`
4) You will create all of the functional/unit tests in `tests/2_functional-tests.js` and `tests/1_unit-tests.js`



# 🤘🏼 Metric/Imperial Converter
Convert values between imperial and metric

- [✓] I will help prevent the client from trying to guess(sniff) the MIME type.
- [✓] I will prevent cross-site scripting (XSS) attacks.
- [✓] I can GET /api/convert with a singler parameter containing an accepted number and unit and have it converted.
- [✓] I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
- [✓] I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
- [✓] I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
- [✓] If my unit of measurement is invalid, returned will be 'invalid unit'.
- [✓] If my number is invalid, returned with will 'invalid number'.
- [✓] If both are invalid, return will be 'invalid number and unit'.
- [✓] I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
- [✓] My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format {initNum} {initial_Units} converts to {returnNum} {return_Units} with the result rounded to 5 decimals.
- [✓] All 16 unit tests are complete and passing.
- [✓] All 5 functional tests are complete and passing.

Example usage:
------
```
/api/convert?input=4gal
/api/convert?input=1/2km
/api/convert?input=5.4/3lbs
/api/convert?input=kg
```

Example return:
-----
```
{initNum: 3.1, initUnit: 'mi', returnNum: 5, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers'}
```

## Completed project:
* [https://dynamic-nebula.glitch.me/](https://dynamic-nebula.glitch.me/)

