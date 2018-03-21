import { assert, expect } from 'chai';
import { run, generateMeta } from '@syncano/test';

let meta = generateMeta('ticker');
let args = {};
const id = 'bitcoin';

describe('RETURNS OVERVIEW OF THE STATE OF THE CRYPTOCURRENCY MARKET', () => {
  it('throws an error when POST request method is passed', async () => {
    meta.request.REQUEST_METHOD = 'POST';
    const { data, code } = await run('ticker', { args: {}, meta });
    expect(code).to.equal(400);
    expect(data.message).to.equal('Make sure to use GET request method.');
  });

  it('throws an error if an unlisted parameter in api documentation is entered', async () => {
    args = {
      random: 'anything'
    };
    meta.request.REQUEST_METHOD = 'GET';
    const { data: { argError } } = await run('ticker', { args, meta });
    expect(argError).to.equal('You can only use the optional value(s) listed in ticker method. Check https://coinmarketcap.com/api/ for more information.');
  });

  it('returns an Array of data when ticker is successful', async () => {
    args = {
      limit: 2,
    };
    meta.request.REQUEST_METHOD = 'GET';
    const { data: { data, message, statusCode } } = await run('ticker', { args, meta });
    expect(message).to.equal('OK');
    expect(statusCode).to.equal(200);
    expect(data).to.be.an.instanceof(Array);
  });

  it('returns an Array of data when ticker-by-currency is successful', async () => {
    meta = generateMeta('ticker-by-currency');
    args = {
      id: 'bitcoin',
      convert: 'NOK',
    };
    meta.request.REQUEST_METHOD = 'GET';
    const { data: { data, message, statusCode } } = await run('ticker-by-currency', { args, meta });
    expect(message).to.equal('OK');
    expect(statusCode).to.equal(200);
    expect(data).to.be.an.instanceof(Array);
  });

  it('returns an Array of data when global is successful', async () => {
    meta = generateMeta('global');
    args = {
      convert: 'NOK',
    };
    meta.request.REQUEST_METHOD = 'GET';
    const { data: { data, message, statusCode } } = await run('global', { args, meta });
    expect(message).to.equal('OK');
    expect(statusCode).to.equal(200);
    expect(data).to.be.an.instanceof(Object);
  });
});
