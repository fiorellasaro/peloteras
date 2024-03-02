import { fetchData } from '@/app/pago/[id]/fetchData';
import PaymentStepper from '@/components/PaymentStepper';
import React from 'react'

const PaymentPage = async () => {

  let data;
  try {
    data = await fetchData(1);
  } catch (error: any) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }
  const paymentMethod = {
    QR: '"data:image/png;base64,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mDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgNhTD8BnnXPqEa6ameS629aZO7xXd/huvNu257vtfu2jO6zzHU7MAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABic86pZ1hhZpLrVs932/1WqnXmjm37t7Ltu8G7+f2F7+XEDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgNuecegY+aGbqEa7yPt9RvVfbnq91vsN38o5t61yxf99t2/PdxokZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEDsqQe4bWbqEa4659QjrOC9umPbOvNu9hGfsO35bttHnu+7OTEDAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIg99QC3nXPqEa6ameS629a5Yp3vqNa52r++G3dU67zNtv3LHb5XfIITMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACA2FMPsMXM1COssG2dq/s956y67rZ1rmxb5233W7HOd/j9fbdt73PFiRkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQOypB7htZpLrnnOS63LHtue7bR9V1922ztt4r/iE6vlus+199t24w4kZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABA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"',
    number: '1234567890'
  };

  const { event, user } = data;
  return (
    <div>
      <PaymentStepper post={event} paymentData={paymentMethod} user={user} />
    </div>
  )
}

export default PaymentPage