export function fromInteger(amount, currency) {
  if (!Number.isInteger(amount)) {
    throw new TypeError('Invalid argument amount, expected an integer')
  }

  return {
    amount,
    currency
  }
}

export const EUR = 'EUR'
