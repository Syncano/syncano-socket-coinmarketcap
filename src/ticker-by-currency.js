import Syncano from '@syncano/core';
import Validator from '@syncano/validate';
import coinMarketCapActions from './utility/common';

export default async (ctx) => {
  const { response } = new Syncano(ctx);
  const validator = new Validator(ctx);
  const requestMethod = ctx.meta.request.REQUEST_METHOD;
  const { id, convert, ...unwantedArgs } = ctx.args;

  try {
    await validator.validateRequest();
    if (requestMethod === 'GET') {
      const { statusText, status, data, argError } = await coinMarketCapActions(
        `ticker/${id}`,
        ctx.args,
        { convert },
        unwantedArgs
      );
      return response.json({
        message: statusText,
        statusCode: status,
        data,
        argError
      });
    } return response.json({ message: 'Make sure to use GET request method.' }, 400);
  } catch ({ statusText, status, data, messages }) {
    return response.json({
      message: statusText,
      statusCode: status,
      data,
      messages
    });
  }
};
