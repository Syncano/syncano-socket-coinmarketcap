import Syncano from '@syncano/core';
import coinMarketCapActions from './utility/common';

export default async (ctx) => {
  const { response } = new Syncano(ctx);
  const requestMethod = ctx.meta.request.REQUEST_METHOD;
  const { start, limit, convert, ...unwantedArgs } = ctx.args;

  try {
    if (requestMethod === 'GET') {
      const { statusText, status, data, argError } = await coinMarketCapActions(
        'ticker',
        ctx.args,
        { start, limit, convert },
        unwantedArgs
      );
      return response.json({
        message: statusText,
        statusCode: status,
        data,
        argError
      });
    } return response.json({ message: 'Make sure to use GET request method.' }, 400);
  } catch ({ statusText, status, data }) {
    return response.json({
      message: statusText,
      statusCode: status,
      data
    });
  }
};
